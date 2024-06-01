export type BaseTypeComponent = {
  children: React.ReactNode;
  className?: string;
}

export type LoginInput = {
  email: string;
  password: string;
}

export type ListTaskType = {
  label: string;
  status: "urgent" | "new" | "default";
  complete: boolean;
};