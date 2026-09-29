import type { Dict, Lang } from "@/content"
import { LINKS } from "@/content"
import { TelegramIcon } from "./Icons"
import { Counter, PenUnderline } from "./Pen"

export function Stats({ t, lang }: { t: Dict; lang: Lang }) {
  const locale = lang === "ru" ? "ru-RU" : "en-US"
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-12 md:gap-8 md:px-8 md:py-28">
        <div className="md:col-span-6">
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.9rem)]">
            {t.stats.title[0]}
            <br />
            <PenUnderline>{t.stats.title[1]}</PenUnderline>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-paper/65">{t.stats.text}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={LINKS.channel} target="_blank" rel="noopener noreferrer" className="btn bg-tg text-white hover:bg-[#1b8cc2]">
              <TelegramIcon className="h-5 w-5" />
              @englishwithDariaC
            </a>
            <a href="/book" className="btn btn-line-light">
              {t.stats.book}
            </a>
          </div>
        </div>

        <dl className="md:col-span-5 md:col-start-8 md:self-center">
          {t.stats.items.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-6 border-t border-paper/15 py-5 first:border-t-0 md:py-6">
              <dt className="order-2 max-w-[9rem] text-right text-[15px] leading-snug text-paper/55">{s.label}</dt>
              <dd className="display order-1 text-[clamp(2.4rem,4.8vw,3.9rem)] leading-none">
                <Counter to={s.n} suffix={s.suffix} locale={locale} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
