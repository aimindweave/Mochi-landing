import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const IMAGES = {
  front: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_premium_butter-7TodimcSreFj8jW4omWMqD.webp",
  angle: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_premium_mint-kHRK6UszFzx8oERJQ6vUMp.webp",
  detail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_premium_berry-dCG2F9sLopqPo3DHd7mwRH.webp",
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_logo_pixel-Gc2gT2ytXbDRFaqFADeBfv.png",
  colorButter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_premium_butter-7TodimcSreFj8jW4omWMqD.webp",
  colorPeach: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_premium_peach-dXbEwQqNcGw2fPaUxHjT6G.webp",
  colorMint: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_premium_mint-kHRK6UszFzx8oERJQ6vUMp.webp",
  colorLavender: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_premium_lavender-ELk6WxHpGw4jFsTGerNx6M.webp",
  colorBerry: "https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_premium_berry-dCG2F9sLopqPo3DHd7mwRH.webp",
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
      <div className="container flex items-center justify-between py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <PixelLogo size={24} />
          <div>
            <span className="font-[var(--font-display)] text-xl sm:text-2xl font-900 italic tracking-tight">Mochi</span>
            <span className="text-[0.5rem] sm:text-[0.6rem] align-super font-[var(--font-mono)]">™</span>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="editorial-label text-muted-foreground hidden sm:inline">DOC 001 · v2</span>
          <a href="#signup" className="editorial-label bg-foreground text-background px-3 sm:px-4 py-1.5 sm:py-2 hover:opacity-80 transition-opacity text-[0.6rem] sm:text-xs">
            Get Early Access →
          </a>
        </div>
      </div>
      <div className="container flex items-center justify-between py-1.5 sm:py-2 border-t border-foreground/20">
        <span className="editorial-label text-muted-foreground text-[0.55rem] sm:text-xs">A Desktop AI Console / Product Brief</span>
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
    <section className="py-6 sm:py-12 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-12 lg:gap-16 items-start">
          {/* Product image — shown FIRST on mobile for immediate visual impact */}
          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <div className="editorial-border bg-card p-2 sm:p-4 transition-colors duration-300" style={{ backgroundColor: COLORS[activeColor].hex + '10' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeColor}
                  src={IMAGES[COLORS[activeColor].img]}
                  alt={`Mochi in ${COLORS[activeColor].name} — retro desktop AI pet console`}
                  className="w-full max-h-[45vh] sm:max-h-none object-contain"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <div className="flex justify-between items-center mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-foreground/20">
                <span className="editorial-label text-muted-foreground text-[0.6rem] sm:text-xs">Fig. 01 — {COLORS[activeColor].name} Edition</span>
                {/* Color dots in hero */}
                <div className="flex gap-1.5 sm:gap-2">
                  {COLORS.map((color, i) => (
                    <button
                      key={color.id}
                      onClick={() => setActiveColor(i)}
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all ${
                        activeColor === i ? "border-foreground scale-110" : "border-foreground/30 hover:border-foreground/60"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="editorial-label text-muted-foreground mt-2 sm:mt-3 text-center text-[0.6rem] sm:text-xs">
              $399 · No subscription · Ships Q4 2026
            </p>
          </FadeIn>

          {/* Hero copy + signup — shown SECOND on mobile */}
          <FadeIn className="order-2 lg:order-1">
            <div className="editorial-border gold-block p-5 sm:p-8 lg:p-12">
              <p className="editorial-label text-foreground/60 mb-3 sm:mb-6 text-[0.6rem] sm:text-xs">— Headline / Hero Copy —</p>
              <h1 className="font-[var(--font-display)] text-[1.75rem] sm:text-4xl lg:text-[3.5rem] font-900 leading-[1.1] tracking-tight mb-3 sm:mb-6">
                A tiny console for AI pets that <em className="text-[oklch(0.45_0.2_25)]">actually</em> live with you.
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl leading-relaxed max-w-lg text-foreground/80 mb-5 sm:mb-8">
                Three small creatures, powered by frontier AI, living a quiet little life on your desk. They write, they draw, they bicker, they remember. They don't ping you. They just <em>are.</em>
              </p>

              {/* Inline signup form */}
              {!submitted ? (
                <div>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-background/80 border-2 border-foreground/40 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors font-[var(--font-mono)] text-xs sm:text-sm"
                    />
                    <button
                      type="submit"
                      className="px-5 sm:px-6 py-2.5 sm:py-3 bg-foreground text-background font-[var(--font-mono)] text-xs sm:text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0"
                    >
                      Join Waitlist →
                    </button>
                  </form>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3 sm:mt-4">
                    <span className="editorial-label text-foreground/50 text-[0.6rem] sm:text-xs">
                      <strong className="text-foreground">{waitlistCount.toLocaleString()}</strong> people already waiting
                    </span>
                    <span className="editorial-label text-[oklch(0.45_0.2_25)] text-[0.6rem] sm:text-xs">
                      Early bird: $399
                    </span>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-foreground/30 bg-background/50 p-4 sm:p-6 max-w-md">
                  <p className="font-[var(--font-display)] text-lg sm:text-xl font-900 mb-1">You're in. 🎉</p>
                  <p className="text-foreground/60 text-xs sm:text-sm">We'll email you once — when Mochi is ready.</p>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const INTERNALS = [
  { id: 1, label: "Outer Shell / Housing", desc: "Retro monitor shape, matte ceramic finish in your chosen color", icon: "🏠" },
  { id: 2, label: "4-inch IPS Display", desc: "Crisp pixel art UI, 480×800 resolution, wide viewing angles", icon: "🖥️" },
  { id: 3, label: "Speaker Module", desc: "2W full-range driver for clear, friendly ambient sounds", icon: "🔊" },
  { id: 4, label: "AI Compute Board", desc: "On-device NPU for local inference — your pets think privately", icon: "🧠" },
  { id: 5, label: "Local NVMe Storage", desc: "128GB for models, memories, and pet data — all yours", icon: "💾" },
  { id: 6, label: "Passive Heatsink", desc: "Copper fins for silent, fanless cooling — zero noise", icon: "🌡️" },
  { id: 7, label: "Base Dock / Mini PC Bay", desc: "Modular dock to house compute module and I/O ports", icon: "⚡" },
];

function InternalStructureSection() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section className="newspaper-rule">
      <div className="container py-12 lg:py-20">
        <FadeIn>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start">
            {/* Left: Exploded view image */}
            <div className="editorial-border bg-white p-3 sm:p-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663404962790/gypL6F8gkz7wnQxBBc7bf3/mochi_exploded_view-3EiqwH89HrxbUFCWALVMtH.webp"
                alt="Mochi internal structure exploded view — 7 layers from shell to base dock"
                className="w-full"
              />
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-foreground/20">
                <span className="editorial-label text-muted-foreground">Fig. 02 — Internal Architecture</span>
                <span className="editorial-label text-muted-foreground">7 Layers · Zero Fan Noise</span>
              </div>
            </div>

            {/* Right: Interactive layer list */}
            <div>
              <div className="editorial-border gold-block p-5 sm:p-8 mb-6">
                <p className="editorial-label text-foreground/60 mb-3">— Inside / What Makes It Tick —</p>
                <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-900 leading-tight">
                  Not a toy.<br />A <em className="text-[oklch(0.45_0.2_25)]">real computer</em>.
                </h2>
                <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                  Every Mochi houses a full AI compute stack — NPU, local storage, passive cooling. Your pets think on-device. No cloud required for daily life.
                </p>
              </div>

              <div className="space-y-1">
                {INTERNALS.map((layer) => (
                  <button
                    key={layer.id}
                    onMouseEnter={() => setActiveLayer(layer.id)}
                    onMouseLeave={() => setActiveLayer(null)}
                    onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                    className={`w-full text-left editorial-border p-3 sm:p-4 transition-all duration-200 ${
                      activeLayer === layer.id
                        ? "bg-[#FFD966]/30 border-foreground"
                        : "bg-card hover:bg-[#FFD966]/10"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg sm:text-xl">{layer.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-[var(--font-mono)] text-[0.6rem] text-foreground/40">{String(layer.id).padStart(2, '0')}</span>
                          <span className="font-[var(--font-display)] text-sm sm:text-base font-700">{layer.label}</span>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{ height: activeLayer === layer.id ? 'auto' : 0, opacity: activeLayer === layer.id ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-sm text-foreground/60 mt-1 leading-relaxed">{layer.desc}</p>
                        </motion.div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does Mochi need internet to work?",
      a: "Mochi runs locally by default — your pets live and interact even without WiFi. Internet is only needed for optional cloud-enhanced moments (like Otto's detailed paintings or Cap's long-form letters). You can toggle between fully-offline and hybrid mode anytime.",
    },
    {
      q: "Can my pets die?",
      a: "No. Mochi pets don't die, get sick, or punish you for neglecting them. They're always there when you come back. Their personalities evolve and relationships deepen over time, but there's no anxiety mechanic. This is companionship, not obligation.",
    },
    {
      q: "Where is my data stored?",
      a: "All conversation history, memories, and pet personality data are stored locally on the device. Nothing is sent to our servers unless you explicitly opt into cloud-enhanced features. The physical kill switch cuts all connectivity instantly if you ever want complete isolation.",
    },
    {
      q: "What AI models does it use?",
      a: "Mochi uses a hybrid architecture: a local model handles everyday interactions (chat, idle behaviors, basic responses), while frontier-class models (Claude/GPT-level) power the deeper moments — weekly letters, creative writing, long-term memory synthesis. You choose how much cloud involvement you want.",
    },
    {
      q: "Is there a monthly subscription?",
      a: "No. $399 is the full price. No subscription, no in-app purchases, no 'premium tier' unlock. The local AI runs forever at zero cost. Cloud-enhanced features include a generous free tier; heavy users can optionally top up, but it's never required.",
    },
    {
      q: "How is this different from a Tamagotchi?",
      a: "Tamagotchi runs on pre-programmed scripts. Mochi runs on frontier AI. Your pets remember conversations from months ago, create original artwork, write personalized letters, and develop unique relationships with each other. No two Mochi devices will ever behave the same way.",
    },
    {
      q: "Can I interact with the pets, or just watch?",
      a: "Both. The default mode is passive — pets live their lives and you observe. But you can press OK anytime to 'Ask the Crew' a question, and all three will respond from their unique personality angles. You can also leave notes, give gifts, and influence their world.",
    },
    {
      q: "When does it ship?",
      a: "We're targeting a Kickstarter launch in Q4 2026, with first units shipping Q1 2027. Join the waitlist to lock in early-bird pricing and get first access.",
    },
  ];

  return (
    <section className="newspaper-rule">
      <div className="container py-16 lg:py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="editorial-label text-[oklch(0.45_0.2_25)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[oklch(0.45_0.2_25)] rounded-full inline-block" />
              FAQ
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-900 leading-[1.1]">
              Questions you're probably asking.
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.03}>
              <div className="border-b-2 border-foreground/15">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left py-5 sm:py-6 flex items-start justify-between gap-4 group"
                >
                  <span className="flex items-start gap-3">
                    <span className="editorial-label text-muted-foreground mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[var(--font-display)] text-base sm:text-lg font-700 group-hover:text-[oklch(0.45_0.2_25)] transition-colors">
                      {faq.q}
                    </span>
                  </span>
                  <span className="font-[var(--font-mono)] text-xl shrink-0 mt-0.5 text-muted-foreground transition-transform duration-200" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'none' }}>
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === i ? '300px' : '0',
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p className="pl-9 sm:pl-12 pb-6 text-sm sm:text-base text-foreground/70 leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
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
      <InternalStructureSection />
      <WhatItIsSection />
      <AIShowcaseSection />
      <ColorPickerSection activeColor={activeColor} setActiveColor={setActiveColor} />
      <CrewSection />
      <ScreensSection />
      <MechanicsSection />
      <TrustSection />
      <SpecsSection />
      <DifferenceSection />
      <FAQSection />
      <SignupSection />
      <Footer />
    </div>
  );
}
