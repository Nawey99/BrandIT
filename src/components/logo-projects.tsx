"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { cn } from "@/lib/utils";

const logoProjects = [
  {
    name: "Arkena Coffee",
    image: "/images/pic01.webp",
    color: "#6b4a2d",
    bg: "from-[#6b4a2d]/20 to-[#d8b98d]/42",
    detail: "Coffee-market visibility with a warm, grounded identity system for exporters, importers, and producers.",
  },
  {
    name: "Cape Hotel",
    image: "/images/pic02.webp",
    color: "#334b5f",
    bg: "from-[#334b5f]/20 to-[#b8cad5]/42",
    detail: "A mountain-inspired hospitality mark built around destination, rugged texture, and calm confidence.",
  },
  {
    name: "Solidaridad SMEs",
    image: "/images/pic04.webp",
    color: "#8c5b2f",
    bg: "from-[#8c5b2f]/20 to-[#e2c195]/42",
    detail: "A collection of expressive SME logos for leather producers, each shaped around a distinct business personality.",
  },
  {
    name: "Smile Cake",
    image: "/images/pic05.webp",
    color: "#c96582",
    bg: "from-[#c96582]/20 to-[#f0cad8]/45",
    detail: "A playful bakery identity using color and softness to create instant warmth and appetite appeal.",
  },
  {
    name: "Care Land",
    image: "/images/pic08-jpg.webp",
    color: "#2f8b7b",
    bg: "from-[#2f8b7b]/20 to-[#bfe3dc]/45",
    detail: "Healthcare brand guidelines that translate a logo and color palette into a clear institutional system.",
  },
];

export function LogoProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = logoProjects[activeIndex];

  return (
    <section id="logo-projects" className="section-shell pb-28">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">Logo Projects</p>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-none text-balance">
            Select a logo. Open the drawer. Read the story.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-[#231f20]/72">
          A logo wall with an in-page drawer: no redirect, no blur, just color-aware identity context.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]" style={{ perspective: "1400px" }}>
        <div className="logo-project-grid grid auto-rows-[220px] gap-4 sm:grid-cols-2">
          {logoProjects.map((project, index) => {
            const activeCard = index === activeIndex;
            return (
              <button
                key={project.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeCard}
                className={cn(
                  "logo-project-card group relative overflow-hidden rounded-[1.65rem] border p-3 text-left shadow-[0_22px_70px_rgba(35,31,32,0.08)] transition duration-500",
                  "border-[#231f20]/10 bg-[#fffef8]/76 hover:-translate-y-1 hover:border-[#801422]/28",
                  activeCard && "is-active border-[color:color-mix(in_srgb,var(--logo-color)_42%,#fffef8)]",
                  index === 0 && "sm:row-span-2",
                )}
                style={{ "--logo-color": project.color } as CSSProperties}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-70 transition duration-500 group-hover:opacity-95", project.bg)} />
                <div className="absolute inset-4 rounded-[1.2rem] border border-white/45" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.15rem] bg-white/52">
                    <Image
                      src={project.image}
                      alt={`${project.name} logo project`}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#231f20]/62">Identity</p>
                      <h3 className="mt-1 font-serif text-3xl leading-none text-[#231f20]">{project.name}</h3>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/76 text-[#231f20] shadow-[0_12px_30px_rgba(35,31,32,0.1)]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <aside
          className="logo-project-drawer relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#231f20]/10 bg-[#fffef8]/78 p-4 shadow-[0_30px_95px_rgba(35,31,32,0.1)] backdrop-blur-2xl"
          style={{ "--logo-color": active.color } as CSSProperties}
        >
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-75", active.bg)} />
          <div className="absolute inset-5 rounded-[1.55rem] border border-white/45" />
          <div className="relative grid h-full gap-5 md:grid-rows-[1fr_auto]">
            <div className="relative min-h-[300px] overflow-hidden rounded-[1.45rem] bg-white/55">
              <Image
                key={active.image}
                src={active.image}
                alt={`${active.name} selected identity`}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-[1.45rem] border border-white/48 bg-[#fffef8]/82 p-6 shadow-[0_18px_55px_rgba(35,31,32,0.08)]">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: active.color }}>
                    Drawer details
                  </p>
                  <h3 className="mt-3 font-serif text-5xl leading-none text-[#231f20]">{active.name}</h3>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#fffef8] text-[#801422]">
                  <Layers3 className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#231f20]/76">{active.detail}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Logo system", "Color context", "Brand memory"].map((tag) => (
                  <span key={tag} className="rounded-full border border-[#231f20]/10 bg-white/58 px-3 py-1 text-xs text-[#231f20]/72">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
