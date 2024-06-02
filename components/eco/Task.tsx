import { FC } from "react";
import Card from "../nano/Card";
import Text from "../nano/Text";
import { fetchSWR } from "@/lib/swr";
import { IconPlus } from "@tabler/icons-react";
import Checkbox from "../nano/Checkbox";
import { ListTaskType } from "@/utils/types";
import Badge from "../nano/Badge";

const useTask = () => {
  const { data } = fetchSWR("/api/task");

  return {
    data: data?.data ?? [],
  };
};

const Task: FC = () => {
  const { data } = useTask();
  return (
    <Card>
      <div className="flex justify-between items-end">
        <Text className="font-bold">Tasks</Text>
        <button className="block text-primary text-sm" onClick={() => {}}>
          View all
        </button>
      </div>
      <Text className="text-sm font-medium text-l-gray mt-2 mb-4">Today</Text>

      <div>
        <div>
          <form>
            <div className="border-b border-b-l-gray flex items-center">
              <input
                type="text"
                placeholder="Create new task"
                className="outline-none py-4 text-sm font-medium flex-1"
              />
              <button className="bg-dark-white p-2 rounded-lg">
                <IconPlus size={20} />
              </button>
            </div>
          </form>
        </div>
        {data.map((item: ListTaskType, index: number) => (
          <Checkbox
            key={index}
            isChecked={item.complete}
            className="py-4 border-b border-b-l-gray"
          >
            <div className="flex justify-between items-center w-full">
              <Text className="font-medium text-sm">{item.label}</Text>
              <Badge
                type={
                  item.status === "default"
                    ? "NETRAL"
                    : item.status === "new"
                    ? "SUCCESS"
                    : "WARNING"
                }
              >
                {item.status.toUpperCase()}
              </Badge>
            </div>
          </Checkbox>
        ))}
      </div>
    </Card>
  );
};

export default Task;
