"use client"

import type React from "react"
import { forwardRef, useRef } from "react"

import { cn } from "../../lib/utils";
import { AnimatedBeam } from "./AnimatedBeam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden p-10" ref={containerRef}>
      <div className="flex size-full max-h-[500px] max-w-4xl flex-col items-stretch justify-between gap-16">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              className="h-126 mx-auto"
            />  
          </Circle>
          <Circle ref={div5Ref}>
             <img
              src="https://www.svgrepo.com/show/448260/amazon-ecs.svg"
              alt="ECS"
              className="h-126 mx-auto"
            />  
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Applications-database.svg/1024px-Applications-database.svg.png"
              alt="Postgresql"
              className="h-126 mx-auto"
            /> 
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <img
              src="2.svg"
              alt="Goat"
              className="h-126 mx-auto"
            /> 
          </Circle>
          <Circle ref={div6Ref}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
              alt="AWS"
              className="h-126 mx-auto"
            /> 
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226051.png?f=webp&w=256"
              alt="Python"
              className="h-120 mx-auto"
            />
            
          </Circle>
          <Circle ref={div7Ref}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Lambda_architecture_logo.svg"
              alt="Lambda"
              className="h-126 mx-auto rounded-full p-[-2]" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        // reverse
      />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        // reverse
      />
    </div>
  )
}