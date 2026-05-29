import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { PaperPlaneMark } from "@/components/paper-plane-mark";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Card } from "@/components/ui/card";
import { profileSections } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Profile | ODA Bekele",
  description: "Profile, skills, experience, mentorship, education, and language background for ODA Bekele.",
};

const profileNotes = [
  "Over six years of graphic design practice across logos, identity systems, campaigns, publications, and digital assets.",
  "A process built on understanding, assessment, ideation, sketches, drafts, refinement, and careful finalization.",
  "Design is treated as a creative discipline with personality, context, and delight at the center.",
];

export default function ProfilePage() {
  return (
    <main className="relative overflow-hidden">
      <SiteHeader />

      <section className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-36 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative order-2 lg:order-1">
          <PaperPlaneMark className="absolute -left-10 -top-16 h-44 w-64 opacity-55 md:h-56 md:w-80" />
          <div className="relative mx-auto max-w-[430px]">
            <div className="absolute -inset-5 rounded-[2.3rem] border border-[#801422]/18 bg-[#801422]/6" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#231f20]/12 bg-[#fffef8] p-3 shadow-[0_38px_110px_rgba(35,31,32,0.16)]">
              <Image
                src="/images/pic10.jpg"
                alt="Oda Bekele portrait"
                fill
                loading="lazy"
                priority={false}
                sizes="(min-width: 1024px) 430px, 88vw"
                className="object-cover p-3"
              />
            </div>
            <Card className="absolute -bottom-8 left-4 max-w-[250px] p-5 md:-left-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[#801422]">Studio belief</p>
              <p className="mt-3 font-serif text-3xl leading-none">Design is a true delight.</p>
            </Card>
            <div className="absolute -right-4 top-10 rounded-full border border-[#231f20]/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] shadow-[0_18px_50px_rgba(35,31,32,0.08)] backdrop-blur-xl">
              Addis Ababa
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">Profile</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(4rem,11vw,8rem)] leading-[0.85] text-balance">
            The heart behind the studio.
          </h1>
          <div className="mt-8 grid gap-5 text-sm leading-7 text-[#231f20] md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {profileNotes.map((note) => (
              <div key={note} className="rounded-[1.4rem] border border-[#231f20]/10 bg-white/50 p-5 backdrop-blur-xl">
                <BadgeCheck className="mb-5 h-5 w-5 text-[#801422]" />
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-28">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <Card className="relative overflow-hidden p-7 md:p-9">
              <PaperPlaneMark className="absolute -right-24 -top-16 h-48 w-72 opacity-15" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#801422]">Creative identity</p>
              <h2 className="mt-5 font-serif text-5xl leading-none text-balance">
                Quiet, precise, and deeply visual.
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#231f20]/74">
                The original CV content is preserved, but the page now behaves more like a premium studio profile: fast to scan,
                personal in tone, and visually tied to the rest of the site.
              </p>
            </Card>
          </div>

          <div className="grid gap-4">
            {profileSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.title}
                  className="group grid gap-5 rounded-[1.6rem] border border-[#231f20]/10 bg-[#fffef8]/70 p-5 shadow-[0_20px_70px_rgba(35,31,32,0.07)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#801422]/30 md:grid-cols-[130px_1fr]"
                >
                  <div className="flex items-start justify-between md:block">
                    <span className="font-serif text-4xl text-[#801422]">{String(index + 1).padStart(2, "0")}</span>
                    <div className="mt-0 grid h-12 w-12 place-items-center rounded-2xl border border-[#231f20]/10 bg-white/62 md:mt-8">
                      <Icon className="h-5 w-5 text-[#801422]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-4xl leading-none">{section.title}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-[#231f20]/45 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#801422]" />
                    </div>
                    <div className="mt-5 grid gap-2">
                      {section.items.map((item) => (
                        <p key={item} className="rounded-2xl border border-[#231f20]/8 bg-white/48 px-4 py-3 text-sm leading-6 text-[#231f20]/76">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
