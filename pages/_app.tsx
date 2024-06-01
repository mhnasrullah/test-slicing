import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={clsx(font.className, "min-h-screen")}>
        <Component {...pageProps} />
      </div>
      <ToastContainer />
    </>
  );
}
