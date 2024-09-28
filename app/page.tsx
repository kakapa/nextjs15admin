import AppLogo from "@/components/shared/app-logo";
import { lusitana } from "@/components/shared/fonts";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-20 shrink-0 items-center rounded-lg p-4 md:h-40 bg-secondary">
        <AppLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl md:text-3xl md:leading-normal`}>
            Welcome to <strong>{`${APP_NAME}`}</strong>
          </p>
          <Button asChild className="w-1/2">
            <Link href='/login'>
              <span>Login</span> <ArrowRightIcon className="w-6" />
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            alt="Screenshot of the app showing on desktop"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshot of the app showing on mobile"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
