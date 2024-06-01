import { FC } from "react";
import Card from "../nano/Card";
import Text from "../nano/Text";
import { fetchSWR } from "@/lib/swr";

const useUnresolvedTicket = () => {
  const { data } = fetchSWR("/api/unresolved-tickets");

  return {
    data: data?.data ?? [],
  };
};

const UnresolvedTicket: FC = () => {
  const { data } = useUnresolvedTicket();
  return (
    <Card>
      <div className="flex justify-between items-end">
        <Text className="font-bold">Unresolved Tickets</Text>
        <button className="block text-primary text-sm" onClick={() => {}}>
          View Details
        </button>
      </div>
      <Text className="text-sm font-medium mt-2 mb-4">
        <span className="font-normal">group: </span>Support
      </Text>

      <div>
        {data.map(
          (
            item: {
              label: string;
              value: number;
            },
            index: number
          ) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b border-b-l-gray"
            >
              <Text className="font-medium text-sm">{item.label}</Text>
              <Text className="text-gray text-sm">{item.value}</Text>
            </div>
          )
        )}
      </div>
    </Card>
  );
};

export default UnresolvedTicket;
