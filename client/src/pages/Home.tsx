import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Image paths
const IMAGES = {
  front: "/manus-storage/industrial_design_front_49fa4acf.png",
  angle: "/manus-storage/industrial_design_angle_90897e8f.png",
  detail: "/manus-storage/industrial_design_detail_bb193069.png",
  uiHome: "/manus-storage/ui_home_screen_99fd299b.png",
  uiDaily: "/manus-storage/ui_daily_letter_c29847f5.png",
  uiAsk: "/manus-storage/ui_ask_crew_f946734b.png",
  uiWeekly: "/manus-storage/ui_weekly_letter_4af41b85.png",
  uiNight: "/manus-storage/ui_night_mode_d37da548.png",
  uiOtto: "/manus-storage/ui_otto_creation_3656c205.png",
};

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RainbowStripe() {
  return <div className="rainbow-stripe w-full" />;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-5 h-4 flex flex-col justify-between">
            <div className="h-[2px] bg-[#4CAF50] rounded-full" />
            <div className="h-[2px] bg-[#FFC107] rounded-full" />
            <div className="h-[2px] bg-[#FF9800] rounded-full" />
            <div className="h-[2px] bg-[#F44336] rounded-full" />
            <div className="h-[2px] bg-[#9C27B0] rounded-full" />
            <div className="h-[2px] bg-[#2196F3] rounded-full" />
          </div>
          <span className="font-[var(--font-display)] font-bold text-lg tracking-tight text-foreground">mochi</span>
        </div>
        <a href="#signup" className="text-sm font-medium px-5 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
          Get Notified
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 grain-texture overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <FadeIn>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Coming Q4 2026
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-900 leading-[1.1] tracking-tight mb-6">
                A tiny console for AI pets that actually live with you.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-md">
                Three AI companions — a capybara, an octopus, and a cactus — share a pixel-art world on your desk. They create, remember, and grow. No subscription. Just companionship.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#signup" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-[var(--font-display)] font-bold text-base hover:opacity-90 transition-opacity">
                  Join the Waitlist
                </a>
                <span className="text-sm text-muted-foreground">$299 early bird</span>
              </div>
            </FadeIn>
          </div>

          {/* Right: Product image */}
          <FadeIn delay={0.2} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={IMAGES.front}
                alt="Mochi — a cream-colored retro desktop console with pixel-art pets on screen"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
              {/* Floating annotation */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 bg-card px-4 py-2 rounded-lg shadow-lg border border-border">
                <p className="font-[var(--font-mono)] text-xs text-muted-foreground">4" pixel display</p>
                <p className="font-[var(--font-mono)] text-xs text-muted-foreground">CNC steel buttons</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-800 mb-6">
              Not an app. Not a speaker.<br />A presence.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mochi sits on your desk, always on, always alive. You don't open it — it just exists in your space. Like a houseplant that has opinions about your day.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <FadeIn delay={0.1}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="font-[var(--font-display)] font-bold text-lg mb-2">No microphone</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">No camera. No "Hey Mochi." Your pets can't spy on you. This is a feature.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-2xl">♾️</span>
              </div>
              <h3 className="font-[var(--font-display)] font-bold text-lg mb-2">No subscription</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">One-time purchase. Your pets live forever without monthly fees. A deliberate anti-pattern.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-[var(--font-display)] font-bold text-lg mb-2">Frontier AI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Powered by Claude/GPT-class models. These pets are genuinely intelligent, not scripted.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-accent/50 grain-texture">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Industrial Design</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-800">
              Playdate's soul. Teenage Engineering's bones.
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <FadeIn>
            <img
              src={IMAGES.angle}
              alt="Mochi three-quarter view on a wooden desk"
              className="w-full rounded-xl shadow-xl"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-[var(--font-mono)] text-xs font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-bold mb-1">Matte cream ABS+PC plastic</h3>
                  <p className="text-muted-foreground text-sm">Warm, aged 1980s tone. Substantial when held. Not glossy, not cheap.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-[var(--font-mono)] text-xs font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-bold mb-1">CNC-cut stainless steel controls</h3>
                  <p className="text-muted-foreground text-sm">One large OK button + D-pad + side toggle. Real metal hardware that clicks with precision.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-[var(--font-mono)] text-xs font-bold">03</span>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-bold mb-1">4-inch color pixel display</h3>
                  <p className="text-muted-foreground text-sm">4:3 aspect ratio IPS screen. Warm pixel art that's always alive, always changing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-[var(--font-mono)] text-xs font-bold">04</span>
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-bold mb-1">Physical airplane-mode kill switch</h3>
                  <p className="text-muted-foreground text-sm">On the back. Flip it and your pets go fully offline. True privacy, not a marketing claim.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Detail shot */}
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <img
              src={IMAGES.detail}
              alt="Close-up of Mochi buttons and material quality"
              className="w-full rounded-xl shadow-xl"
            />
            <p className="text-center text-sm text-muted-foreground mt-4 font-[var(--font-mono)]">
              ~12cm × 10cm × 12cm · Palm-sized · Inspired by the 1984 Macintosh
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PetsSection() {
  const pets = [
    {
      name: "Cap",
      species: "Capybara",
      emoji: "🦫",
      color: "bg-amber-50",
      borderColor: "border-amber-200",
      description: "Slow, thoughtful, gives the kind of advice you wish your therapist would give.",
      trait: "Warm · Patient · Philosophical",
    },
    {
      name: "Otto",
      species: "Octopus",
      emoji: "🐙",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "Curious, always making things — sketches, poems, small experiments.",
      trait: "Creative · Eccentric · Generative",
    },
    {
      name: "Spike",
      species: "Cactus",
      emoji: "🌵",
      color: "bg-green-50",
      borderColor: "border-green-200",
      description: "Sharp tongue, soft heart. Says the thing nobody else will.",
      trait: "Deadpan · Sarcastic · Insightful",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Meet the Crew</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-800 mb-4">
              Three personalities. One tiny world.
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Each pet's personality is randomly generated per-unit. Your Cap will be different from everyone else's Cap. They drift and sharpen over time.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pets.map((pet, i) => (
            <FadeIn key={pet.name} delay={i * 0.1}>
              <div className={`${pet.color} border ${pet.borderColor} rounded-2xl p-8 h-full`}>
                <div className="text-4xl mb-4">{pet.emoji}</div>
                <h3 className="font-[var(--font-display)] font-bold text-xl mb-1">{pet.name}</h3>
                <p className="font-[var(--font-mono)] text-xs text-muted-foreground mb-4">{pet.species}</p>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">{pet.description}</p>
                <p className="font-[var(--font-mono)] text-xs text-muted-foreground">{pet.trait}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function UIShowcase() {
  const screens = [
    { src: IMAGES.uiHome, label: "Home — Passive Companionship", desc: "The pets live their lives. Reading, drawing, arguing, napping. You don't have to do anything." },
    { src: IMAGES.uiDaily, label: "Morning Report", desc: "Every morning: what the pets did while you slept. Small gossip. Like a soap opera." },
    { src: IMAGES.uiAsk, label: "Ask the Crew", desc: "Hold OK and ask anything. Three perspectives, three personalities, one question." },
    { src: IMAGES.uiWeekly, label: "Weekly Letter", desc: "'What we learned about you this week' — making the AI's growing memory visible." },
    { src: IMAGES.uiNight, label: "Night Mode", desc: "Your crew rests when you rest. The world has its own rhythm." },
    { src: IMAGES.uiOtto, label: "Otto's Gallery", desc: "The pets create real content. Poems, drawings, complaints on a chalkboard. Nothing is canned." },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-accent/50 grain-texture">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Interactive Prototype</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-800 mb-4">
              A day in the life of your pets
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The screen is always on. The world is always alive. Here's what you'll see.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-5xl mx-auto">
            {/* Main display */}
            <div className="relative mb-8">
              <div className="pixel-frame rounded-lg overflow-hidden bg-black aspect-[4/3] max-w-2xl mx-auto">
                <img
                  src={screens[active].src}
                  alt={screens[active].label}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="font-[var(--font-display)] font-bold text-lg">{screens[active].label}</h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-md mx-auto">{screens[active].desc}</p>
              </div>
            </div>

            {/* Thumbnail nav */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {screens.map((screen, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    active === i ? "border-foreground shadow-lg scale-105" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={screen.src} alt={screen.label} className="w-full aspect-[4/3] object-cover" />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function GrowthSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Living System</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-800 mb-4">
              They grow. They change. They remember.
            </h2>
            <p className="text-muted-foreground">
              After 6 months, two Mochis in two homes will be running entirely different ongoing stories.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn delay={0.1}>
            <div className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-xl">📚</span>
              </div>
              <div>
                <h3 className="font-[var(--font-display)] font-bold mb-1">They grow smarter</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">RAG-based long-term memory accumulates. Your pets remember conversations from months ago and reference them naturally.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <span className="text-xl">✨</span>
              </div>
              <div>
                <h3 className="font-[var(--font-display)] font-bold mb-1">Their personalities sharpen</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Traits drift based on interaction patterns. If you always talk philosophy with Cap, Cap becomes more philosophical over months.</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <span className="text-xl">💬</span>
              </div>
              <div>
                <h3 className="font-[var(--font-display)] font-bold mb-1">Their relationships deepen</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">The inter-pet relationship graph evolves. Otto and Spike might go from strangers to friends to fight to reconciliation over a year.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 bg-accent/50">
      <div className="container">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-800 mb-4">
              What makes Mochi different
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-4 font-[var(--font-display)] font-bold"></th>
                  <th className="text-center py-4 px-4 font-[var(--font-display)] font-bold">Mochi</th>
                  <th className="text-center py-4 px-4 font-[var(--font-mono)] text-muted-foreground font-normal text-xs">Others</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Companions</td>
                  <td className="py-3 px-4 text-center text-foreground font-medium">3 pets with relationships</td>
                  <td className="py-3 px-4 text-center">Single character</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Privacy</td>
                  <td className="py-3 px-4 text-center text-foreground font-medium">No mic, no camera, kill switch</td>
                  <td className="py-3 px-4 text-center">Always listening</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">AI Quality</td>
                  <td className="py-3 px-4 text-center text-foreground font-medium">Frontier models</td>
                  <td className="py-3 px-4 text-center">Mid-tier for cost</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Pricing</td>
                  <td className="py-3 px-4 text-center text-foreground font-medium">$299 one-time</td>
                  <td className="py-3 px-4 text-center">$15-30/month</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Creation</td>
                  <td className="py-3 px-4 text-center text-foreground font-medium">Pets create poems, art, stories</td>
                  <td className="py-3 px-4 text-center">Chat only</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Form</td>
                  <td className="py-3 px-4 text-center text-foreground font-medium">Desktop presence, always on</td>
                  <td className="py-3 px-4 text-center">App or portable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SpecsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Specifications</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-800 mb-12">
              Under the hood
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                ["Display", "4\" IPS color, 4:3 aspect, pixel-style"],
                ["Dimensions", "~12cm × 10cm × 12cm"],
                ["Materials", "Matte ABS+PC, CNC stainless steel"],
                ["Connectivity", "WiFi + Bluetooth + USB-C"],
                ["Controls", "OK button + D-pad + side toggle + kill switch"],
                ["Sensors", "None (no mic, no camera)"],
                ["AI", "Frontier models (Claude / GPT-class)"],
                ["Price", "$299 early bird / $349 retail"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-baseline py-3 border-b border-border/50">
                  <span className="font-[var(--font-mono)] text-xs text-muted-foreground uppercase">{label}</span>
                  <span className="text-sm text-foreground text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SignupSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="signup" className="py-24 lg:py-32 bg-foreground text-background grain-texture">
      <div className="container">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="rainbow-stripe w-24 mx-auto mb-8 rounded-full" />
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-800 mb-4">
              Be first to meet the crew.
            </h2>
            <p className="text-background/70 mb-10 max-w-md mx-auto">
              Join the waitlist for early-bird pricing ($299) and first access when Mochi launches on Kickstarter, Q4 2026.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-background text-foreground font-[var(--font-display)] font-bold text-sm hover:opacity-90 transition-opacity shrink-0"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="bg-background/10 border border-background/20 rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-xl mb-2">🎉</p>
                <p className="font-[var(--font-display)] font-bold text-lg mb-1">You're on the list!</p>
                <p className="text-background/70 text-sm">We'll let you know when Mochi is ready. The crew is excited to meet you.</p>
              </div>
            )}

            <p className="text-background/40 text-xs mt-6">No spam. Just one email when we launch.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 flex flex-col justify-between">
              <div className="h-[1.5px] bg-[#4CAF50] rounded-full" />
              <div className="h-[1.5px] bg-[#FFC107] rounded-full" />
              <div className="h-[1.5px] bg-[#FF9800] rounded-full" />
              <div className="h-[1.5px] bg-[#F44336] rounded-full" />
              <div className="h-[1.5px] bg-[#9C27B0] rounded-full" />
              <div className="h-[1.5px] bg-[#2196F3] rounded-full" />
            </div>
            <span className="font-[var(--font-display)] font-bold text-sm">mochi</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Mochi — A tiny console for AI pets that actually live with you. Coming Q4 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <RainbowStripe />
      <PhilosophySection />
      <ProductShowcase />
      <PetsSection />
      <UIShowcase />
      <GrowthSection />
      <ComparisonSection />
      <SpecsSection />
      <SignupSection />
      <Footer />
    </div>
  );
}
