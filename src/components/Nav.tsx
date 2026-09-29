import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import type { Dict, Lang } from "@/content"
import { EASE_OUT } from "./Pen"

export const SECTIONS = ["club", "about", "courses", "reviews", "contact"] as const

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const visible = new Set<string>()
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        }
        setActive(SECTIONS.find((id) => visible.has(id)) ?? null)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return active
}

function LangSwitch({ lang, setLang, label }: { lang: Lang; setLang: (l: Lang) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="relative flex rounded-full border border-ink/15 p-0.5 text-[13px] font-semibold">
      {(["ru", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`relative z-10 h-8 w-10 rounded-full uppercase transition-colors duration-200 ${
            lang === l ? "text-paper" : "text-ink-2 hover:text-ink"
          }`}
        >
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 -z-10 rounded-full bg-ink"
              transition={{ type: "spring", stiffness: 500, damping: 38 }}
            />
          )}
          {l}
        </button>
      ))}
    </div>
  )
}

export function Nav({ t, lang, setLang, isBook = false }: { t: Dict; lang: Lang; setLang: (l: Lang) => void; isBook?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const links = SECTIONS.map((id) => ({ id, label: t.nav[id] }))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open ? "bg-paper/88 shadow-[0_1px_0_var(--color-rule)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-[4.5rem] md:px-8">
        <a href="/" className="shrink-0 font-display text-[1.02rem] font-semibold tracking-[-0.03em]" onClick={() => setOpen(false)}>
          <span className="text-pen">English</span> with Daria
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`/#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`sweep py-1 text-[15px] font-medium transition-colors ${
                  active === l.id ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} setLang={setLang} label={t.nav.langLabel} />
          <a href="/book" className={`btn btn-pen !min-h-10 !px-5 text-sm ${isBook ? "hidden" : "hidden md:inline-flex"}`}>
            {t.cta}
          </a>
          <button
            type="button"
            className="-mr-2 grid h-11 w-11 place-items-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.75px] w-5 rounded bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.75px] w-5 rounded bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            key="menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 pt-2 pb-6 md:px-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                >
                  <a
                    href={`/#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-rule py-4 text-2xl font-semibold tracking-[-0.02em]"
                  >
                    {l.label}
                    {active === l.id && <span className="h-2 w-2 rounded-full bg-pen" />}
                  </a>
                </motion.li>
              ))}
              <li className="pt-6 md:hidden">
                <a href="/book" onClick={() => setOpen(false)} className="btn btn-pen w-full">
                  {t.cta}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
