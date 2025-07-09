import Image from "next/image";
import { NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuList,  
  NavigationMenuTrigger,
  NavigationMenuContent, 
  NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <> 
    {/* Header */}
    <header className="w-full border-b">
      <div className="container mx-auto flex flex-wrap p-4 flex-row md:flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center font-semibold text-xl">
          ICS d&amp;d
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
        <NavigationMenu className="hidden md:flex md:items-center">
          <NavigationMenuList className="flex space-x-6 text-base md:text-sm lg:text-base">
            <NavigationMenuItem>
              <Link href="/" className="transition-colors">Home</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/services" className="transition-colors">Service</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Project</NavigationMenuTrigger>
              <NavigationMenuContent>
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

            <NavigationMenuItem>
              <Link href="/about" className="transition-colors">About Us</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" className="transition-colors">Blog</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Button */}
        <div className="mt-4 md:mt-0 hidden md:block">
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
        </div>
      </div>
    </header>
    {/* Hero */}
    <main className="">

    </main>
    {/* Services */}
    </>
  );
}
