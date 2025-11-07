'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full h-[500px] md:h-[600px] bg-background/95 backdrop-blur-sm relative overflow-hidden border-border">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(var(--primary))"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                Interactive 3D Experience
              </h2>
              <p className="mt-4 md:mt-6 text-muted-foreground max-w-lg text-lg">
                Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
                that capture attention and enhance your design.
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[300px] md:min-h-0">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
