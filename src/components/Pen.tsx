// "Red pen" marks - the site's signature. Each mark is drawn once, the way a
// teacher marks a notebook: underline, circle, strike-through, tick, margin note.
import { animate, motion, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState, type ReactNode } from "react"

export const EASE_OUT = [0.16, 1, 0.3, 1] as const
const PEN_EASE = [0.55, 0.05, 0.25, 1] as const

function useDrawn<T extends Element>(amount = 0.7) {
  const ref = useRef<T>(null)
  const inView = useInView(ref, { once: true, amount })
  const reduce = !!useReducedMotion()
  return { ref, show: inView || reduce, reduce }
}

type StrokeProps = {
  d: string
  show: boolean
  reduce: boolean
  delay?: number
  duration?: number
  width?: number
}

function Stroke({ d, show, reduce, delay = 0, duration = 0.6, width = 3 }: StrokeProps) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      animate={show ? { pathLength: 1, opacity: 1 } : undefined}
      transition={{
        pathLength: { duration, delay, ease: PEN_EASE },
        opacity: { duration: 0.01, delay },
      }}
    />
  )
}

type MarkProps = { children: ReactNode; delay?: number; className?: string }

/** Hand-drawn underline under a word or short phrase. */
export function PenUnderline({ children, delay = 0, className = "" }: MarkProps) {
  const { ref, show, reduce } = useDrawn<HTMLSpanElement>(0.9)
  return (
    <span ref={ref} className={`relative inline-block whitespace-nowrap ${className}`}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-[86%] left-[-3%] h-[0.28em] w-[106%] overflow-visible text-pen"
      >
        <Stroke
          d="M2 8.5 C 40 3.5, 90 2.5, 140 5 S 190 9.5, 198 4"
          show={show}
          reduce={reduce}
          delay={delay}
          duration={0.75}
          width={3.2}
        />
      </svg>
    </span>
  )
}

/** Loose hand-drawn loop around a number or word. */
export function PenCircle({ children, delay = 0, className = "" }: MarkProps) {
  const { ref, show, reduce } = useDrawn<HTMLSpanElement>(0.9)
  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-x-[16%] -inset-y-[22%] h-[144%] w-[132%] overflow-visible text-pen"
      >
        <Stroke
          d="M150 10 C 110 0, 42 4, 16 30 C -6 56, 30 94, 100 95 C 170 96, 199 70, 192 40 C 186 16, 152 5, 116 9"
          show={show}
          reduce={reduce}
          delay={delay}
          duration={0.9}
          width={2.6}
        />
      </svg>
    </span>
  )
}

/** Red strike-through, like a corrected mistake. */
export function PenStrike({ children, delay = 0, className = "" }: MarkProps) {
  const { ref, show, reduce } = useDrawn<HTMLSpanElement>(1)
  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-1/2 left-[-4%] h-[0.5em] w-[108%] -translate-y-[40%] overflow-visible text-pen"
      >
        <Stroke
          d="M2 14 C 50 10, 110 9, 198 5"
          show={show}
          reduce={reduce}
          delay={delay}
          duration={0.45}
          width={3}
        />
      </svg>
    </span>
  )
}

/** A teacher's tick. */
export function PenTick({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  const { ref, show, reduce } = useDrawn<SVGSVGElement>(1)
  return (
    <svg ref={ref} aria-hidden="true" viewBox="0 0 24 24" className={`text-pen ${className}`}>
      <Stroke
        d="M3 12.5 C 5 14, 7.5 16.5, 9 19.5 C 12 12.5, 16 7, 21.5 3"
        show={show}
        reduce={reduce}
        delay={delay}
        duration={0.45}
        width={2.4}
      />
    </svg>
  )
}

/** Curved arrow for margin notes. Points down-right by default. */
export function PenArrow({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  const { ref, show, reduce } = useDrawn<SVGSVGElement>(0.8)
  return (
    <svg ref={ref} aria-hidden="true" viewBox="0 0 80 64" className={`overflow-visible text-pen ${className}`}>
      <Stroke d="M4 6 C 30 2, 58 16, 64 52" show={show} reduce={reduce} delay={delay} duration={0.5} width={2.2} />
      <Stroke
        d="M54 42 L 64.5 53 L 72 39"
        show={show}
        reduce={reduce}
        delay={delay + 0.45}
        duration={0.25}
        width={2.2}
      />
    </svg>
  )
}

/** Handwritten note that appears as if written left to right. */
export function HandNote({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  // The observed element must not carry the clip-path itself: Chrome treats a
  // fully clipped target as invisible and would never report it in view.
  const { ref, show, reduce } = useDrawn<HTMLSpanElement>(0.6)
  return (
    <span ref={ref} className={`hand inline-block whitespace-pre-line ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ clipPath: reduce ? "inset(-30% -5% -30% -5%)" : "inset(-30% 100% -30% -5%)" }}
        animate={show ? { clipPath: "inset(-30% -5% -30% -5%)" } : undefined}
        transition={{ duration: 0.9, delay, ease: [0.45, 0, 0.25, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/** Doodle of a mug with "EN" on it, for the club. */
export function MugDoodle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const { ref, show, reduce } = useDrawn<SVGSVGElement>(0.6)
  const s = { show, reduce, width: 2.6 }
  return (
    <svg ref={ref} aria-hidden="true" viewBox="0 0 120 112" className={`overflow-visible text-pen ${className}`}>
      <Stroke {...s} d="M18 41 C 40 36, 72 36, 94 41" delay={delay} duration={0.35} />
      <Stroke
        {...s}
        d="M21 42 L 26 96 C 27 102, 32 106, 38 106 L 74 106 C 80 106, 85 102, 86 96 L 91 42"
        delay={delay + 0.3}
        duration={0.7}
      />
      <Stroke {...s} d="M90 53 C 105 50, 112 63, 105 75 C 101 83, 93 85, 87 82" delay={delay + 0.9} duration={0.4} />
      <Stroke {...s} d="M42 62 L 42 84 M 42 62 L 54 62 M 42 73 L 51 73 M 42 84 L 54 84" delay={delay + 1.2} duration={0.5} />
      <Stroke {...s} d="M60 84 L 60 62 L 72 84 L 72 62" delay={delay + 1.5} duration={0.4} />
      <Stroke {...s} d="M42 30 C 36 22, 48 16, 42 6" delay={delay + 1.8} duration={0.4} width={2} />
      <Stroke {...s} d="M58 30 C 52 22, 64 16, 58 6" delay={delay + 1.95} duration={0.4} width={2} />
      <Stroke {...s} d="M74 30 C 68 22, 80 16, 74 6" delay={delay + 2.1} duration={0.4} width={2} />
    </svg>
  )
}

/** Number that counts up once when it scrolls into view. */
export function Counter({ to, suffix = "", locale }: { to: number; suffix?: string; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const reduce = !!useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (reduce) {
      setValue(to)
      return
    }
    if (!inView) return
    const controls = animate(0, to, {
      duration: to > 100 ? 1.8 : 1.3,
      ease: EASE_OUT,
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, reduce])

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString(locale)}
      {suffix}
    </span>
  )
}
