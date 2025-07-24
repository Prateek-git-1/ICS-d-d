"use client"
import React from 'react'
import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src='/heroBg.jpg' // or "/hero.jpg" if using public folder
        alt="Hero background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Dark Overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">

          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular font-instrument text-white">
              This is the start of something new
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-white/80">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our goal
              is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>

          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero




