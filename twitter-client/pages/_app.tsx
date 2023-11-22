import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

import type { AppProps } from "next/app";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="1019372841768-i68oev3n3dq94h77hkl0ebmmpmj6fifl.apps.googleusercontent.com">
        <Component {...pageProps} />
        <Toaster/>
      </GoogleOAuthProvider>
    </div>
  );
}
