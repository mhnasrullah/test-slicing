import Card from "@/components/Card";
import BaseLayout from "@/components/layouts/Base";
import Text from "@/components/nano/Text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-dark min-h-screen">
      <BaseLayout className="flex justify-center items-center">
        <Card className="max-w-[500px]">
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
          <div>
            <form>
              <div className="w-full">
                <div className="flex ali">

                  <label className="block text-gray">EMAIL</label>
                  <Link href="/dashboard" className="text-gray text-sm">test</Link>
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="outline-none w-full py-2 px-3 placeholder:text-gray rounded-md border border-gray"
                />
              </div>
            </form>
          </div>
        </Card>
      </BaseLayout>
    </div>
  );
}
