import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import type { Dict } from "@/content"
import { LINKS } from "@/content"
import { ArrowRight, ArrowUpRight, CONTACT_ICONS, PinIcon, TelegramIcon } from "./Icons"
import { EASE_OUT, HandNote } from "./Pen"

/* ─── About ─────────────────────────────────────────────────────────────── */

export function About({ t }: { t: Dict }) {
  const a = t.about
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-5">
          <p className="text-[15px] font-medium text-ink-2">{a.title}</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6vw,4.75rem)]">{a.name}</h2>
          <p className="mt-6 flex items-center gap-2 text-[15px] font-medium text-ink-2">
            <PinIcon className="h-[18px] w-[18px] text-pen" />
            {a.city}
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-xl leading-relaxed md:text-[1.4rem] md:leading-[1.55]">{a.p1}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">{a.p2}</p>
          <dl className="mt-12 grid gap-x-8 sm:grid-cols-2">
            {a.creds.map((c) => (
              <div key={c.title} className="border-t border-ink/12 py-5">
                <dt className="font-semibold">{c.title}</dt>
                <dd className="mt-1 text-[15px] text-ink-3">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

/* ─── Courses ───────────────────────────────────────────────────────────── */

export function Courses({ t }: { t: Dict }) {
  const c = t.courses
  return (
    <section id="courses" className="border-t border-rule bg-paper-2/45 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <h2 className="display text-[clamp(2.4rem,5.6vw,4.4rem)] md:col-span-7">{c.title}</h2>
          <p className="max-w-md text-lg leading-relaxed text-ink-2 md:col-span-4 md:col-start-9 md:self-end">{c.sub}</p>
        </div>

        <ul className="mt-16 border-b border-ink/12">
          {c.items.map((it) => (
            <li key={it.id} className="grid gap-4 border-t border-ink/12 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <h3 className="text-2xl leading-tight font-semibold tracking-[-0.022em] md:col-span-4 md:text-[1.7rem]">
                {it.title}
                {it.note && (
                  <HandNote delay={0.3} className="ml-3 -rotate-6 align-middle text-[1.6rem]">
                    {it.note}
                  </HandNote>
                )}
              </h3>
              <p className="text-lg leading-relaxed text-ink-2 md:col-span-5">{it.desc}</p>
              <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-3 md:flex-col md:items-end md:justify-start">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="rounded-full bg-ink px-3 py-1 text-[13px] font-semibold text-paper" title={c.levelLabel}>
                    {it.level}
                  </span>
                  <span className="rounded-full border border-ink/15 px-3 py-1 text-[13px] font-medium text-ink-2">{it.duration}</span>
                </div>
                <a href={it.href} className="group inline-flex items-center gap-2 font-semibold text-pen">
                  <span className="sweep">{it.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ─── Quote ─────────────────────────────────────────────────────────────── */

export function Quote({ t }: { t: Dict }) {
  const q = t.quote
  return (
    <section className="overflow-hidden py-24 md:py-40">
      <figure className="mx-auto max-w-6xl px-5 md:px-8">
        <HandNote className="-rotate-2 text-[clamp(1.6rem,3.2vw,2.5rem)]">{q.note}</HandNote>
        <blockquote lang="en" className="display mt-5 max-w-[17ch] text-[clamp(2.3rem,6.2vw,5.2rem)] leading-[1.04]">
          “{q.text}”
        </blockquote>
        <figcaption className="mt-10 text-lg text-ink-2">{q.author}</figcaption>
      </figure>
    </section>
  )
}

/* ─── Reviews ───────────────────────────────────────────────────────────── */

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()

const FIRST = 6

export function Reviews({ t }: { t: Dict }) {
  const r = t.reviews
  const [all, setAll] = useState(false)
  const topRef = useRef<HTMLDivElement>(null)
  const shown = all ? r.items : r.items.slice(0, FIRST)

  function toggle() {
    if (all) topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    setAll((v) => !v)
  }

  return (
    <section id="reviews" className="border-t border-rule py-24 md:py-36">
      <div ref={topRef} className="mx-auto max-w-6xl scroll-mt-24 px-5 md:px-8">
        <h2 className="display max-w-[14ch] text-[clamp(2.4rem,5.6vw,4.4rem)]">{r.title}</h2>

        <div className="mt-14 columns-1 gap-5 md:columns-2 lg:columns-3">
          <AnimatePresence initial={false}>
            {shown.map((rv, i) => (
              <motion.figure
                key={rv.name + rv.context}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.5, delay: i >= FIRST ? (i - FIRST) * 0.04 : 0, ease: EASE_OUT }}
                className="mb-5 break-inside-avoid rounded-[20px] border border-ink/10 bg-sheet p-7"
              >
                <blockquote className="text-[17px] leading-relaxed">{rv.text}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper-2 text-[13px] font-semibold text-ink-2">
                    {initials(rv.name)}
                  </span>
                  <span>
                    <span className="block font-semibold">{rv.name}</span>
                    <span className="block text-sm text-ink-3">{rv.context}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        {r.items.length > FIRST && (
          <div className="mt-8 flex justify-center">
            <button type="button" onClick={toggle} aria-expanded={all} className="btn btn-line">
              {all ? r.collapse : r.showAll(r.items.length)}
              <motion.span animate={{ rotate: all ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4">
                  <path d="m5 7.5 5 5 5-5" />
                </svg>
              </motion.span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Contact ───────────────────────────────────────────────────────────── */

export function Contact({ t }: { t: Dict }) {
  const c = t.contact
  return (
    <section id="contact" className="bg-ink py-24 text-paper md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-5">
          <h2 className="display text-[clamp(2.6rem,6vw,4.75rem)]">{c.title}</h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-paper/65">{c.sub}</p>
          <p className="mt-8 flex items-center gap-2 text-[15px] text-paper/55">
            <PinIcon className="h-[18px] w-[18px]" />
            {c.where}
          </p>
        </div>

        <ul className="md:col-span-6 md:col-start-7 md:self-end">
          {c.items.map((it) => {
            const Icon = CONTACT_ICONS[it.kind as keyof typeof CONTACT_ICONS]
            return (
              <li key={it.href}>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border-t border-paper/15 py-5 md:py-6"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-paper/8 transition-colors duration-300 group-hover:bg-pen">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-paper/50">{it.label}</span>
                    <span className="block truncate text-xl font-semibold tracking-[-0.015em] md:text-2xl">{it.value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-paper/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ─── Footer ────────────────────────────────────────────────────────────── */

export function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-paper/10 bg-ink pb-28 text-paper md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-paper/50 md:flex-row md:items-center md:justify-between md:px-8">
        <span className="text-base font-semibold tracking-[-0.02em] text-paper">
          <span className="text-pen">English</span> with Daria
        </span>
        <span>
          © {new Date().getFullYear()} {t.footer.rights}
        </span>
        <a href="#top" className="sweep self-start hover:text-paper md:self-auto">
          {t.footer.top}
        </a>
      </div>
    </footer>
  )
}

/* ─── Mobile sticky CTA ─────────────────────────────────────────────────── */

export function MobileCta({ t }: { t: Dict }) {
  const [pastHero, setPastHero] = useState(false)
  const [atContact, setAtContact] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    const contact = document.getElementById("contact")
    const obs = new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { threshold: 0.1 })
    if (contact) obs.observe(contact)
    return () => {
      window.removeEventListener("scroll", onScroll)
      obs.disconnect()
    }
  }, [])

  const visible = pastHero && !atContact

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "140%" }}
          animate={{ y: 0 }}
          exit={{ y: "140%" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex gap-2 rounded-full bg-ink p-1.5 shadow-[0_16px_40px_-12px_rgb(28_26_23/0.55)] md:hidden"
        >
          <a href="#contact" className="btn btn-pen !min-h-12 flex-1">
            {t.mobileCta}
          </a>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="grid h-12 w-12 place-items-center rounded-full bg-tg text-white"
          >
            <TelegramIcon className="h-6 w-6" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
