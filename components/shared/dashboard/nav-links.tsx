'use client'

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Files, HomeIcon, UsersIcon } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation"
import path from "path";

const links = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon
    },
    {
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: Files
    },
    {
        name: 'Customers',
        href: '/dashboard/customers',
        icon: UsersIcon
    },
];

export default function NavLinks() {
    const pathName = usePathname();

    return (
        <>
            {links.map(({ name, href, icon }) => {
                const LinkIcon = icon;
                return (
                    <Link 
                        key={name}
                        href={href}
                        className={cn(
                            buttonVariants({variant: 'ghost'}),
                            'justify-start',
                            pathName === href ? '' : 'text-muted-foreground',
                        )}
                    >
                        <LinkIcon className="w-6 mr-2" />
                        <span className="hidden md:block" >{name}</span>
                    </Link>
                )
            })}
        </>
    )
}