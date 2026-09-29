// English with Daria - v10
import { MotionConfig, motion } from "motion/react"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { DICT, type Dict, type Lang } from "@/content"
import { Booking } from "@/components/Booking"
import { Club } from "@/components/Club"
import { Hero } from "@/components/Hero"
import { Nav } from "@/components/Nav"
import { About, Contact, Courses, Footer, MobileCta, Quote, Reviews } from "@/components/Sections"
import { Stats } from "@/components/Stats"

const STORAGE_KEY = "ewd-lang"

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "ru" || saved === "en") return saved
  } catch {
    /* storage may be blocked */
  }
  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language]
  const first = (prefs[0] || "").toLowerCase()
  return /^(ru|uk|be|kk)/.test(first) ? "ru" : "en"
}

function useLang() {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = DICT[lang].meta.title
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  return [lang, setLang] as const
}

// Tiny client-side router: "/" is the landing page, "/book" the booking page.
type Route = { path: string; search: string; hash: string }
const readRoute = (): Route => ({
  path: location.pathname.replace(/\/+$/, "") || "/",
  search: location.search,
  hash: location.hash,
})

function useRoute() {
  const [route, setRoute] = useState<Route>(readRoute)

  useEffect(() => {
    history.scrollRestoration = "manual"
    const onPop = () => setRoute(readRoute())
    window.addEventListener("popstate", onPop)

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.("a")
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return
      const url = new URL(a.href, location.href)
      if (url.origin !== location.origin) return
      const samePage = url.pathname === location.pathname && url.search === location.search
      if (samePage) {
        if (!url.hash) {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        return // in-page anchors are handled by the browser
      }
      e.preventDefault()
      history.pushState(null, "", url.pathname + url.search + url.hash)
      setRoute(readRoute())
    }
    document.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("popstate", onPop)
      document.removeEventListener("click", onClick)
    }
  }, [])

  // After a page switch: jump to the requested section, or to the top.
  useLayoutEffect(() => {
    const target = route.hash ? document.getElementById(decodeURIComponent(route.hash.slice(1))) : null
    if (target) target.scrollIntoView({ behavior: "instant" as ScrollBehavior })
    else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [route.path, route.search, route.hash])

  return route
}

function Home({ t, lang }: { t: Dict; lang: Lang }) {
  return (
    <>
      <main className="overflow-x-clip">
        <Hero t={t} />
        <Stats t={t} lang={lang} />
        <Club t={t} />
        <About t={t} />
        <Courses t={t} />
        <Quote t={t} />
        <Reviews t={t} />
        <Contact t={t} />
      </main>
      <MobileCta t={t} />
    </>
  )
}

export default function App() {
  const [lang, setLang] = useLang()
  const route = useRoute()
  const t = DICT[lang]
  const isBook = route.path === "/book"
  const firstRender = useRef(true)
  useEffect(() => {
    firstRender.current = false
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient ambient-1" />
        <div className="ambient ambient-2" />
        <div className="ambient ambient-3" />
        <div className="ambient ambient-4" />
      </div>
      <Nav key={`nav:${route.path}`} t={t} lang={lang} setLang={setLang} isBook={isBook} />
      <motion.div
        key={`page:${route.path}`}
        initial={firstRender.current ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {isBook ? (
          <main className="overflow-x-clip">
            <Booking t={t} search={route.search} />
          </main>
        ) : (
          <Home t={t} lang={lang} />
        )}
        <Footer t={t} />
      </motion.div>
    </MotionConfig>
  )
}
