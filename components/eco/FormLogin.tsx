import { LoginInput } from "@/utils/types";
import { IconEye } from "@tabler/icons-react";
import Link from "next/link";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../nano/Button";
import { toast } from "react-toastify";
import { authService } from "@/service/auth.service";
import { useRouter } from "next/router";

const useFormLogin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    try {
      const response = await authService.login({
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      router.push("/dashboard");
    } catch (e: any) {
      toast(e?.response?.data?.message ?? "Server Error", { type: "error" });
    }
  };

  return {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

const FormLogin: FC = () => {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    setShowPassword,
    showPassword,
  } = useFormLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <label className="block text-gray font-medium mb-1">EMAIL</label>
        <div className="w-full py-2 px-3 rounded-md border border-l-gray">
          <input
            type="email"
            placeholder="Email address"
            className="outline-none w-full placeholder:text-l-gray"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Email is not valid",
              },
            })}
          />
        </div>
        {errors.email?.message && (
          <small className="text-red-500 text-sm">
            {errors.email?.message}
          </small>
        )}
      </div>
      <div className="w-full mt-4">
        <div className="flex items-center justify-between mb-1">
          <label className="block text-gray font-medium">PASSWORD</label>
          <Link href="/dashboard" className="text-gray text-sm">
            forgot password?
          </Link>
        </div>
        <div className="w-full py-2 px-3 rounded-md border border-gray flex">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="outline-none w-full placeholder:text-l-gray flex-1"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            <IconEye color="#7f8188" />
          </button>
        </div>
        {errors.password?.message && (
          <small className="text-red-500 text-sm">
            {errors.password?.message}
          </small>
        )}
      </div>
      <Button type="submit" className="mt-4">
        Log in
      </Button>
    </form>
  );
};
export default FormLogin;
