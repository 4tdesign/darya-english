import { motion, useScroll, useSpring } from "motion/react"
import { useRef } from "react"
import type { Dict } from "@/content"
import { LINKS } from "@/content"
import mama1 from "@/imports/mama1.jpg"
import { TelegramIcon, VkIcon } from "./Icons"
import { HandNote, MugDoodle, PenArrow, PenStrike, PenTick, PenUnderline } from "./Pen"

// The club section is laid out as a page of a school notebook: blue squares,
// a red margin line, and the teacher's red-pen marks.

function BlockTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight font-semibold tracking-[-0.028em]">{children}</h3>
}

function Week({ t }: { t: Dict }) {
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  return (
    <div className="mt-28 grid gap-10 md:mt-36 md:grid-cols-12 md:gap-8">
      <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
        <BlockTitle>{t.club.weekTitle}</BlockTitle>
        <p className="mt-4 max-w-sm text-lg leading-relaxed text-ink-2">{t.club.weekIntro}</p>
      </div>

      <div className="md:col-span-7 md:col-start-6">
        <ol ref={listRef} className="relative">
          <span aria-hidden="true" className="absolute top-3 bottom-3 left-[11px] w-[2px] rounded bg-ink/10" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress }}
            className="absolute top-3 bottom-3 left-[11px] w-[2px] origin-top rounded bg-pen"
          />
          {t.club.week.map((w) => (
            <li key={w.day} className="relative pb-12 pl-14 last:pb-0">
              <span aria-hidden="true" className="absolute top-1.5 left-0 grid h-6 w-6 place-items-center rounded-full border-2 border-pen bg-sheet">
                <span className="h-2 w-2 rounded-full bg-pen" />
              </span>
              <p className="text-[15px] font-semibold text-pen">{w.day}</p>
              <h4 className="mt-1 text-2xl font-semibold tracking-[-0.02em] md:text-[1.75rem]">{w.title}</h4>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-2">{w.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-xl text-lg leading-relaxed">{t.club.weekOutro}</p>
      </div>
    </div>
  )
}

export function Club({ t }: { t: Dict }) {
  const c = t.club
  return (
    <section id="club" className="notebook relative overflow-hidden border-y border-rule">
      {/* red margin line */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-[max(20px,calc(50%-36rem-12px))] w-[1.5px] bg-pen/45"
      />

      <div className="mx-auto max-w-6xl py-24 pr-5 pl-12 md:py-32 md:pr-8 md:pl-16 xl:px-8">
        {/* Header */}
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <a
              href={LINKS.clubHashtag}
              target="_blank"
              rel="noopener noreferrer"
              className="sweep text-[15px] font-medium text-ink-2 hover:text-pen"
            >
              {c.hashtag}
            </a>
            <div className="relative mt-5">
              <h2 className="display max-w-[11ch] text-[clamp(3rem,8.4vw,6.6rem)]">{c.title}</h2>
              <MugDoodle className="absolute -top-3 right-0 h-20 w-20 md:-top-6 md:right-4 md:h-28 md:w-28" delay={0.2} />
            </div>
            <HandNote delay={0.5} className="mt-3 -rotate-3 text-[1.7rem] md:text-[2rem]">
              {c.titleNote}
            </HandNote>
            <div className="mt-10 max-w-[36rem] space-y-5 text-lg leading-relaxed text-ink-2">
              {c.intro.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <figure className="relative mx-auto max-w-[380px] rotate-[1.5deg] md:mt-10">
              <img
                src={mama1}
                alt={c.photoAlt}
                width={843}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[20px] border-[7px] border-white object-cover object-[50%_78%] shadow-[0_30px_60px_-30px_rgb(28_26_23/0.5)]"
              />
              <figcaption className="absolute -bottom-16 left-[38%] flex items-end gap-1">
                <PenArrow delay={0.3} className="mb-4 h-10 w-12 shrink-0 rotate-180" />
                <HandNote delay={0.75} className="-rotate-3 text-[1.5rem] whitespace-nowrap md:text-[1.75rem]">
                  {c.photoNote}
                </HandNote>
              </figcaption>
            </figure>
          </div>
        </div>

        <Week t={t} />

        {/* Rules */}
        <div className="mt-28 grid gap-10 md:mt-36 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <BlockTitle>{c.rulesTitle}</BlockTitle>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {c.rules.map((r, i) => (
                <li key={r} className="flex gap-4">
                  <PenTick delay={i * 0.12} className="mt-0.5 h-7 w-7 shrink-0" />
                  <span className="text-lg leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-xl text-lg leading-relaxed text-ink-2">
              <span className="hand mr-2 align-[-0.1em] text-[1.8rem]">NB</span>
              {c.rulesNote}
            </p>
          </div>
        </div>

        {/* Who it's for / What you get */}
        <div className="mt-28 grid gap-16 md:mt-36 md:grid-cols-2 md:gap-12">
          {[
            { title: c.forWhomTitle, items: c.forWhom },
            { title: c.gainsTitle, items: c.gains },
          ].map((block) => (
            <div key={block.title}>
              <BlockTitle>{block.title}</BlockTitle>
              <dl className="mt-8">
                {block.items.map((it) => (
                  <div key={it.title} className="border-t border-ink/12 py-6">
                    <dt className="text-xl font-semibold tracking-[-0.015em]">{it.title}</dt>
                    <dd className="mt-2 text-lg leading-relaxed text-ink-2">{it.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* What you won't find */}
        <div className="mt-24 md:mt-32">
          <BlockTitle>{c.notHereTitle}</BlockTitle>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            {c.notHere.map((n, i) => (
              <div key={n.struck}>
                <p className="text-[clamp(2rem,4.6vw,3.25rem)] leading-tight font-semibold tracking-[-0.03em] text-ink/80">
                  <PenStrike delay={0.2 + i * 0.25}>{n.struck}</PenStrike>
                </p>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-2">{n.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="mt-24 md:mt-32">
          <BlockTitle>{c.topicsTitle}</BlockTitle>
          <ul className="mt-8 flex flex-wrap items-center gap-2.5">
            {c.topics.map((topic) => (
              <li key={topic} className="rounded-full border border-ink/15 bg-sheet px-4 py-2.5 text-[15px] font-medium md:text-base">
                {topic}
              </li>
            ))}
            <li className="px-2">
              <HandNote delay={0.2} className="text-[1.6rem]">
                {c.topicsMore}
              </HandNote>
            </li>
          </ul>
        </div>

        {/* Motto */}
        <p className="mt-24 max-w-4xl text-[clamp(1.5rem,3.1vw,2.35rem)] leading-[1.3] font-semibold tracking-[-0.022em] md:mt-32">
          {c.motto[0]}
          <PenUnderline delay={0.2}>{c.motto[1]}</PenUnderline>
          {c.motto[2]}
        </p>

        {/* Price */}
        <div className="mt-24 md:mt-32">
          <BlockTitle>{c.priceTitle}</BlockTitle>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {c.plans.map((p) => {
              const best = Boolean(p.old)
              return (
                <div
                  key={p.name}
                  className={`relative flex flex-col rounded-[22px] p-7 md:p-8 ${
                    best ? "bg-ink text-paper" : "border border-ink/12 bg-paper"
                  }`}
                >
                  {best && (
                    <HandNote delay={0.6} className="absolute -top-7 right-6 rotate-[5deg] text-[1.9rem]">
                      {c.bestNote}
                    </HandNote>
                  )}
                  <p className="text-lg font-semibold">{p.name}</p>
                  <div className="mt-8 min-h-[1.75rem] text-lg text-paper/55">
                    {p.old && <PenStrike delay={0.3}>{p.old}</PenStrike>}
                  </div>
                  <p className="display text-[clamp(2.6rem,4.4vw,3.4rem)] leading-none">{p.price}</p>
                  <p className={`mt-2 min-h-[1.5rem] text-[15px] ${best ? "text-paper/55" : "text-ink-3"}`}>{p.per}</p>
                  <p className={`mt-8 border-t pt-5 text-[15px] ${best ? "border-paper/15 text-paper/75" : "border-ink/10 text-ink-2"}`}>
                    {p.note}
                  </p>
                </div>
              )
            })}
          </div>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2">{c.priceNote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-pen">
              <TelegramIcon />
              {c.join}
            </a>
            <a href={LINKS.vk} target="_blank" rel="noopener noreferrer" className="btn btn-line bg-sheet">
              <VkIcon />
              {c.joinVk}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
