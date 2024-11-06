"use client"

import React from "react"
import Link from "next/link"
import Logo from "../icons/logo"
import { Badge } from "@mijn-ui/components/badge"
import { Button } from "@mijn-ui/components/button"
import { useSearchContext } from "fumadocs-ui/provider"
import { LuGithub, LuSearch } from "react-icons/lu"

const Navbar = () => {
  const { setOpenSearch } = useSearchContext()

  return (
    <header className="fixed hidden preview inset-x-0 top-0 bg-transparent z-50 md:flex justify-between items-center h-[var(--navbar-height)] w-full backdrop-blur-md">
      <nav className="flex w-full items-center justify-between px-5 py-2">
        <div className="flex items-center gap-3">
          <Link href={"/"} className="font-bold  flex items-center gap-2">
            <Logo className="fill-fd-foreground size-5 items-center" />
            MijnUI
          </Link>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/20">
            v0.0.1
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setOpenSearch(true)}
            color={"accent"}
            variant={"outline"}
            size={"sm"}
            className="gap-2"
          >
            <LuSearch />
            <span className="text-neutral-text">Search...</span>
            <div className="inline-flex border rounded-full ml-4 gap-1 h-5 px-2 py-px">
              <kbd className="text-[0.625rem]">Ctrl+</kbd>
              <kbd className="text-[0.625rem]">K</kbd>
            </div>
          </Button>
          <Button color={"accent"} size={"sm"} className="border px-2" asChild>
            <Link target="_blank" href={"https://github.com/HTLA380/MijnUI"}>
              <LuGithub size={18} />
            </Link>
          </Button>
        </div>
      </nav>

      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 100% at 100% 10%, rgba(239, 138, 94, 0.1), rgba(255, 255, 255, 0))",
        }}
      ></div>
    </header>
  )
}

export default Navbar