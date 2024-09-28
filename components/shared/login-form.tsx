'use client'

import { authenticate } from "@/lib/actions/user.actions";
import { useActionState } from "react";
import { lusitana } from "./fonts";
import { ArrowRightIcon, AtSign, CircleAlert, LockKeyhole } from "lucide-react";
import { Button } from "../ui/button";

export default function LoginForm() {
    const [erroMessage, formAction, isPending] = useActionState(authenticate, undefined);

    return (
        <form action={formAction}>
            <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
                <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                    Please login to continue
                </h1>
                <div className="w-full">
                    <div>
                        <label className="block mb-3 mt-5 font-medium text-sm" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="peer block w-full rounded-md border py-2 pl-10 text-sm outline-2"
                                placeholder="Enter your email"
                                required
                            />
                            <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block mb-3 mt-5 font-medium text-sm" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="peer block w-full rounded-md border py-2 pl-10 text-sm outline-2"
                                placeholder="Enter password"
                                minLength={6}
                                required
                            />
                            <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <Button type="submit" aria-disabled={isPending}>
                        Login <ArrowRightIcon className="ml-auto h-5 w-5" />
                    </Button>
                </div>

                <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                    { erroMessage && (
                        <>
                            <CircleAlert className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{erroMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    )
}