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

  // Text colors based on scroll state
  const navText = isScrolled
    ? "text-gray-700 hover:text-[#0f2554]"
    : "text-white/80 hover:text-white"
  const navActive = isScrolled
    ? "text-[#0f2554] font-semibold"
    : "text-white font-semibold"
  const navHoverBg = isScrolled
    ? "hover:bg-gray-50"
    : "hover:bg-white/10"
  const chevronClass = isScrolled ? "opacity-40" : "opacity-60 text-white/60"
  const mobileIconColor = isScrolled ? "text-[#0f2554]" : "text-white"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
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
        <nav className="hidden lg:flex items-center gap-1">
          {NAVBAR_DATA.map((item, index) => (
            item.subOptions ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className={cn(
                  "flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium transition-colors rounded-lg outline-none",
                  navText, navHoverBg,
                  pathname.startsWith(item.link) && navActive
                )}>
                  {item.name} <ChevronsUpDown className={cn("h-3.5 w-3.5", chevronClass)} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className={cn(
                  "bg-white shadow-xl rounded-xl border border-gray-100 p-1.5 mt-2",
                  item.subOptions.length > 6 ? "min-w-[460px] grid grid-cols-2 gap-0.5" : "min-w-[220px]"
                )}>
                  {item.subOptions.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.link}>
                      <DropdownMenuItem className={cn(
                        "cursor-pointer rounded-lg px-3.5 py-2.5 text-sm font-medium text-gray-700 transition-colors focus:text-[#0f2554] focus:bg-gray-50 hover:text-[#0f2554] hover:bg-gray-50 outline-none",
                        pathname === subItem.link && "text-[#0f2554] bg-[#0f2554]/5 font-semibold"
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
                  "px-3.5 py-2 text-[15px] font-medium transition-colors rounded-lg",
                  navText, navHoverBg,
                  pathname === item.link && navActive
                )}
              >
                {item.name}
              </Link>
            )
          ))}

          {/* AI Search */}
          <Link
            href="/ai-search"
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 ml-1 text-[15px] font-semibold rounded-lg transition-colors",
              pathname === "/ai-search"
                ? "text-[#D4AF37] bg-[#D4AF37]/10"
                : "text-[#D4AF37] hover:bg-[#D4AF37]/10"
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Search
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <NavButtonsV2 />
        </div>

        {/* Mobile Header Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/ai-search"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Search
          </Link>
          <button
            className={cn("p-2 rounded-lg transition-colors", mobileIconColor, navHoverBg)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg px-4 py-5 flex flex-col gap-3 h-[calc(100vh-56px)] overflow-y-auto">
          {NAVBAR_DATA.map((item, index) => (
            <div key={index} className="flex flex-col">
              {item.subOptions ? (
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-1">{item.name}</div>
                  <div className="flex flex-col">
                    {item.subOptions.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.link}
                        className={cn(
                          "text-sm text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors",
                          pathname === sub.link && "text-[#0f2554] font-semibold bg-gray-50"
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
                    "text-sm font-medium text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors",
                    pathname === item.link && "text-[#0f2554] font-semibold bg-gray-50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <div className="border-t border-gray-100 my-2" />

          <Link
            href="/ai-search"
            className="flex items-center gap-2 text-sm font-semibold text-[#D4AF37] py-2 px-3 rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Sparkles className="w-4 h-4" />
            AI Search
          </Link>

          <div className="pt-3 flex flex-col gap-3 pb-8">
            <NavButtonsV2 className="flex-col w-full [&>a]:w-full [&>a>button]:w-full" />
          </div>
        </div>
      )}
    </header>
  )
}

export default HeaderV2
