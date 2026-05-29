"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import * as THREE from "three";
import {
  ArrowUpRight,
  BadgeCheck,
  CircleDot,
  Gem,
  Globe2,
  Layers3,
  Palette,
  Sparkles,
  Zap,
  Waypoints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Logo Design",
    icon: Gem,
    text: "Understanding, ideation, sketching, drafting, and finalizing distinct marks that feel simple, memorable, and alive.",
    accent: "from-[#801422]/20 to-[#fffef8]/60",
  },
  {
    title: "Brand Identity Design",
    icon: Layers3,
    text: "Brand systems, guidelines, campaigns, and alignment work that preserve a clear personality across every touchpoint.",
    accent: "from-[#801422]/18 to-[#231f20]/10",
  },
  {
    title: "Website Design",
    icon: Globe2,
    text: "Modern digital experiences that turn brand strategy into clear interfaces, immersive pages, and conversion-ready journeys.",
    accent: "from-[#801422]/16 to-[#fffef8]/65",
  },
  {
    title: "Interior Design",
    icon: Palette,
    text: "Spatial identity and visual direction for interiors, balancing atmosphere, function, material, and memorable brand presence.",
    accent: "from-[#801422]/14 to-[#231f20]/10",
  },
];

const projects = [
  {
    title: "Arkena Coffee",
    image: "/images/pic01.jpg",
    role: "Digital platform and brand visibility",
    text: "A specialized marketing network for the coffee industry, connecting exporters, importers, producers, and buyers while keeping them updated on the coffee market.",
    tags: ["Brand system", "Coffee market", "Digital visibility"],
    gallery: ["/images/coffee 1.jpg", "/images/coffee 4.jpg", "/images/coffee 8.jpg"],
  },
  {
    title: "Cape Hotel",
    image: "/images/pic02.jpg",
    role: "Hospitality identity",
    text: "A hotel identity inspired by Cape Town and mountain forms, merging rugged natural texture with bold typography for an adventurous hospitality brand.",
    tags: ["Logo", "Hospitality", "Guidelines"],
    gallery: ["/images/Hotel.jpg", "/images/Hotel 5.jpg", "/images/Hotel 9.jpg"],
  },
  {
    title: "Bethany",
    image: "/images/pic03.jpg",
    role: "Marketing partner and brand alignment",
    text: "Local marketing partnership for an international NGO focused on family-based care and family empowerment.",
    tags: ["Digital marketing", "NGO", "Promotional items"],
    gallery: ["/images/Bethany.jpg", "/images/Bethany 5.jpg", "/images/Bethany 9.jpg"],
  },
  {
    title: "Solidaridad",
    image: "/images/pic04.jpg",
    role: "16 SME brand identities",
    text: "A project creating expressive logos and brand elements for leather-producing SMEs supported by Solidaridad Networks.",
    tags: ["SME identities", "Leather sector", "Social video"],
    gallery: ["/images/Sol 1.png", "/images/Sol 4.png", "/images/Sol 8.png"],
  },
  {
    title: "Smile Cake & Cookies",
    image: "/images/pic05.jpg",
    role: "Bakery identity",
    text: "A joyful identity built to make the viewer smile, using color and form to reflect the baker's personality and the happiness of sweets.",
    tags: ["Logo", "Color system", "Packaging feel"],
    gallery: ["/images/Smile mockup.jpg", "/images/pic05.jpg", "/images/Social 1.jpg"],
  },
  {
    title: "Care Land General Hospital",
    image: "/images/pic08.jpg",
    role: "Healthcare brand guidelines",
    text: "A collaborative guideline system translating the hospital's vision, logo, and color palette into a cohesive brand framework.",
    tags: ["Healthcare", "Guidelines", "Brand alignment"],
    gallery: ["/images/Options.jpg", "/images/Options-05.jpg", "/images/Options-08.jpg"],
  },
];

const process = ["Discovery", "Strategy", "Design", "Development", "Delivery"];

const experienceStack = [
  "Advanced CSS",
  "Motion Design",
  "GSAP + Framer Motion",
  "Smooth Scroll Systems",
  "Creative UI Interactions",
  "Three.js",
  "React Three Fiber",
  "GLSL Shaders",
  "Scroll Storytelling",
  "Performance Engineering",
  "Design Taste",
  "Build Original Experiences",
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function useSmoothMotionSystems() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.86,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray<HTMLElement>(".scroll-story-card");

    const ctx = gsap.context(() => {
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });

      cards.forEach((card) => {
        gsap.to(card, {
          y: -28,
          rotateX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-action]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 72, scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}

function ShaderOrb() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAccent: { value: new THREE.Color("#801422") },
      uHot: { value: new THREE.Color("#231f20") },
    }),
    [],
  );

  useFrame(({ clock, pointer }) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = clock.elapsedTime + pointer.x * 0.6;
  });

  return (
    <mesh rotation={[-0.32, 0.18, 0.08]} scale={[2.15, 2.15, 2.15]}>
      <icosahedronGeometry args={[1, 72]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        transparent
        wireframe
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          varying float vPulse;

          void main() {
            vUv = uv;
            vec3 p = position;
            float wave = sin((p.x + p.y + p.z) * 5.2 + uTime * 1.4) * 0.09;
            float ripple = cos(length(p.xy) * 8.0 - uTime * 1.8) * 0.055;
            p += normal * (wave + ripple);
            vPulse = wave + ripple;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uAccent;
          uniform vec3 uHot;
          varying vec2 vUv;
          varying float vPulse;

          void main() {
            float glow = smoothstep(-0.12, 0.14, vPulse);
            vec3 color = mix(uAccent, uHot, vUv.y + glow * 0.45);
            gl_FragColor = vec4(color, 0.16 + glow * 0.2);
          }
        `}
      />
    </mesh>
  );
}

function FuturisticCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-45">
      <div className="grid-fade absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 opacity-35" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="opacity-35"
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 3, 4]} intensity={3.2} color="#ffffff" />
        <ShaderOrb />
      </Canvas>
    </div>
  );
}

function EdenInspiredImageBlocks() {
  return (
    <section className="section-shell py-24" data-scroll-action>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="overflow-hidden p-4">
          <div className="relative aspect-[515/334] overflow-hidden rounded-[1.5rem] bg-[#fffef8]">
            <Image
              src="/images/Business card front.jpg"
              alt="Editorial brand collateral preview"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#231f20]/20" />
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#801422]">Image direction</p>
            <p className="text-sm leading-7 text-[#231f20]">
              Eden-inspired visual modules: close, tactile, brand-led pictures that make the portfolio feel more like a designed campaign than a grid of thumbnails.
            </p>
          </div>
        </Card>

        <Card className="overflow-hidden p-4">
          <div className="relative flex aspect-[3332/1679] items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#231f20]/10 bg-[linear-gradient(135deg,#fffef8,#fffef8_45%,rgba(128,20,34,0.12))]">
            <div className="absolute inset-6 rounded-[1.2rem] border border-dashed border-[#231f20]/20" />
            <div className="relative max-w-md px-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">Placeholder</p>
              <h3 className="mt-4 font-serif text-4xl leading-none">Wide hero artwork slot</h3>
              <p className="mt-4 text-sm leading-7 text-[#231f20]">
                Replace this with the wide image you will provide. The frame is already sized for a contain-style editorial visual.
              </p>
            </div>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#801422]">Future asset</p>
            <p className="text-sm leading-7 text-[#231f20]">
              This follows the wide Framer-style image treatment you referenced, but keeps the current build original until your final artwork is supplied.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function MagneticButton({
  children,
  href,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "default" | "ghost";
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14 });
  const springY = useSpring(y, { stiffness: 180, damping: 14 });

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="magnetic inline-flex"
    >
      <Button asChild size="lg" variant={variant} className={className}>
        <Link href={href}>
          {children}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Button>
    </motion.div>
  );
}

function FloatingVisual() {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [-80, 80], [-5, 5]);

  return (
    <motion.div
      style={{ y, rotate }}
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto h-[440px] w-full max-w-[520px] sm:h-[560px]"
    >
      <div className="absolute inset-x-8 top-8 h-[78%] rounded-[3rem] bg-[#231f20] shadow-[0_40px_90px_rgba(35,31,32,0.18)]" />
      <div className="image-sheen absolute inset-x-0 top-0 h-[72%] overflow-hidden rounded-[2.4rem] border border-[#231f20]/10 bg-[#fffef8]/30 shadow-[0_35px_90px_rgba(35,31,32,0.14)]">
        <Image
          src="/images/pic10.jpg"
          alt="Oda Bekele creative portrait"
          fill
          className="object-cover"
          loading="lazy"
          sizes="(min-width: 1024px) 520px, 90vw"
        />
      </div>
      <Card className="absolute -left-2 bottom-16 w-56 p-5 sm:left-0">
        <p className="text-xs uppercase tracking-[0.24em] text-[#231f20]">Studio note</p>
        <p className="mt-3 font-serif text-2xl leading-none">Design is a true delight.</p>
      </Card>
      <Card className="absolute bottom-0 right-2 w-64 p-4 sm:right-0">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[#801422] text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">6+ years</p>
            <p className="text-xs text-[#231f20]">Logos, identities, campaigns</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-normal text-[#231f20] sm:text-6xl">
        {title}
      </h2>
      {text ? <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#231f20]">{text}</p> : null}
    </motion.div>
  );
}

export default function HomePage() {
  useSmoothMotionSystems();

  return (
    <main className="relative overflow-hidden">
      <div className="scroll-progress fixed left-0 top-0 z-[70] h-1 w-full origin-left scale-x-0 bg-[#801422]" />
      <SiteHeader />

      <section id="top" className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr]">
        <FuturisticCanvas />
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#231f20]/10 bg-[#fffef8]/55 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#231f20]/70 backdrop-blur-xl">
            <CircleDot className="h-3 w-3 fill-[#801422] text-[#801422]" />
            Addis Ababa creative studio
          </div>
          <h1 className="max-w-5xl font-serif text-[clamp(4rem,12vw,9rem)] leading-[0.84] tracking-normal text-balance">
            Design is a true delight.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#231f20]">
            Hi, I am Oda B., a creative designer building expressive logos, brand systems,
            websites, and spatial identities for organizations ready to feel distinct.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton
              href="#work"
              className="border border-[#231f20]/12 bg-white text-[#231f20] shadow-[0_18px_45px_rgba(35,31,32,0.12)] hover:bg-white hover:text-[#801422]"
            >
              View featured work
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Contact
            </MagneticButton>
          </div>
        </motion.div>
        <FloatingVisual />
      </section>

      <section className="relative z-10 border-y border-[#231f20]/10 bg-[#231f20] py-5 text-[#fffef8] scanline">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="marquee flex min-w-max items-center gap-10 pr-10 text-sm uppercase tracking-[0.28em]">
            {[...Array(2)].map((_, index) => (
              <span key={index} className="flex items-center gap-10">
                Logo Design <Sparkles className="h-4 w-4" /> Brand Identity <Sparkles className="h-4 w-4" />
                Website Design <Sparkles className="h-4 w-4" /> Interior Design <Sparkles className="h-4 w-4" />
                Brand Guidelines <Sparkles className="h-4 w-4" /> Marketing Items <Sparkles className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell py-28" data-scroll-action>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">About</p>
            <h2 className="mt-4 font-serif text-5xl leading-none">A quiet obsession with better visual stories.</h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "As an industry geek of over 6 years, every day still feels like a new learning opportunity.",
              "The studio is built around patience, observation, and the belief that each brand needs its own unique component so it can stand apart.",
              "When immersed in creating new ideas, Oda becomes completely absorbed in the design process, from mood boards and sketches to polished systems.",
              "Current work includes Chief Creative Director at Brand It Trading PLC, local marketing vendor for Bethany Christian Services, and chief designer for Kal Weekly ministry.",
            ].map((text, index) => (
              <motion.div
                key={text}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Card className="h-full p-7">
                  <p className="text-sm leading-7 text-[#231f20]">{text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-24" data-scroll-action>
        <SectionTitle
          eyebrow="Services"
          title="Disciplines shaped into precise, memorable systems."
          text="Each service keeps the original ODA spirit: curiosity, careful assessment, strong personality, and the joy of making the work feel complete."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group"
              >
                <Card className="relative min-h-72 overflow-hidden p-7 transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(35,31,32,0.14)]">
                  <div className={cn("absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br blur-2xl transition duration-500 group-hover:scale-125", service.accent)} />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#231f20]/10 bg-[#fffef8]/55">
                        <Icon className="h-6 w-6 text-[#801422]" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-[#231f20] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#231f20]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-4xl leading-none">{service.title}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-[#231f20]">{service.text}</p>
                    </div>
                  </div>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </section>

      <EdenInspiredImageBlocks />

      <section id="experience" className="section-shell py-28" data-scroll-action>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
            className="scroll-story-card self-start lg:sticky lg:top-28"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">Experience stack</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-balance sm:text-7xl">
              Futuristic craft without losing the human brand story.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#231f20]">
              The redesign now blends ODA&apos;s portfolio with interaction systems that feel modern, responsive, and original:
              WebGL texture, kinetic motion, smooth scroll, and performance-aware visual depth.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {experienceStack.map((item, index) => (
              <motion.div
                key={item}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.05 }}
                className="scroll-story-card"
              >
                <Card className="group relative min-h-36 overflow-hidden p-5 transition duration-500 hover:-translate-y-2 hover:border-[#801422]/40 hover:shadow-[0_30px_90px_rgba(128,20,34,0.16)]">
                  <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#801422]/12 transition duration-500 group-hover:scale-150" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl text-[#801422]">{String(index + 1).padStart(2, "0")}</span>
                      <Zap className="h-5 w-5 text-[#801422]" />
                    </div>
                    <h3 className="mt-8 text-xl font-semibold leading-tight text-[#231f20]">{item}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-shell py-24" data-scroll-action>
        <SectionTitle
          eyebrow="Featured work"
          title="A portfolio of identities with real context and texture."
          text="The original project stories are recast as editorial case-study moments, pairing concise strategy notes with the actual visual assets from ODA's archive."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[#231f20]/10 bg-[#fffef8]/74 p-3 shadow-[0_24px_80px_rgba(35,31,32,0.08)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-[#801422]/28 hover:shadow-[0_30px_95px_rgba(128,20,34,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-white">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231f20]/28 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/45 bg-[#fffef8]/78 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#801422] backdrop-blur-xl">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#801422]">{project.role}</p>
                <h3 className="mt-3 font-serif text-4xl leading-none text-[#231f20]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#231f20]/72">{project.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#231f20]/10 bg-white/58 px-3 py-1 text-xs text-[#231f20]/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16" data-scroll-action>
        <div className="grid gap-5 rounded-[2rem] border border-[#231f20]/10 bg-[#fffef8]/72 p-6 shadow-[0_24px_80px_rgba(35,31,32,0.07)] backdrop-blur-2xl md:grid-cols-[0.85fr_1.15fr] md:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#801422]">Case-study rhythm</p>
            <h3 className="mt-4 font-serif text-4xl leading-none text-balance">Less noise, more story.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Identity logic", "Visual texture", "Launch-ready assets"].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[#231f20]/10 bg-white/55 p-5">
                <p className="text-sm font-semibold text-[#231f20]">{item}</p>
                <p className="mt-3 text-xs leading-6 text-[#231f20]/66">
                  Every featured project keeps the focus on context, system, and finished brand presence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-shell py-28" data-scroll-action>
        <SectionTitle
          eyebrow="Process"
          title="A five-stage rhythm from first question to final handoff."
          text="The workflow keeps experimentation grounded, so every sketch, interface, and guideline ladders back to a clear strategic reason."
        />
        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {process.map((step, index) => (
            <motion.div
              key={step}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative"
            >
              <Card className="group h-full p-5 transition duration-300 hover:-translate-y-2">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#801422]">0{index + 1}</span>
                  <Waypoints className="h-5 w-5 text-[#231f20]" />
                </div>
                <h3 className="text-lg font-semibold">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-[#231f20]">
                  {[
                    "Listen, audit, and understand the people, offer, and desired impression.",
                    "Define personality, audience, references, positioning, and the creative route.",
                    "Shape marks, layouts, systems, and visual language through polished iteration.",
                    "Translate the system into usable web, social, print, spatial, or guideline assets.",
                    "Refine, package, explain, and prepare everything for confident launch.",
                  ][index]}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20" data-scroll-action>
        <Card className="grid gap-8 overflow-hidden p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#801422]">Trust</p>
            <h2 className="mt-4 font-serif text-5xl leading-none">Built through ongoing creative responsibility.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Brand It Trading PLC", "Bethany Christian Services", "Kal Weekly Ministry"].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[#231f20]/10 bg-[#fffef8]/55 p-5">
                <BadgeCheck className="mb-6 h-5 w-5 text-[#801422]" />
                <p className="text-sm font-semibold leading-6">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <SiteFooter />
    </main>
  );
}
