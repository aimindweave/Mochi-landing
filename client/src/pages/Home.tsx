import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const IMAGES = {
  front: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_color_butter-4PerymdWHdtyPeGvjoknWX.png",
  angle: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_angle_v2-FmM4sM2DrZPHF2QDdxgAtj.png",
  detail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_back_v2-bPFgE5DG8LU3PzEyXJV2U8.png",
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_logo_pixel-Gc2gT2ytXbDRFaqFADeBfv.png",
  colorButter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_color_butter-4PerymdWHdtyPeGvjoknWX.png",
  colorPeach: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_color_peach-io9JMTspNgt7rgXtRE67SR.png",
  colorMint: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_color_mint-mHGGAxK6jY7WwagWW2VaxY.png",
  colorLavender: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_color_lavender-NHXT6TVCP9V4v6YfyerzNn.png",
  colorBerry: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_color_berry-SGAjEkqstLAwG9k3pGdbs4.png",
  uiHome: "/manus-storage/ui_home_screen_99fd299b.png",
  uiDaily: "/manus-storage/ui_daily_letter_c29847f5.png",
  uiAsk: "/manus-storage/ui_ask_crew_f946734b.png",
  uiWeekly: "/manus-storage/ui_weekly_letter_4af41b85.png",
  uiNight: "/manus-storage/ui_night_mode_d37da548.png",
  uiOtto: "/manus-storage/ui_otto_creation_3656c205.png",
  aiMemory: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/ai_moment_memory-YTYXMJ4ZhZwZGhE7X3ShX4.webp",
  aiCreation: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/ai_moment_creation-BAZwwfWJJgjcK8WHc7H4Kh.webp",
  aiRelationship: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/ai_moment_relationship-CLnxcZzrs9WJMUaMdPXLwe.webp",
};

const COLORS = [
  { id: "butter", name: "Butter", hex: "#FFD966", img: "colorButter" as const },
  { id: "peach", name: "Peach", hex: "#FF8A7A", img: "colorPeach" as const },
  { id: "mint", name: "Mint", hex: "#7EDCB5", img: "colorMint" as const },
  { id: "lavender", name: "Lavender", hex: "#B8A9E8", img: "colorLavender" as const },
  { id: "berry", name: "Berry", hex: "#E85D8A", img: "colorBerry" as const },
];

// Simulated waitlist count — starts at 847 and slowly increments
function useWaitlistCount() {
  const [count, setCount] = useState(847);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 2));
    }, 30000); // increment every ~30s
    return () => clearInterval(interval);
  }, []);
  return count;
}

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PixelLogo({ size = 24 }: { size?: number }) {
  return (
    <img
      src={IMAGES.logo}
      alt="Mochi logo — pixel capybara"
      className="inline-block"
      style={{ width: size, height: size }}
    />
  );
}

function Header() {
  return (
    <header className="border-b-3 border-foreground">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <PixelLogo size={28} />
          <div>
            <span className="font-[var(--font-display)] text-2xl font-900 italic tracking-tight">Mochi</span>
            <span className="text-[0.6rem] align-super font-[var(--font-mono)]">™</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span className="editorial-label text-muted-foreground">DOC 001 · v2</span>
          <a href="#signup" className="editorial-label bg-foreground text-background px-4 py-2 hover:opacity-80 transition-opacity">
            Get Early Access →
          </a>
        </div>
      </div>
      <div className="container flex items-center justify-between py-2 border-t border-foreground/20">
        <span className="editorial-label text-muted-foreground">A Desktop AI Console / Product Brief</span>
        <div className="hidden sm:flex gap-6">
          <span className="editorial-label"><strong>Market</strong> United States</span>
          <span className="editorial-label"><strong>Stage</strong> Pre-launch</span>
          <span className="editorial-label"><strong>Date</strong> May 2026</span>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ activeColor, setActiveColor }: { activeColor: number; setActiveColor: (i: number) => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const waitlistCount = useWaitlistCount();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          {/* Left: Hero copy + signup */}
          <FadeIn>
            <div className="editorial-border gold-block p-8 sm:p-12">
              <p className="editorial-label text-foreground/60 mb-6">— Headline / Hero Copy —</p>
              <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] font-900 leading-[1.08] tracking-tight mb-6">
                A tiny console for AI pets that <em className="text-[oklch(0.45_0.2_25)]">actually</em> live with you.
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-lg text-foreground/80 mb-8">
                Three small creatures, powered by frontier AI, living a quiet little life on your desk. They write, they draw, they bicker, they remember. They don't ping you. They just <em>are.</em>
              </p>

              {/* Inline signup form */}
              {!submitted ? (
                <div>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 bg-background/80 border-2 border-foreground/40 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors font-[var(--font-mono)] text-sm"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-foreground text-background font-[var(--font-mono)] text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0"
                    >
                      Join Waitlist →
                    </button>
                  </form>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="editorial-label text-foreground/50">
                      <strong className="text-foreground">{waitlistCount.toLocaleString()}</strong> people already waiting
                    </span>
                    <span className="editorial-label text-[oklch(0.45_0.2_25)]">
                      Early bird: $399
                    </span>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-foreground/30 bg-background/50 p-6 max-w-md">
                  <p className="font-[var(--font-display)] text-xl font-900 mb-1">You're in. 🎉</p>
                  <p className="text-foreground/60 text-sm">We'll email you once — when Mochi is ready.</p>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Right: Product image + color dots */}
          <FadeIn delay={0.15}>
            <div className="editorial-border bg-card p-4 transition-colors duration-300" style={{ backgroundColor: COLORS[activeColor].hex + '10' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeColor}
                  src={IMAGES[COLORS[activeColor].img]}
                  alt={`Mochi in ${COLORS[activeColor].name} — retro desktop AI pet console`}
                  className="w-full"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-foreground/20">
                <span className="editorial-label text-muted-foreground">Fig. 01 — {COLORS[activeColor].name} Edition</span>
                {/* Color dots in hero */}
                <div className="flex gap-2">
                  {COLORS.map((color, i) => (
                    <button
                      key={color.id}
                      onClick={() => setActiveColor(i)}
                      className={`w-5 h-5 rounded-full border-2 transition-all ${
                        activeColor === i ? "border-foreground scale-110" : "border-foreground/30 hover:border-foreground/60"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="editorial-label text-muted-foreground mt-3 text-center">
              $399 · No subscription · Ships Q4 2026
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="newspaper-rule">
      <div className="container py-12 lg:py-20">
        <FadeIn>
          <div className="editorial-border bg-[#1a1a1a] p-2 sm:p-3 relative group">
            {/* 16:9 aspect ratio container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {!playing ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                  {/* Pixel art GIF as background thumbnail */}
                  <img
                    src="/manus-storage/mochi_pixel_preview_6e486720.gif"
                    alt="Mochi pixel art preview — Cap reading, Otto painting, Spike walking"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark overlay for contrast */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Play button */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFD966] flex items-center justify-center hover:scale-105 transition-transform shadow-2xl mb-6"
                  >
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#1a1a1a] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>

                  {/* Caption */}
                  <p className="relative z-10 font-[var(--font-display)] text-white text-xl sm:text-2xl font-700 mb-2 text-center px-4 drop-shadow-lg">
                    See Mochi in action
                  </p>
                  <p className="relative z-10 font-[var(--font-mono)] text-white/70 text-xs sm:text-sm text-center px-4 drop-shadow">
                    30 seconds · No sound required
                  </p>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a]">
                  {/* Placeholder for actual video — replace src with real video URL */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFD966]/20 flex items-center justify-center">
                      <PixelLogo size={32} />
                    </div>
                    <p className="font-[var(--font-display)] text-white text-lg font-700 mb-2">Video coming soon</p>
                    <p className="font-[var(--font-mono)] text-white/40 text-xs">Concept video in production — check back at launch</p>
                    <button
                      onClick={() => setPlaying(false)}
                      className="mt-6 font-[var(--font-mono)] text-xs text-white/50 border border-white/20 px-4 py-2 hover:text-white hover:border-white/50 transition-colors"
                    >
                      ← Back to preview
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video label bar */}
            <div className="flex justify-between items-center mt-2 px-1">
              <span className="editorial-label text-white/40">Concept Video — 0:30</span>
              <span className="editorial-label text-white/40">Cap · Otto · Spike in their daily life</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WhatItIsSection() {
  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20">
          {/* Left: Product angle shot */}
          <FadeIn>
            <div className="editorial-border bg-card p-3">
              <img src={IMAGES.angle} alt="Mochi on a wooden desk — front and back view showing ventilation grilles" className="w-full" />
              <p className="editorial-label text-muted-foreground mt-2 px-1">Fig. 02 — Lifestyle & Rear View</p>
            </div>
          </FadeIn>

          {/* Right: What it is */}
          <FadeIn delay={0.1}>
            <div>
              <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
                What It Is
              </p>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-900 leading-[1.1] mb-6">
                A physical AI companion. Not an app. Not a service. A <em>thing.</em>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                Mochi is a palm-sized desktop console with a 4-inch pixel screen. Inside lives a tiny world with three AI characters who have personalities, create things, remember you, and develop relationships with each other over time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["No mic", "No camera"],
                  ["No subscription", "$399 one-time"],
                  ["Frontier AI", "Always on"],
                  ["Kill switch", "Your data stays local"],
                ].map(([a, b], i) => (
                  <div key={i} className="border-t-2 border-foreground pt-3">
                    <p className="font-[var(--font-mono)] text-xs font-bold">{a}</p>
                    <p className="font-[var(--font-mono)] text-xs text-muted-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AIShowcaseSection() {
  const moments = [
    {
      img: IMAGES.aiMemory,
      label: "Long-term Memory",
      caption: "Cap remembered something you said 22 days ago.",
      detail: "Not a chatbot. A companion that accumulates understanding of you over months and years.",
    },
    {
      img: IMAGES.aiCreation,
      label: "Personalized Creation",
      caption: "Otto made this after you talked about missing the ocean.",
      detail: "Every poem, every drawing, every story is generated in real-time by frontier AI. Nothing is canned. Ever.",
    },
    {
      img: IMAGES.aiRelationship,
      label: "Evolving Relationships",
      caption: "Day 1: strangers. Day 30: first fight. Day 45: they made up.",
      detail: "The three pets develop real relationships — they argue, reconcile, form inside jokes, and grow together.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
              AI Depth
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-900 leading-[1.1] mb-4">
              Not scripted. Never canned.<br /><em>Always real.</em>
            </h2>
            <p className="text-foreground/60 max-w-xl">
              Powered by frontier AI (Claude / GPT-class models). These aren't chatbot responses — they're memories, creations, and relationships that evolve over months.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid lg:grid-cols-[1fr_0.45fr] gap-8 items-start">
            {/* Main showcase image */}
            <div className="editorial-border bg-[#1a1a1a] p-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={moments[active].img}
                  alt={moments[active].caption}
                  className="w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="font-[var(--font-mono)] text-xs text-white/80 mb-1">"{moments[active].caption}"</p>
                <p className="font-[var(--font-mono)] text-[0.65rem] text-white/40">{moments[active].detail}</p>
              </div>
            </div>

            {/* Moment selector */}
            <div className="flex lg:flex-col gap-3">
              {moments.map((moment, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-4 border-2 transition-all w-full ${
                    active === i
                      ? "border-foreground bg-secondary"
                      : "border-foreground/20 hover:border-foreground/50"
                  }`}
                >
                  <span className="editorial-label text-[oklch(0.45_0.2_25)] block mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-[var(--font-display)] text-sm font-700 mb-1">{moment.label}</p>
                  <p className="font-[var(--font-mono)] text-[0.65rem] text-muted-foreground leading-relaxed">{moment.caption}</p>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ColorPickerSection({ activeColor, setActiveColor }: { activeColor: number; setActiveColor: (i: number) => void }) {
  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
              Pick Your Color
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-900 leading-[1.1] mb-4">
              Five dopamine colors.<br />Choose your vibe.
            </h2>
            <p className="text-foreground/60 max-w-lg">
              Mochi comes in five bold, saturated colorways. Each one is designed to spark joy on your desk.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid lg:grid-cols-[1fr_0.35fr] gap-8 items-start">
            {/* Main product image */}
            <div className="editorial-border p-4 transition-colors duration-300" style={{ backgroundColor: COLORS[activeColor].hex + '15' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeColor}
                  src={IMAGES[COLORS[activeColor].img]}
                  alt={`Mochi in ${COLORS[activeColor].name} colorway`}
                  className="w-full max-w-md mx-auto"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-foreground/20">
                <span className="editorial-label text-muted-foreground">Fig. 10 — {COLORS[activeColor].name} Edition</span>
                <span className="editorial-label" style={{ color: COLORS[activeColor].hex }}>{COLORS[activeColor].hex}</span>
              </div>
            </div>

            {/* Color swatches */}
            <div className="flex lg:flex-col gap-3">
              {COLORS.map((color, i) => (
                <button
                  key={color.id}
                  onClick={() => setActiveColor(i)}
                  className={`flex items-center gap-3 p-3 border-2 transition-all w-full ${
                    activeColor === i
                      ? "border-foreground"
                      : "border-foreground/20 hover:border-foreground/50"
                  }`}
                >
                  <div
                    className="w-8 h-8 shrink-0 rounded-sm"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-left">
                    <p className="font-[var(--font-mono)] text-xs font-bold uppercase">{color.name}</p>
                    <p className="font-[var(--font-mono)] text-[0.6rem] text-muted-foreground">{color.hex}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CrewSection() {
  const pets = [
    { name: "Cap", species: "Capybara", desc: "Slow, thoughtful, gives the kind of advice you wish your therapist would give.", traits: "Warm · Patient · Philosophical" },
    { name: "Otto", species: "Fox", desc: "Curious, always making things — sketches, poems, small experiments.", traits: "Creative · Eccentric · Generative" },
    { name: "Spike", species: "Hedgehog", desc: "Sharp tongue, soft heart. Says the thing nobody else will.", traits: "Deadpan · Sarcastic · Insightful" },
  ];

  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
              The Crew
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-900 leading-[1.1]">
              Three personalities.<br />One tiny world.
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-0">
          {pets.map((pet, i) => (
            <FadeIn key={pet.name} delay={i * 0.1}>
              <div className={`editorial-border p-6 sm:p-8 ${i > 0 ? "md:border-l-0" : ""}`}>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-[var(--font-display)] text-2xl font-900">{pet.name}</span>
                  <span className="editorial-label text-muted-foreground">/ {pet.species}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">{pet.desc}</p>
                <p className="editorial-label text-muted-foreground border-t-2 border-foreground pt-3">{pet.traits}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-sm text-muted-foreground max-w-lg font-[var(--font-mono)]">
            * Each pet's personality is randomly generated per-unit. Two buyers will get a Cap with different traits, drift, and quirks.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function ScreensSection() {
  const screens = [
    { src: IMAGES.uiHome, label: "Home — Idle State", fig: "03" },
    { src: IMAGES.uiDaily, label: "Morning Report", fig: "04" },
    { src: IMAGES.uiAsk, label: "Ask the Crew", fig: "05" },
    { src: IMAGES.uiWeekly, label: "Weekly Letter", fig: "06" },
    { src: IMAGES.uiNight, label: "Night Mode", fig: "07" },
    { src: IMAGES.uiOtto, label: "Otto's Gallery", fig: "08" },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
              Interface
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-900 leading-[1.1] mb-4">
              What you'll see on the screen.
            </h2>
            <p className="text-foreground/60 max-w-lg">
              The display is always on. The world is always alive. Here are the core states.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid lg:grid-cols-[1fr_0.4fr] gap-6">
            {/* Main display */}
            <div className="editorial-border bg-black p-2">
              <img
                src={screens[active].src}
                alt={screens[active].label}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="flex justify-between items-center mt-2 px-1">
                <span className="editorial-label text-muted-foreground">Fig. {screens[active].fig}</span>
                <span className="editorial-label text-muted-foreground">{screens[active].label}</span>
              </div>
            </div>

            {/* Thumbnail list */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {screens.map((screen, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-2 border-2 transition-all ${
                    active === i
                      ? "border-foreground bg-secondary"
                      : "border-foreground/20 hover:border-foreground/60"
                  }`}
                >
                  <img src={screen.src} alt={screen.label} className="w-full aspect-[4/3] object-cover mb-1" />
                  <span className="editorial-label text-[0.6rem]">{screen.label}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function MechanicsSection() {
  const mechanics = [
    {
      title: "Passive Companionship",
      desc: "The default state. Pets live their lives — reading, drawing, arguing, napping. Working alone at your desk? They're there. Not helping. Not distracting. Just... present.",
    },
    {
      title: "Morning Report",
      desc: "Every morning: what the pets did while you slept. Cap noticed you worked until 2am last night. It has thoughts about that.",
    },
    {
      title: "Ask the Crew",
      desc: "Hold OK and ask any question. All three respond from their personality angle. Cap gives wise advice. Otto answers with a poem. Spike gives the sarcastic truth.",
    },
    {
      title: "Weekly Letter",
      desc: "'What we learned about you this week' — making the AI's growing memory tangible. The most important moment of the product.",
    },
    {
      title: "Real Creation",
      desc: "Otto writes poems. Cap makes drawings. Spike writes complaints on a chalkboard. All real-time AI-generated. Nothing is canned. Ever.",
    },
    {
      title: "Growth Over Time",
      desc: "They grow smarter (memory accumulates). Their personalities sharpen (traits drift). Their relationships deepen (they fight, reconcile, bond).",
    },
  ];

  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
              How It Works
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-900 leading-[1.1]">
              Not features. <em>Behaviors.</em>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {mechanics.map((m, i) => (
            <FadeIn key={m.title} delay={i * 0.05}>
              <div className="editorial-border p-6 sm:p-8 -mt-[3px] -ml-[3px]">
                <span className="editorial-label text-muted-foreground mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[var(--font-display)] text-xl font-700 mb-3">{m.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{m.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
              Trust
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-900 leading-[1.1] mb-4">
              Built for trust,<br />not surveillance.
            </h2>
            <p className="text-foreground/60 max-w-lg">
              Your pets live on your device, not our servers. No microphone. No camera. A physical kill switch cuts all connectivity instantly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { icon: "🚫🎤", title: "No Microphone", desc: "Can't listen. Hardware absent." },
              { icon: "🚫📷", title: "No Camera", desc: "Can't watch. Hardware absent." },
              { icon: "🔴", title: "Kill Switch", desc: "Physical toggle. Cuts WiFi + BT instantly." },
              { icon: "💾", title: "Local-first", desc: "Your data stays on your device." },
            ].map((item, i) => (
              <div key={i} className="editorial-border p-6 -mt-[3px] -ml-[3px] text-center">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="font-[var(--font-mono)] text-xs font-bold uppercase mb-1">{item.title}</p>
                <p className="font-[var(--font-mono)] text-[0.65rem] text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SpecsSection() {
  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-[0.5fr_0.5fr] gap-12 lg:gap-20">
          <FadeIn>
            <div>
              <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
                Specifications
              </p>
              <h2 className="font-[var(--font-display)] text-3xl font-900 leading-[1.1] mb-8">
                Under the hood.
              </h2>

              <div className="space-y-0">
                {[
                  ["Display", "4\" IPS color, 4:3 aspect"],
                  ["Size", "~12cm × 10cm × 12cm"],
                  ["Body", "Matte ABS+PC plastic"],
                  ["Buttons", "CNC stainless steel"],
                  ["Connectivity", "WiFi + BT + USB-C"],
                  ["Controls", "OK + D-pad + toggle + kill switch"],
                  ["Sensors", "None (no mic, no camera)"],
                  ["AI", "Frontier (Claude / GPT-class)"],
                  ["Storage", "Local-first with optional cloud"],
                  ["Price", "$399 early / $449 retail"],
                  ["Subscription", "None. Ever."],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-baseline py-3 border-b border-foreground/20">
                    <span className="font-[var(--font-mono)] text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="font-[var(--font-mono)] text-sm text-foreground font-bold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="editorial-border bg-card p-3">
              <img src={IMAGES.detail} alt="Mochi back panel — ventilation, USB-C ports, and kill switch" className="w-full" />
              <p className="editorial-label text-muted-foreground mt-2 px-1">Fig. 09 — Back Panel & Ports</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="newspaper-rule gold-block">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="editorial-label text-foreground/60 mb-4">— Competitive Position —</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-900 leading-[1.1]">
              Why this, not that.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="editorial-border bg-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-3 border-foreground">
                  <th className="text-left p-4 font-[var(--font-mono)] text-xs uppercase tracking-wider"></th>
                  <th className="text-left p-4 font-[var(--font-display)] font-900 text-lg">Mochi</th>
                  <th className="text-left p-4 font-[var(--font-mono)] text-xs uppercase tracking-wider text-muted-foreground">Everyone Else</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Companions", "3 pets with evolving relationships", "Single AI character"],
                  ["Privacy", "No mic. No camera. Physical kill switch.", "Always listening"],
                  ["AI Quality", "Frontier models (Claude/GPT-class)", "Mid-tier for cost savings"],
                  ["Pricing", "$399 one-time. No subscription.", "$15–30/month forever"],
                  ["Output", "Poems, drawings, stories, letters", "Chat responses only"],
                  ["Form Factor", "Desktop presence, always on", "Phone app or portable gadget"],
                  ["Memory", "Remembers you for months/years", "Context resets each session"],
                ].map(([cat, mochi, others], i) => (
                  <tr key={cat} className={i < 6 ? "border-b border-foreground/20" : ""}>
                    <td className="p-4 font-[var(--font-mono)] text-xs uppercase tracking-wider text-muted-foreground align-top">{cat}</td>
                    <td className="p-4 font-medium text-foreground">{mochi}</td>
                    <td className="p-4 text-muted-foreground">{others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SignupSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const waitlistCount = useWaitlistCount();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="newspaper-rule" id="signup">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="editorial-border bg-foreground text-background p-8 sm:p-12 lg:p-16">
            <PixelLogo size={20} />
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-900 leading-[1.1] mt-6 mb-4">
              Be first to meet the crew.
            </h2>
            <p className="text-background/60 text-lg mb-4 max-w-lg">
              Join the waitlist for early-bird pricing ($399) and first access when Mochi launches on Kickstarter, Q4 2026.
            </p>

            {/* Urgency: spots remaining */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-2 h-2 bg-[#7EDCB5] rounded-full animate-pulse" />
              <span className="font-[var(--font-mono)] text-sm text-background/70">
                <strong className="text-background">{(1000 - waitlistCount % 1000).toLocaleString()}</strong> early-bird spots remaining out of 1,000
              </span>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 bg-background/10 border-2 border-background/30 text-background placeholder:text-background/40 focus:outline-none focus:border-background/70 transition-colors font-[var(--font-mono)] text-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#FFD966] text-foreground font-[var(--font-mono)] text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0"
                >
                  Claim My Spot →
                </button>
              </form>
            ) : (
              <div className="border-2 border-background/30 p-8 max-w-lg">
                <p className="font-[var(--font-display)] text-2xl font-900 mb-2">You're in. 🎉</p>
                <p className="text-background/60">We'll email you once — when Mochi is ready. The crew is excited to meet you.</p>
              </div>
            )}

            <p className="text-background/30 text-xs mt-6 font-[var(--font-mono)]">No spam. One email when we launch. That's it.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="newspaper-rule">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-[var(--font-display)] text-lg font-900 italic">Mochi</span>
            <PixelLogo size={20} />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span className="editorial-label text-muted-foreground">A tiny console for AI pets that actually live with you.</span>
            <span className="editorial-label text-muted-foreground">Q4 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [activeColor, setActiveColor] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection activeColor={activeColor} setActiveColor={setActiveColor} />
      <VideoSection />
      <WhatItIsSection />
      <AIShowcaseSection />
      <ColorPickerSection activeColor={activeColor} setActiveColor={setActiveColor} />
      <CrewSection />
      <ScreensSection />
      <MechanicsSection />
      <TrustSection />
      <SpecsSection />
      <DifferenceSection />
      <SignupSection />
      <Footer />
    </div>
  );
}
