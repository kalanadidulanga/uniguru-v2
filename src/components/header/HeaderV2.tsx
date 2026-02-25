"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVBAR_DATA } from "@/constants/data"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronsUpDown, Menu, X, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import NavButtonsV2 from "./NavButtonsV2"

const HeaderV2 = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 xl:px-12 py-2 sm:py-3 font-sans",
        isScrolled ? "bg-white/98 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-28 sm:w-32 h-8 sm:h-10 flex-shrink-0">
          <Image
            src="/logo-1.png"
            alt="Uniguru Logo"
            fill
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md mx-4">
          {NAVBAR_DATA.map((item, index) => (
            item.subOptions ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className={cn(
                  "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[#1a3b85] hover:text-[#1a3b85] transition-colors rounded-full hover:bg-white/90 outline-none",
                  pathname.startsWith(item.link) && "text-[#1a3b85] bg-white font-semibold"
                )}>
                  {item.name} <ChevronsUpDown className="h-3 w-3 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-2xl rounded-lg p-2 min-w-[240px] mt-2">
                  {item.subOptions.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.link}>
                      <DropdownMenuItem className={cn(
                        "cursor-pointer rounded-md px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors focus:text-[#1a3b85] focus:bg-[#1a3b85]/5 hover:text-[#1a3b85] hover:bg-[#1a3b85]/5 outline-none",
                        pathname === subItem.link && "text-[#1a3b85] bg-[#1a3b85]/10 font-semibold"
                      )}>
                        {subItem.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={index}
                href={item.link}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium text-[#1a3b85] hover:text-[#1a3b85] transition-colors rounded-full hover:bg-white/90",
                  pathname === item.link && "text-[#1a3b85] bg-white font-semibold"
                )}
              >
                {item.name}
              </Link>
            )
          ))}

          {/* AI Search Special Item */}
          <Link
            href="/ai-search"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 ml-2 text-sm font-semibold text-white bg-[#1a3b85] rounded-full shadow-md hover:shadow-lg hover:bg-[#152d6b] transition-all relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-white" />
              AI Search
            </span>
            <span className="absolute top-0 right-0 w-1 h-full bg-[#D4AF37]"></span>
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <NavButtonsV2 />
        </div>

        {/* Mobile Header Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/ai-search"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#1a3b85] rounded-full shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-white" />
            AI Search
          </Link>
          <button
            className="p-2 text-[#1a3b85]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 h-[calc(100vh-80px)] overflow-y-auto">
          {/* AI Search Mobile */}
          <Link
            href="/ai-search"
            className="flex items-center gap-2 font-semibold text-white bg-[#1a3b85] px-4 py-2 rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Sparkles className="w-4 h-4 text-white" />
            AI Search
          </Link>

          {NAVBAR_DATA.map((item, index) => (
            <div key={index} className="flex flex-col">
              {item.subOptions ? (
                <div className="space-y-2">
                  <div className="font-semibold text-[#1a3b85] px-2">{item.name}</div>
                  <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#1a3b85]/20 ml-2">
                    {item.subOptions.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.link}
                        className={cn(
                          "text-sm text-gray-700 py-1 hover:text-[#1a3b85] transition-colors",
                          pathname === sub.link && "text-[#1a3b85] font-medium"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.link}
                  className={cn(
                    "font-semibold text-[#1a3b85] px-2 py-1",
                    pathname === item.link && "text-[#1a3b85]"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-3 pb-8">
            <NavButtonsV2 className="flex-col w-full [&>a]:w-full [&>a>button]:w-full" />
          </div>
        </div>
      )}
    </header>
  )
}

export default HeaderV2
