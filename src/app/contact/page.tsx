import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MousePointer2, Phone } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | ODA Bekele",
  description: "Contact ODA Bekele for logo design, brand identity, website design, interior design, and creative direction.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Let us shape the next identity."
        text="Email any time or call for design requests, project conversations, or inputs on previous work."
      />

      <section className="section-shell grid gap-6 pb-28 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="relative overflow-hidden p-8">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#801422]/10" />
          <div className="relative grid gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#801422]">Direct line</p>
              <h2 className="mt-4 text-5xl leading-none">Start with a clear brief.</h2>
            </div>
            <div className="grid gap-3 text-sm text-[#231f20]/72">
              <Link href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-2xl border border-[#231f20]/10 bg-[#fffef8]/60 p-4 transition hover:border-[#801422]/35 hover:text-[#801422]">
                <Mail className="h-4 w-4" /> {contact.email}
              </Link>
              <Link href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 rounded-2xl border border-[#231f20]/10 bg-[#fffef8]/60 p-4 transition hover:border-[#801422]/35 hover:text-[#801422]">
                <Phone className="h-4 w-4" /> {contact.phone}
              </Link>
              <p className="flex items-center gap-3 rounded-2xl border border-[#231f20]/10 bg-[#fffef8]/60 p-4">
                <MapPin className="h-4 w-4" /> {contact.address}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 sm:p-8">
          <form className="grid gap-4">
            {["Name", "Email", "Project type"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-medium">
                {label}
                <input
                  className="h-14 rounded-2xl border border-[#231f20]/10 bg-[#fffef8]/70 px-4 text-base outline-none transition focus:border-[#801422]/45"
                  placeholder={label === "Project type" ? "Logo, identity, website, interior..." : label}
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea
                className="min-h-40 resize-none rounded-2xl border border-[#231f20]/10 bg-[#fffef8]/70 p-4 text-base outline-none transition focus:border-[#801422]/45"
                placeholder="Tell ODA what you are building."
              />
            </label>
            <Button type="submit" size="lg" className="mt-2 w-full">
              Send inquiry
              <MousePointer2 className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </section>
      <SiteFooter />
    </main>
  );
}
