import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Card } from "@/components/ui/card";
import { LogoProjects } from "@/components/logo-projects";
import { expertiseImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Expertise | ODA Bekele",
  description: "Logo design, brand guideline development, and creative process expertise from ODA Bekele.",
};

export default function ExpertisePage() {
  return (
    <main className="relative overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Expertise"
        title="Where the design process comes alive."
        text="The original expertise page described the moment where ODA becomes fully immersed in design: ideas, tools, emotion, discipline, and the search for a stronger visual answer."
      />

      <section className="section-shell grid gap-6 pb-24 lg:grid-cols-[1fr_0.9fr]">
        <Card className="overflow-hidden p-3">
          <div className="relative min-h-[520px] overflow-hidden rounded-[1.35rem] bg-[#fffef8]">
            <Image src="/images/pic11.jpg" alt="Creative expertise visual" fill loading="lazy" sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
          </div>
        </Card>
        <div className="grid gap-5">
          {[
            "I find great joy and fulfillment in the design process. When I am immersed in creating new ideas on a laptop or design computer, that is when my true passion and excitement come alive.",
            "In the design realm, I become completely absorbed, forgetting about the outside world. My thirst for knowledge and the drive to create something new take over.",
            "The process from initial ideation to final design is what I enjoy most: mood boards, rough sketches, refinement, and a polished end result.",
          ].map((text) => (
            <Card key={text} className="p-7">
              <p className="text-base leading-8 text-[#231f20]">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">Logo Design</p>
            <h2 className="mt-4 font-serif text-5xl leading-none">Identity work shaped through challenge and iteration.</h2>
            <p className="mt-6 text-base leading-8 text-[#231f20]">
              Pushing through feedback and exploring new ideas is where the work grows. The goal is not only a pleasing mark, but a brand image with personality and purpose.
            </p>
          </div>
          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3">
            {expertiseImages.map((image, index) => (
              <div key={image} className={index === 1 ? "relative overflow-hidden rounded-[1.5rem] md:row-span-2" : "relative overflow-hidden rounded-[1.5rem]"}>
                <Image src={image} alt="Logo design sample" fill loading="lazy" sizes="(min-width: 768px) 24vw, 46vw" className="object-cover transition duration-500 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoProjects />

      <section className="section-shell pb-28">
        <Card className="grid gap-8 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
          <h2 className="font-serif text-5xl leading-none">Brand Guideline Development</h2>
          <div className="space-y-5 text-base leading-8 text-[#231f20]">
            <p>
              Brand It Trading PLC won a project to create logos, brand guidelines, promotion banners, and a short video for small to medium scale enterprises working in leather production.
            </p>
            <p>
              Each SME had its own skill and experience that could be shaped into value. ODA organized a team and handcrafted many of the logo designs for the 16 SMEs.
            </p>
          </div>
        </Card>
      </section>

      <SiteFooter />
    </main>
  );
}
