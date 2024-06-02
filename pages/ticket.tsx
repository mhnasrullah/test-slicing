import Header from "@/components/eco/Header";
import DashboardLayout from "@/components/layouts/Dashboard";
import Badge from "@/components/nano/Badge";
import Card from "@/components/nano/Card";
import Text from "@/components/nano/Text";
import { fetchSWR } from "@/lib/swr";
import { IconChevronLeft, IconChevronRight, IconDots, IconFilter, IconSortAZ } from "@tabler/icons-react";
import { useState } from "react";

const useTickets = () => {
  const [page, setPage] = useState(1);
  const { data } = fetchSWR(`/api/tickets?page=${page}`);

  return {
    data: data?.data?.data ?? [],
    total: data?.data?.meta?.total_data ?? 0,
    page,
    setPage,
    start: data?.data?.meta?.start_data,
    end: data?.data?.meta?.end_data,
  };
};

export default function Tickets() {
  const { data, page, setPage, start, end, total } = useTickets();
  return (
    <DashboardLayout>
      <Header page="Tickets" />
      <Card className="mt-6">
        <div className="flex justify-between items-center">
          <Text className="" size="lg">
            All Tickets
          </Text>
          <div className="flex gap-6">
            <button className="flex gap-1 text-l-gray">
              <IconSortAZ />
              Sort
            </button>
            <button className="flex gap-1 text-l-gray">
              <IconFilter />
              Filter
            </button>
          </div>
        </div>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-b-l-gray h-[40px]">
                <th className="text-gray font-medium text-start">
                  Tickets Detail
                </th>
                <th className="text-gray font-medium text-start">
                  Customer Name
                </th>
                <th className="text-gray font-medium text-start">Date</th>
                <th className="text-gray font-medium text-start">Priority</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="py-4 h-[80px] border-b border-b-l-gray"
                >
                  <td>
                    <div className="flex">
                      <img className="w-8 h-8 rounded-full" src={item.photo} />
                      <div className="ml-2">
                        <Text className="font-medium">{item.message}</Text>
                        <Text size="sm" colors="gray">
                          {item.last_update}
                        </Text>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Text className="font-medium">{item.name}</Text>
                      <Text colors="gray" size="sm">
                        on{" "}
                        {new Date(item.date)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replaceAll("/", ".")}
                      </Text>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Text className="font-medium">
                        {new Date(item.date)
                          .toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          })
                          .replaceAll("/", ".")}
                      </Text>
                      <Text colors="gray" size="sm">
                        {new Date(item.date)
                          .toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                          .replaceAll("/", ".")}
                      </Text>
                    </div>
                  </td>
                  <td>
                    <Badge
                      type={
                        item.priority === "Low"
                          ? "WARNING"
                          : item.priority === "Normal"
                          ? "SUCCESS"
                          : "DANGER"
                      }
                    >
                      {item.priority.toUpperCase()}
                    </Badge>
                  </td>
                  <td>
                    <button onClick={() => {}}>
                      <IconDots />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="py-4 flex gap-6 justify-end items-center">
            <div className="flex items-center text-sm gap-2">
              <Text size="sm" colors="gray">
                Rows per page
              </Text>
              <select className="outline-none font-semibold">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <Text size="sm" colors="gray">
              {start} - {end} of {total}
            </Text>
            <div>
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 bg-white text-l-gray rounded-md"
              >
                <IconChevronLeft size={20}/>
              </button>
              <button
                disabled={end === total}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 bg-white text-l-gray rounded-md"
              >
                <IconChevronRight size={20}/>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}
