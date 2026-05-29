import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Images, Sparkles } from "lucide-react";
import { PaperPlaneMark } from "@/components/paper-plane-mark";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Card } from "@/components/ui/card";
import { galleryGroups } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery | ODA Bekele",
  description: "Gallery of social banners, posters, invitation cards, illustrations, business cards, roll-ups, and certificates by ODA Bekele.",
};

const featuredGallery = galleryGroups.slice(0, 3).map((group) => ({
  title: group.title,
  image: group.images[0],
  count: group.images.length,
}));

export default function GalleryPage() {
  return (
    <main className="relative overflow-hidden">
      <SiteHeader />

      <section className="section-shell grid gap-12 pb-16 pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">Gallery</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(4rem,11vw,8rem)] leading-[0.85] text-balance">
            A visual archive with sharper rhythm.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#231f20]/72">
            Social banners, posters, cards, illustrations, business cards, roll-ups, and certificates are reorganized into a calmer,
            more futuristic visual system with stronger hierarchy and less distraction.
          </p>
        </div>
        <Card className="relative min-h-[360px] overflow-hidden p-4">
          <PaperPlaneMark className="absolute -right-20 -top-16 z-10 h-52 w-80 opacity-40" />
          <div className="relative h-[360px] overflow-hidden rounded-[1.45rem] bg-[#fffef8]">
            <Image
              src="/images/Bethany 10.jpg"
              alt="Featured gallery design"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#231f20]/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 text-[#fffef8]">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#fffef8]/75">Featured system</p>
                <h2 className="mt-2 font-serif text-4xl leading-none">Campaign texture</h2>
              </div>
              <Sparkles className="h-6 w-6 shrink-0" />
            </div>
          </div>
        </Card>
      </section>

      <section className="section-shell pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredGallery.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                "group relative min-h-72 overflow-hidden rounded-[1.7rem] border border-[#231f20]/10 bg-[#fffef8]/70 p-3 shadow-[0_22px_75px_rgba(35,31,32,0.08)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2",
                index === 0 && "md:min-h-96",
              )}
            >
              <div className="relative h-full min-h-64 overflow-hidden rounded-[1.25rem]">
                <Image
                  src={item.image}
                  alt={`${item.title} featured sample`}
                  fill
                  loading="lazy"
                  unoptimized
                  sizes="(min-width: 768px) 31vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231f20]/78 via-[#231f20]/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 text-[#fffef8]">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#fffef8]/75">{item.count} pieces</p>
                  <h3 className="mt-2 font-serif text-4xl leading-none">{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-14 pb-28">
        {galleryGroups.map((group, groupIndex) => (
          <section key={group.title} className="grid gap-5 lg:grid-cols-[260px_1fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-[1.6rem] border border-[#231f20]/10 bg-white/52 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-5xl leading-none text-[#801422]">{String(groupIndex + 1).padStart(2, "0")}</span>
                  <Images className="h-5 w-5 text-[#231f20]/55" />
                </div>
                <h2 className="mt-8 font-serif text-4xl leading-none">{group.title}</h2>
                <p className="mt-4 text-sm leading-6 text-[#231f20]/64">{group.images.length} archived design pieces</p>
              </div>
            </div>

            <div className="grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {group.images.map((image, imageIndex) => (
                <article
                  key={image}
                  className={cn(
                    "group relative overflow-hidden rounded-[1.5rem] border border-[#231f20]/10 bg-[#fffef8]/70 p-3 shadow-[0_18px_65px_rgba(35,31,32,0.07)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#801422]/25",
                    imageIndex === 0 && group.images.length > 2 && "sm:col-span-2 sm:row-span-2",
                  )}
                >
                  <div className="relative h-full overflow-hidden rounded-[1.1rem] bg-white">
                    <Image
                      src={image}
                      alt={`${group.title} sample`}
                      fill
                      loading="lazy"
                      unoptimized
                      sizes="(min-width: 1280px) 28vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-white/25" />
                    <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-[#fffef8]/68 text-[#231f20] opacity-0 shadow-[0_12px_35px_rgba(35,31,32,0.12)] backdrop-blur-xl transition duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
