import Card from "@/components/Card";
import FormLogin from "@/components/eco/FormLogin";
import BaseLayout from "@/components/layouts/Base";
import Text from "@/components/nano/Text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-dark min-h-screen">
      <BaseLayout className="flex justify-center items-center">
        <Card className="max-w-[400px]">
          <Image
            src="/logo.png"
            alt="Sekawan Media"
            width={50}
            height={50}
            className="mx-auto mt-6"
          />
          <Text className="text-center mt-2" colors="gray">
            Dashboard Kit
          </Text>
          <div className="mt-6">
            <Text size="lg" className="text-center font-medium">
              Log In to Dashboard Kit
            </Text>
            <Text size="sm" className="text-center" colors="gray">
              Enter your email and password below
            </Text>
          </div>
          <div className="mt-6">
            <FormLogin />
            <div className="mt-6 flex gap-2 justify-center">
              <Text colors="gray">Don&apos;t have an account?</Text>
              <Link href="/register" className="text-primary text-center">
                Sign up
              </Link>
            </div>
          </div>
        </Card>
      </BaseLayout>
    </div>
  );
}
