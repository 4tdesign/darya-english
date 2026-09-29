// English with Daria - v9
import { MotionConfig } from "motion/react"
import { useCallback, useEffect, useState } from "react"
import { DICT, type Lang } from "@/content"
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

export default function App() {
  const [lang, setLang] = useLang()
  const t = DICT[lang]

  return (
    <MotionConfig reducedMotion="user">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient ambient-1" />
        <div className="ambient ambient-2" />
        <div className="ambient ambient-3" />
        <div className="ambient ambient-4" />
      </div>
      <Nav t={t} lang={lang} setLang={setLang} />
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
      <Footer t={t} />
      <MobileCta t={t} />
    </MotionConfig>
  )
}
