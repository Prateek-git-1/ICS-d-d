// components/Footer.tsx
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Facebook } from "lucide-react"
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=" text-white px-8 py-12 rounded-3xl">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between gap-10">
        {/* Left Block */}
        <div className="flex-1">
          <Image
            src='/logo-1.svg'
            width={126}
            height={36}
            className=""
          />
          <h2 className="text-6xl font-semibold mt-4 mb-7">Let’s Discuss!</h2>
          <Button  className="rounded-full border-white hover:bg-white hover:text-black">
            Book a Call
          </Button>
        </div>

        {/* Right Block */}
        <div className=" grid grid-cols-2  gap-x-[40px] gap-y-[26px] text-sm text-gray-300">
          <div>
            <p className="mb-2 font-medium text-white">Call Us</p>
            <p>+91 93434 66008</p>
          </div>
          <div>
            <p className="mb-2 font-medium text-white">Email</p>
            <p>icsdnd02@gmail.com</p>
          </div>
          <div>
            <p className="mb-2 font-medium text-white">Address</p>
            <p className="font-normal">23 Design Avenue</p>
            <p className="font-normal">Cityscape Heights</p>
            <p className="font-normal">United States</p>
          </div>
          <div>
            <p className="mb-2 font-medium text-white">Legal</p>
            <p className="font-normal">Privacy Policy</p>
            <p className="font-normal">Terms & Conditions</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>©2025 Terra. All Rights Reserved</p>
        <div className="flex flex-wrap gap-6 text-white">
          <span>About</span>
          <span>Our Work</span>
          <span>Sustainable Design</span>
          <span>Materials & Innovation</span>
        </div>
        <div className="flex gap-4 text-white">
          <Instagram className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
        </div>
      </div>
    </footer>
  )
}
