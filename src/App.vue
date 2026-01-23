<template>
  <div class="min-h-screen">
    <header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div class="flex items-center gap-3">
          <img
            src="/asset/img/logo-no-background.png"
            alt="WalkiTalki logo"
            class="h-10 w-10"
          />
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Portfolio</p>
            <h1 class="text-xl font-semibold text-white">WalkiTalki</h1>
          </div>
        </div>
        <div class="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="transition hover:text-brand-500"
          >
            {{ link.label }}
          </a>
        </div>
        <a
          class="rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
          href="mailto:walkitalki@email.com"
        >
          Hire Me
        </a>
      </nav>
    </header>

    <main id="top">
      <section class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
        <div class="flex-1 space-y-6">
          <p class="text-sm uppercase tracking-[0.3em] text-brand-500">Hello</p>
          <h2 class="text-4xl font-semibold leading-tight text-white md:text-5xl">
            I am WalkiTalki, a
            <span class="text-brand-500">Full Stack Developer</span> focused on building
            connected digital experiences.
          </h2>
          <p class="max-w-xl text-base leading-relaxed text-slate-300">
            I simplify complex products through thoughtful design and scalable engineering.
            My toolkit blends Vue.js, Tailwind CSS, PHP, and Laravel to deliver modern,
            reliable web applications.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              href="/asset/img/zaw%20(6).pdf"
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
            <a
              class="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200"
              href="#projects"
            >
              View Projects
            </a>
          </div>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in primarySkills"
              :key="skill"
              class="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-widest text-slate-400"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        <div class="flex-1">
          <div class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
            <img
              src="/asset/img/2-Photoroom.png-Photoroom.png"
              alt="WalkiTalki portrait"
              class="mx-auto h-72 w-72 rounded-3xl object-cover"
            />
            <div class="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div class="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <p class="text-xs uppercase text-slate-500">Specialty</p>
                <p class="text-lg font-semibold text-white">Web Apps</p>
              </div>
              <div class="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <p class="text-xs uppercase text-slate-500">Experience</p>
                <p class="text-lg font-semibold text-white">5+ Years</p>
              </div>
              <div class="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <p class="text-xs uppercase text-slate-500">Location</p>
                <p class="text-lg font-semibold text-white">Yangon, MM</p>
              </div>
              <div class="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <p class="text-xs uppercase text-slate-500">Availability</p>
                <p class="text-lg font-semibold text-white">Open Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="bg-slate-900/50 py-16">
        <div class="mx-auto w-full max-w-6xl px-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-brand-500">Skills</p>
              <h3 class="text-3xl font-semibold text-white">Modern Vue + Tailwind stack</h3>
            </div>
            <p class="max-w-xl text-sm text-slate-400">
              I build performant interfaces with Vue 3, Tailwind CSS, and a strong foundation
              in backend technologies to ship end-to-end solutions.
            </p>
          </div>
          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <div
              v-for="stack in skillCards"
              :key="stack.title"
              class="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <div class="flex items-center gap-3">
                <img :src="stack.icon" :alt="stack.title" class="h-10 w-10" />
                <h4 class="text-lg font-semibold text-white">{{ stack.title }}</h4>
              </div>
              <p class="mt-4 text-sm text-slate-400">{{ stack.description }}</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="item in stack.tools"
                  :key="item"
                  class="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-wider text-slate-400"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="mx-auto w-full max-w-6xl px-6 py-16">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-brand-500">Projects</p>
            <h3 class="text-3xl font-semibold text-white">Recent case studies</h3>
          </div>
          <a class="text-sm text-slate-400 hover:text-brand-500" href="#contact">Work with me →</a>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article
            v-for="project in projects"
            :key="project.title"
            class="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="h-56 w-full rounded-2xl object-cover"
            />
            <div class="space-y-4">
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">{{ project.tag }}</p>
                <h4 class="text-2xl font-semibold text-white">{{ project.title }}</h4>
              </div>
              <p class="text-sm text-slate-300">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.stack"
                  :key="tech"
                  class="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="bg-slate-900/60 py-16">
        <div class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
          <div class="flex-1 space-y-4">
            <p class="text-sm uppercase tracking-[0.3em] text-brand-500">Contact</p>
            <h3 class="text-3xl font-semibold text-white">Let’s build something together</h3>
            <p class="text-sm text-slate-400">
              Available for freelance and full-time opportunities. Reach out to discuss a new
              project, creative idea, or partnership.
            </p>
          </div>
          <div class="flex-1 rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
            <div class="space-y-4 text-sm text-slate-300">
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Email</p>
                <a class="text-brand-500" href="mailto:walkitalki@email.com">
                  walkitalki@email.com
                </a>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Location</p>
                <p>Yangon, Myanmar</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Socials</p>
                <div class="flex flex-wrap gap-3">
                  <a
                    v-for="social in socials"
                    :key="social.label"
                    :href="social.href"
                    class="rounded-full border border-slate-800 px-4 py-2 text-xs uppercase tracking-widest text-slate-400"
                  >
                    {{ social.label }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-800 py-8">
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2024 WalkiTalki. Built with Vue.js & Tailwind CSS.</p>
        <p>Updated portfolio starter kit.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const primarySkills = ["Vue.js", "Tailwind", "Laravel", "PHP", "REST APIs"];

const skillCards = [
  {
    title: "Front-end",
    icon: "/asset/img/vue.svg",
    description: "Vue 3 component systems with Tailwind UI patterns and responsive layouts.",
    tools: ["Vue", "Tailwind", "Vite"],
  },
  {
    title: "Back-end",
    icon: "/asset/img/laravel.svg",
    description: "API-driven experiences with PHP, Laravel, and scalable data modeling.",
    tools: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Tooling",
    icon: "/asset/img/git.svg",
    description: "Clean collaboration workflows with Git, testing, and deployment automation.",
    tools: ["Git", "CI/CD", "Figma"],
  },
];

const projects = [
  {
    title: "Modern Commerce Dashboard",
    tag: "Vue + Tailwind",
    description: "A responsive admin portal for tracking orders, revenue, and customer insights in real time.",
    image: "/asset/img/modern.png",
    stack: ["Vue", "Tailwind", "Charting"],
  },
  {
    title: "Travel Booking Experience",
    tag: "Full Stack",
    description: "End-to-end booking flow with search, availability, and payment integrations.",
    image: "/asset/img/travel.svg",
    stack: ["Laravel", "Vue", "Payments"],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Behance", href: "https://www.behance.net" },
];
</script>
