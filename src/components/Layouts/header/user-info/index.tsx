"use client";

import { ChevronUpIcon } from "@/assets/icons";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LogOutIcon, SettingsIcon, UserIcon } from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/clerk-react";

export function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const { session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded align-middle outline-none ring-primary ring-offset-2 focus-visible:ring-1 dark:ring-offset-gray-dark">
        <span className="sr-only">My Account</span>

        <figure className="flex items-center gap-3">
          <Image
            src={session?.user?.imageUrl || "/images/default-user.png"}
            className="size-12 rounded-full object-cover"
            alt={`Avatar of ${session?.user?.fullName || "User"}`}
            role="presentation"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center gap-1 font-medium text-dark dark:text-dark-6 max-[1024px]:sr-only">
            <span>{session?.user?.fullName || "User"}</span>

            <ChevronUpIcon
              aria-hidden
              className={cn(
                "rotate-180 transition-transform",
                isOpen && "rotate-0"
              )}
              strokeWidth={1.5}
            />
          </figcaption>
        </figure>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="border border-stroke bg-white shadow-md dark:border-dark-3 dark:bg-gray-dark min-[230px]:min-w-[17.5rem]"
        align="end"
      >
        <h2 className="sr-only">Informações do Usuário</h2>

        <figure className="flex items-center gap-2.5 px-5 py-3.5">
          <Image
            src={session?.user?.imageUrl || "/images/default-user.png"}
            className="size-12 rounded-full object-cover"
            alt={`Avatar for ${session?.user?.fullName || "User"}`}
            role="presentation"
            width={200}
            height={200}
          />

          <figcaption className="space-y-1 text-base font-medium">
            <div className="mb-2 leading-none text-dark dark:text-white">
              {session?.user?.fullName || "User"}
            </div>

            <div className="leading-none text-gray-6">
              {session?.user?.emailAddresses[0]?.emailAddress}
            </div>
          </figcaption>
        </figure>

        <hr className="border-[#E8E8E8] dark:border-dark-3" />

        <div className="p-2 text-base text-[#4B5563] dark:text-dark-6 [&>*]:cursor-pointer">
          <Link
            href={"/profile"}
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
          >
            <UserIcon />

            <span className="mr-auto text-base font-medium">Ver perfil</span>
          </Link>

          <Link
            href={"/pages/settings"}
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
          >
            <SettingsIcon />

            <span className="mr-auto text-base font-medium">
              Editar Usuário
            </span>
          </Link>
        </div>

        <hr className="border-[#E8E8E8] dark:border-dark-3" />

        <div className="p-2 text-base text-[#4B5563] dark:text-dark-6">
          <SignOutButton>
            <Button
              variant="default"
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white cursor-pointer"
            >
              <LogOutIcon />

              <span className="mr-auto text-base font-medium">Sair</span>
            </Button>
          </SignOutButton>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
