import { motion, useReducedMotion } from "motion/react"
import type { Dict } from "@/content"
import daryaPhoto from "@/imports/____.jpg"
import { EASE_OUT, HandNote, PenArrow, PenCircle, PenUnderline } from "./Pen"

// The one orchestrated moment on the page: headline lines rise, the photo
// uncovers, then the red pen underlines and annotates.
export function Hero({ t }: { t: Dict }) {
  const reduce = !!useReducedMotion()
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: "108%" },
          animate: { y: "0%" },
          transition: { duration: 1, delay, ease: EASE_OUT },
        }
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE_OUT },
        }

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-7">
          <motion.p {...fade(0.05)} className="mb-7 flex items-center gap-2.5 text-[15px] font-medium text-ink-2">
            <span className="h-2 w-2 rounded-full bg-pen" />
            {t.hero.kicker}
          </motion.p>

          <h1 className="display text-[clamp(2.7rem,7.4vw,5.9rem)]">
            {t.hero.lines.map((line, i) => (
              <span key={line} className="-mb-[0.26em] block overflow-hidden pb-[0.26em]">
                <motion.span className="block" {...rise(0.12 + i * 0.09)}>
                  {i === 1 ? <PenUnderline delay={reduce ? 0 : 1.05}>{line}</PenUnderline> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...fade(0.45)} className="mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-2 md:text-xl">
            {t.hero.sub}
          </motion.p>

          <motion.div {...fade(0.55)} className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-pen">
              {t.cta}
            </a>
            <a href="#courses" className="btn btn-line">
              {t.hero.secondary}
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <div className="relative mx-auto w-[78%] max-w-[400px] md:w-full">
            <motion.div
              aria-hidden="true"
              className="notebook absolute -inset-3 rounded-[30px] border border-rule md:-inset-5"
              initial={reduce ? undefined : { opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -3.5 }}
              transition={{ duration: 1.1, delay: 0.35, ease: EASE_OUT }}
            />
            <motion.img
              src={daryaPhoto}
              alt={t.hero.photoAlt}
              width={640}
              height={640}
              fetchPriority="high"
              className="relative aspect-[4/5] w-full rounded-[24px] object-cover object-[50%_20%] shadow-[0_30px_60px_-30px_rgb(28_26_23/0.45)]"
              initial={reduce ? undefined : { clipPath: "inset(100% 0% 0% 0% round 24px)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0% round 24px)" }}
              transition={{ duration: 1.2, delay: 0.25, ease: EASE_OUT }}
            />

            <div className="absolute -top-14 -left-4 flex items-start md:-top-16 md:-left-24">
              <HandNote delay={reduce ? 0 : 1.5} className="-rotate-6 text-[1.45rem] md:text-[1.7rem]">
                {t.hero.note}
              </HandNote>
              <PenArrow delay={reduce ? 0 : 2.2} className="mt-7 -ml-1 h-12 w-14 md:h-14 md:w-16" />
            </div>

            <div className="absolute -right-3 -bottom-7 flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 shadow-[0_18px_40px_-20px_rgb(28_26_23/0.35)] md:-right-10">
              <PenCircle delay={reduce ? 0 : 1.9} className="px-1.5">
                <span className="hand text-[2.3rem] leading-none">{t.hero.score}</span>
              </PenCircle>
              <span className="text-sm leading-tight font-medium text-ink-2">{t.hero.scoreLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
