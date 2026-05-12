import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const evergreenLogo = "/evergreen-logo.png";

function Icon({ name, className = "h-5 w-5" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  const icons = {
    heart: <svg {...commonProps}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" /></svg>,
    home: <svg {...commonProps}><path d="m3 10 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>,
    shield: <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>,
    users: <svg {...commonProps}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    dining: <svg {...commonProps}><path d="M4 3v8" /><path d="M8 3v8" /><path d="M4 7h4" /><path d="M6 11v10" /><path d="M17 3c2 2 3 4.5 3 7.5 0 2.5-1 4.5-3 5.5v5" /></svg>,
    activity: <svg {...commonProps}><path d="M22 12h-4l-3 8L9 4l-3 8H2" /></svg>,
    sparkle: <svg {...commonProps}><path d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z" /><path d="M19 3v4" /><path d="M21 5h-4" /></svg>,
    check: <svg {...commonProps}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-5" /></svg>,
    mail: <svg {...commonProps}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
    map: <svg {...commonProps}><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15" /><path d="M15 6v15" /></svg>,
    leaf: <svg {...commonProps}><path d="M20 4c-7 0-12 5-12 12 0 2 1 4 3 5 7-2 10-7 9-17Z" /><path d="M4 20c4-6 8-9 14-11" /></svg>,
    arrow: <svg {...commonProps}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
  };

  return icons[name] || icons.leaf;
}

function Button({ children, className = "", ...props }) {
  return (
    <button {...props} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[2rem] border shadow-[0_18px_50px_rgba(5,20,13,0.14)] ${className}`}>{children}</div>;
}

const services = [
  {
    icon: "heart",
    title: "Assisted Living",
    text: "Personalized support that enhances independence, dignity, and quality of life, with care tailored to each resident's unique needs and preferences."
  },
  {
    icon: "sparkle",
    title: "Memory Care",
    text: "A secure, nurturing memory care program for individuals living with Alzheimer's disease, dementia, or other memory-related conditions."
  },
  {
    icon: "shield",
    title: "24/7 Professional Care",
    text: "Professional care staff, health monitoring, medication management, and emergency response support in a warm residential setting."
  }
];

const features = [
  "Individual care plans tailored to each resident",
  "Medication management and regular health monitoring",
  "Assistance with bathing, dressing, grooming, mobility, and daily activities",
  "Chef-prepared, home-style meals and refreshments",
  "Engaging activities, social events, wellness programs, and meaningful moments",
  "Housekeeping, laundry, linen, and beauty services",
  "Family partnership and ongoing communication",
  "Secure boutique communities with safety systems and beautiful outdoor spaces"
];

const highlights = [
  { icon: "users", label: "Care that feels personal" },
  { icon: "dining", label: "Shared meals and warm conversation" },
  { icon: "activity", label: "Slow mornings and familiar routines" },
  { icon: "home", label: "Comfortable spaces filled with light" }
];

const locations = [
  {
    state: "Maine",
    title: "Maine Communities",
    description: "Our Maine presence is coordinated through the Bangor office, supporting care across Maine communities with a calm, neighborly, home-like approach.",
    personality: "Bangor office: 175 Exchange Street, Suite 240, Bangor, ME 04401",
    type: "nature"
  },
  {
    state: "Texas",
    title: "Texas Communities",
    description: "The Texas community offers a blend of gracious living and compassionate care in a serene setting for assisted living and memory care residents.",
    personality: "Texas community details can be customized here.",
    type: "community"
  },
  {
    state: "Oklahoma",
    title: "Oklahoma Communities",
    description: "Oklahoma communities can be added here as Evergreen expands, keeping the same warm, boutique, family-like model of care.",
    personality: "Oklahoma details coming soon.",
    type: "home"
  }
];

const sitePhotos = [
  { label: "Caregiver and resident image placeholder", type: "care" },
  { label: "Community activity image placeholder", type: "community" },
  { label: "Nature courtyard image placeholder", type: "nature" }
];

const teamMembers = [
  {
    name: "Aimee Cyr",
    role: "Owner",
    description: "A highly experienced professional with more than 20 years of experience across healthcare management, mental health, and law. Her background includes healthcare credentialing and billing, with a strong commitment to patient care and healthcare standards."
  },
  {
    name: "Taylor Morris",
    role: "Owner",
    description: "A registered nurse with a Bachelor of Science in Nursing from Husson University and 10 years of experience, primarily specializing in rural emergency medicine. Taylor also brings small business ownership, leadership, and management experience."
  },
  {
    name: "Ed Sedacca, JD, LL.M",
    role: "Owner / CEO / Administrator",
    description: "Co-founder with legal, business, financial, and operational experience. Ed has helped formulate and execute the boutique assisted living, cottage-style business model and has experience in senior living design, licensing, and operations."
  },
  {
    name: "Vivien Smith",
    role: "Leadership Team",
    description: "Vivien is included as part of the Evergreen leadership team. Add her exact title and biography here once the final approved copy is available."
  }
];

function Header({ currentPage, setCurrentPage }) {
  const navClass = (page) => currentPage === page ? "text-[#d7e7d8]" : "text-[#9fb7a6] hover:text-[#eef6ee]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#31483a] bg-[#0d1f17]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
        <button onClick={() => setCurrentPage("home")} className="flex items-center gap-3 text-left" aria-label="Go to homepage">
          <div className="flex h-16 w-44 items-center justify-center rounded-[1.25rem] bg-[#f4f8f2] px-3 shadow-[0_8px_28px_rgba(0,0,0,0.22)]">
            <img src={evergreenLogo} alt="Evergreen Assisted Living logo" className="max-h-14 w-auto object-contain" />
          </div>
        </button>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <button onClick={() => setCurrentPage("home")} className={navClass("home")}>Home</button>
          <button onClick={() => setCurrentPage("team")} className={navClass("team")}>Team</button>
          <button onClick={() => setCurrentPage("locations")} className={navClass("locations")}>Locations</button>
          <a href="#contact" onClick={() => setCurrentPage("home")} className="text-[#9fb7a6] hover:text-[#eef6ee]">Contact</a>
        </nav>
        <Button onClick={() => setCurrentPage("locations")} className="bg-[#496b55] text-[#f4f8f2] hover:bg-[#5f836a]">
          <Icon name="map" className="mr-2 h-4 w-4" /> Find a Community
        </Button>
      </div>
    </header>
  );
}

function PhotoPanel({ label, type = "home", className = "" }) {
  const styles = {
    home: "from-[#16281f] via-[#3f5d49] to-[#8fa892]",
    care: "from-[#20392b] via-[#5b7a61] to-[#c5d6c4]",
    nature: "from-[#0f241b] via-[#365443] to-[#b3c7b5]",
    community: "from-[#243b2e] via-[#6f8f78] to-[#d3dfd2]"
  };

  return (
    <div className={`relative min-h-[280px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${styles[type]} p-6 shadow-[0_20px_55px_rgba(3,16,10,0.2)] ${className}`}>
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, #ffffff55 0 11%, transparent 12%), radial-gradient(circle at 78% 18%, #ffffff33 0 10%, transparent 11%), radial-gradient(circle at 70% 82%, #dbe8d355 0 18%, transparent 19%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0b1b14]/70 to-transparent" />
      <div className="absolute bottom-14 left-8 h-24 w-52 rounded-[2rem] bg-[#eef6ee]/20" />
      <div className="absolute bottom-10 right-8 h-32 w-44 rounded-[2rem] bg-[#eef6ee]/35" />
      <div className="relative flex min-h-[240px] items-end">
        <span className="rounded-full bg-[#f4f8f2]/90 px-4 py-2 text-sm font-semibold text-[#1d3528] shadow-[0_8px_20px_rgba(0,0,0,0.14)]">{label}</span>
      </div>
    </div>
  );
}

function HeroPageTitle({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d1f17] via-[#253f31] to-[#5f7d69] px-6 py-20 text-[#f4f8f2]">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 10% 15%, #ffffff66 0 10%, transparent 11%), radial-gradient(circle at 90% 25%, #ffffff44 0 14%, transparent 15%)" }} />
      <div className="relative mx-auto max-w-7xl">
        <p className="inline-flex rounded-full bg-[#eef6ee]/15 px-4 py-2 text-sm font-semibold ring-1 ring-[#d7e7d8]/25">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d7e7d8]">{text}</p>
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <main>
      <HeroPageTitle eyebrow="Meet the team" title="The people who make Evergreen feel like home." text="Meet the experienced professionals who lead Evergreen with passion, expertise, and a commitment to exceptional care." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-[#31483a] bg-[#f4f8f2]">
              <PhotoPanel label={`${member.name} photo placeholder`} type="care" className="m-4 min-h-[220px] shadow-none" />
              <div className="p-7 pt-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#496b55]">{member.role}</p>
                <h2 className="mt-3 text-2xl font-bold text-[#17281f]">{member.name}</h2>
                <p className="mt-4 leading-7 text-[#4d6154]">{member.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

function LocationsPage() {
  return (
    <main>
      <HeroPageTitle eyebrow="Find a community" title="Homes with local heart across Maine, Texas, and Oklahoma." text="Each Evergreen community is designed to feel like a real home: familiar rooms, friendly faces, daily routines, and care that reflects the local character around it." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {locations.map((location) => (
            <Card key={location.state} className="border-[#31483a] bg-[#f4f8f2]">
              <PhotoPanel label={`${location.state} community image placeholder`} type={location.type} className="m-4 shadow-none" />
              <div className="p-8 pt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#496b55]">{location.state}</p>
                <h2 className="mt-3 text-2xl font-bold text-[#17281f]">{location.title}</h2>
                <p className="mt-4 leading-7 text-[#4d6154]">{location.description}</p>
                <div className="mt-5 rounded-[1.5rem] bg-[#d7e7d8] px-4 py-3 text-sm font-semibold text-[#243f30]">{location.personality}</div>
                <Button className="mt-6 bg-[#496b55] text-[#f4f8f2] hover:bg-[#5f836a]">
                  View {location.state} Communities <Icon name="arrow" className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

function DailyLivingPage({ setCurrentPage }) {
  return (
    <main>
      <HeroPageTitle eyebrow="Living at Evergreen" title="Comfort that feels lived-in, not clinical." text="Daily life at Evergreen is shaped around warm lighting, shared meals, favorite activities, comfortable spaces, outdoor areas, and caregivers who know each resident personally." />
      <section className="bg-[#172b22] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            <PhotoPanel label={sitePhotos[1].label} type="community" className="sm:mt-12" />
            <PhotoPanel label={sitePhotos[2].label} type="nature" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a8c2a7]">Daily living</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#f4f8f2] md:text-5xl">A rhythm of care, comfort, and connection.</h2>
            <p className="mt-5 text-lg leading-8 text-[#d7e7d8]">Our communities are designed around the small things that make a place feel like home: morning coffee, home-style meals, music, conversation, gardening, quiet spaces, and meaningful daily routines.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-[1.5rem] bg-[#f4f8f2] p-4">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-[#496b55]" />
                  <span className="font-medium text-[#243f30]">{feature}</span>
                </div>
              ))}
            </div>
            <Button onClick={() => setCurrentPage("home")} className="mt-8 border border-[#d7e7d8] bg-transparent text-[#f4f8f2] hover:bg-[#263f31]">Back to Homepage</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0d1f17] text-[#f4f8f2]">
        <div className="absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-[#496b55]/45 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#8fa892]/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex rounded-[2rem] bg-[#f4f8f2] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
              <img src={evergreenLogo} alt="Evergreen Assisted Living logo" className="h-24 w-auto object-contain" />
            </div>
            <p className="mb-5 inline-flex rounded-full bg-[#eef6ee]/15 px-4 py-2 text-sm font-semibold text-[#d7e7d8] ring-1 ring-[#d7e7d8]/20">Calm, welcoming senior living communities</p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">Gentle spaces. Familiar routines. Care that feels like home.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7e7d8]">Evergreen Assisted Care provides assisted living and memory care in calm, residential homes where meals, routines, conversation, and care feel familiar from day one.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button onClick={() => setCurrentPage("locations")} className="bg-[#d7e7d8] text-[#17281f] hover:bg-[#eef6ee]"><Icon name="map" className="mr-2 h-5 w-5" /> Find a Community</Button>
              <Button onClick={() => setCurrentPage("dailyLiving")} className="border border-[#d7e7d8]/50 bg-transparent text-[#f4f8f2] hover:bg-[#243f30]">Explore Daily Living</Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-[1fr_0.72fr]">
            <PhotoPanel label={sitePhotos[0].label} type="care" className="md:row-span-2" />
            <PhotoPanel label={sitePhotos[2].label} type="nature" className="min-h-[220px]" />
            <Card className="border-[#31483a] bg-[#f4f8f2]/95">
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#496b55]">The little things that make it feel like home</p>
                <div className="mt-5 space-y-4">
                  {highlights.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="rounded-full bg-[#d7e7d8] p-2 text-[#496b55]"><Icon name={item.icon} /></div>
                      <span className="font-medium text-[#243f30]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#172b22] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a8c2a7]">Personalized care</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#f4f8f2] md:text-5xl">Care built around daily life, not just daily tasks.</h2>
            <p className="mt-5 text-lg leading-8 text-[#d7e7d8]">From morning coffee to evening check-ins, our team works with families to create routines that feel familiar, respectful, and reassuring.</p>
            <PhotoPanel label={sitePhotos[0].label} type="care" className="mt-8 hidden lg:block" />
          </div>
          <div className="space-y-5">
            {services.map((service) => (
              <Card key={service.title} className="border-[#31483a] bg-[#f4f8f2]">
                <div className="flex gap-5 p-7">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[#d7e7d8] text-[#496b55]"><Icon name={service.icon} className="h-7 w-7" /></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#17281f]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[#4d6154]">{service.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0d1f17] via-[#253f31] to-[#5f7d69] p-8 text-[#f4f8f2] shadow-[0_18px_50px_rgba(3,16,10,0.2)] md:p-14">
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a8c2a7]">Schedule a tour</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Come see the home, meet the people, and feel the difference.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d7e7d8]">Visit a community, meet the care team, and picture what daily life could feel like for your loved one.</p>
            </div>
            <Card className="border-[#d7e7d8]/20 bg-[#f4f8f2] text-[#17281f]">
              <div className="space-y-4 p-8">
                <a href="mailto:info@yourdomain.com" className="flex items-center gap-3 rounded-[1.5rem] bg-[#d7e7d8] p-4 font-semibold hover:bg-[#eef6ee]"><Icon name="mail" className="h-5 w-5 text-[#496b55]" /> info@yourdomain.com</a>
                <Button onClick={() => setCurrentPage("locations")} className="w-full bg-[#496b55] py-4 text-[#f4f8f2] hover:bg-[#5f836a]">Find a Community</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#0d1f17] text-[#f4f8f2]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "locations" ? (
        <LocationsPage />
      ) : currentPage === "team" ? (
        <TeamPage />
      ) : currentPage === "dailyLiving" ? (
        <DailyLivingPage setCurrentPage={setCurrentPage} />
      ) : (
        <HomePage setCurrentPage={setCurrentPage} />
      )}
      <section id="contact" className="bg-[#0f241b] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#f4f8f2]">Evergreen Assisted Care</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#d7e7d8]">Assisted living and memory care shaped around safety, dignity, local character, and a true sense of home across Maine, Texas, and Oklahoma.</p>
            </div>
            <div className="rounded-[2rem] bg-[#f4f8f2] p-6 text-[#17281f] shadow-[0_10px_35px_rgba(0,0,0,0.18)]">
              <p className="font-semibold">Website forwarding note</p>
              <p className="mt-2 text-sm leading-6 text-[#4d6154]">Point your new domain to this site using your domain registrar's DNS settings, then set the domain in Vercel once hosting is active.</p>
            </div>
          </div>
          <div className="mt-12 border-t border-[#31483a] pt-6 text-sm text-[#9fb7a6]">© 2026 Evergreen Assisted Care. All rights reserved.</div>
        </div>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
