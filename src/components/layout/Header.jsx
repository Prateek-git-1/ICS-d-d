"use client"

import { NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuList,  
  NavigationMenuTrigger,
  NavigationMenuContent, 
  NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Rocket, Menu, Phone } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'


export default function Header() {
  return (
    <header className="fixed  top-0 left-0 w-full z-50">
      <div className="container mt-3 mx-auto flex flex-wrap p-5  flex-row md:flex-row items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image
          src='/logo-1.svg'
          width={126}
          height={36}
          />
        </Link>
                    
         {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-3 ml-auto">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col items-center space-y-6 mt-16">
                <Link href="/">Home</Link>
                <Link href="/services">Service</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Button variant="outline">
                  Query Now
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex md:items-center md:ml-auto md:mr-auto bg-black/30  px-[9]  rounded-4xl backdrop-blur-sm">
          <NavigationMenuList className="flex text-base md:text-sm lg:text-base">
            <NavigationMenuItem className=" px-[16px] py-[8px]">
              <Link href="/" className="transition-colors">Home</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className=" px-[16px] py-[8px]">
              <Link href="/services" className="transition-colors">Service</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className=" px-[16px] py-[8px]">
              <NavigationMenuTrigger
              className="bg-transparent hover:bg-transparent text-white px-3 py-1 "
              >Project</NavigationMenuTrigger>
              <NavigationMenuContent 
               className="bg-white/10 backdrop-blur-md rounded-xl p-4 mt-2 shadow-lg border border-white/10 w-48 z-50"
              >
                <ul className="grid w-[200px] gap-2 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Components</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Documentation</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Blocks</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className=" px-[16px] py-[8px]">
              <Link href="/about" className="transition-colors">About Us</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className=" px-[16px] py-[8px]">
              <Link href="/blog" className="transition-colors">Blog</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Button */}
        <div className="mt-4 md:mt-0 hidden md:block">
          <Button className="rounded-3xl px-6 py-2">
            Contact Us
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

      </div>
      
    </header>
  )
}

