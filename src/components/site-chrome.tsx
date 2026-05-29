"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Globe2, Mail, Menu, MousePointer2, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, siteNav } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(100%-1.5rem,1120px)] -translate-x-1/2">
      <nav className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-[#fffef8]/58 px-3 py-3 shadow-[0_22px_70px_rgba(35,31,32,0.12),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-2xl before:absolute before:inset-0 before:z-0 before:pointer-events-none before:bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(255,254,248,0.18)_42%,rgba(128,20,34,0.08))] before:content-[''] md:rounded-full md:px-4">
        <div className="relative z-10 flex items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)} aria-label="ODA home">
          <span className="grid h-11 w-11 place-items-center">
            <Image src="/images/favicon.png" alt="" width={40} height={40} unoptimized className="h-10 w-10 object-contain" priority />
          </span>
        </Link>
        <div className="hidden items-center gap-5 text-sm text-[#231f20] md:flex">
          {siteNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 transition hover:bg-[#801422]/8 hover:text-[#801422]",
                  active && "bg-[#801422] !text-[#fffef8] shadow-[0_12px_30px_rgba(128,20,34,0.18)] hover:bg-[#801422] hover:!text-[#fffef8]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <Button
          asChild
          size="sm"
          className="hidden bg-[linear-gradient(135deg,#801422,#231f20)] !text-[#fffef8] shadow-[0_18px_45px_rgba(128,20,34,0.22)] hover:bg-[linear-gradient(135deg,#231f20,#801422)] md:inline-flex"
        >
          <Link href="/contact">Contact</Link>
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        </div>
        <div
          className={cn(
            "relative z-10 grid transition-[grid-template-rows,opacity] duration-300 md:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="mt-3 grid gap-2 border-t border-[#231f20]/10 pt-3">
              {siteNav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-semibold text-[#231f20]/74 transition hover:bg-[#801422]/8 hover:text-[#801422]",
                      active && "bg-[#801422] !text-[#fffef8] hover:bg-[#801422] hover:!text-[#fffef8]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button
                asChild
                className="mt-1 w-full bg-[linear-gradient(135deg,#801422,#231f20)] !text-[#fffef8] shadow-[0_18px_45px_rgba(128,20,34,0.22)] hover:bg-[linear-gradient(135deg,#231f20,#801422)]"
                onClick={() => setOpen(false)}
              >
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[#231f20]/10 bg-[#fffef8]/60 py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-3xl">ODA Bekele</p>
          <p className="mt-2 text-sm text-[#231f20]/70">Creative design studio. Design is a true delight.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild size="icon" variant="ghost" aria-label="Instagram">
            <Link href={contact.instagram}><Sparkles className="h-4 w-4" /></Link>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="LinkedIn">
            <Link href={contact.linkedin}><Globe2 className="h-4 w-4" /></Link>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="Facebook">
            <Link href={contact.facebook}><MousePointer2 className="h-4 w-4" /></Link>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="Email">
            <Link href={`mailto:${contact.email}`}><Mail className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="section-shell pb-16 pt-36">
      <div className="max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">{eyebrow}</p>
        <h1 className="mt-5 font-serif text-[clamp(4rem,12vw,8.5rem)] leading-[0.86] text-balance">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#231f20]/72">{text}</p>
      </div>
    </section>
  );
}
