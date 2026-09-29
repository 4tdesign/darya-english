// Booking page (/book): a short form. The Telegram button opens a chat with
// Daria with the message already typed in; VK can't prefill, so we copy it.
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useMemo, useState } from "react"
import type { Dict } from "@/content"
import { LINKS } from "@/content"
import { TelegramIcon, VkIcon } from "./Icons"
import { EASE_OUT, PenUnderline } from "./Pen"

type Who = "me" | "child" | null

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const ta = document.createElement("textarea")
    ta.value = text
    ta.setAttribute("readonly", "")
    ta.style.position = "fixed"
    ta.style.opacity = "0"
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand("copy")
    ta.remove()
    return ok
  }
}

function Legend({ children, optional }: { children: React.ReactNode; optional?: string }) {
  return (
    <legend className="mb-4 flex items-baseline gap-2 text-lg font-semibold tracking-[-0.01em]">
      {children}
      {optional && <span className="text-[14px] font-normal text-ink-3">{optional}</span>}
    </legend>
  )
}

function Chip({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`min-h-11 rounded-full border px-4 text-[15px] font-medium transition-colors duration-200 ${
        selected ? "border-ink bg-ink text-paper" : "border-ink/15 bg-sheet hover:border-ink/40"
      }`}
    >
      {children}
    </button>
  )
}

export function Booking({ t, search }: { t: Dict; search: string }) {
  const b = t.book
  const reduce = !!useReducedMotion()
  const params = useMemo(() => new URLSearchParams(search), [search])

  const services = [
    ...t.courses.items.map((c) => ({ id: c.id, title: c.title, meta: `${c.level} · ${c.duration}` })),
    { id: "unsure", title: b.unsure.title, meta: b.unsure.desc },
  ]

  const [service, setService] = useState<string | null>(null)
  const [plan, setPlan] = useState<string | null>(null)
  const [who, setWho] = useState<Who>(null)
  const [age, setAge] = useState<number | null>(null)
  const [level, setLevel] = useState<number | null>(null)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [toast, setToast] = useState<string | null>(null)

  // Preselect from the link that brought the visitor here (/book?service=club&plan=month)
  useEffect(() => {
    const s = params.get("service")
    if (s && services.some((x) => x.id === s)) setService(s)
    const p = params.get("plan")
    if (p && t.club.plans.some((x) => x.id === p)) setPlan(p)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 4500)
    return () => clearTimeout(id)
  }, [toast])

  const message = useMemo(() => {
    if (!service) return ""
    const m = b.msg
    const lines: string[] = [m.hello]
    if (name.trim()) lines.push(m.name(name.trim()))
    if (service === "unsure") {
      lines.push(m.unsure)
    } else {
      const course = t.courses.items.find((c) => c.id === service)
      const planName = service === "club" ? t.club.plans.find((p) => p.id === plan)?.name : undefined
      lines.push(m.want(planName ? `${course?.title} (${planName.toLowerCase()})` : course?.title ?? ""))
    }
    if (who === "me") lines.push(m.forMe)
    if (who === "child") lines.push(m.forChild)
    if (age !== null) lines.push(m.age(b.ages[age]))
    if (level !== null) lines.push(level === b.levels.length - 1 ? m.levelUnknown : m.level(b.levels[level]))
    const text = lines.join(" ")
    return comment.trim() ? `${text}\n\n${comment.trim()}` : text
  }, [service, plan, who, age, level, name, comment, b, t])

  const ready = Boolean(message)

  async function sendTelegram() {
    if (!ready) return
    copyText(message)
    window.open(`${LINKS.telegram}?text=${encodeURIComponent(message)}`, "_blank", "noopener")
    setToast(b.toastTg)
  }

  async function sendVk() {
    if (!ready) return
    await copyText(message)
    window.open(LINKS.vkMessage, "_blank", "noopener")
    setToast(b.toastVk)
  }

  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { y: "108%" }, animate: { y: "0%" }, transition: { duration: 0.9, delay, ease: EASE_OUT } }

  return (
    <div id="top" className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <a href="/" className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink-2 hover:text-ink">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1">
            <path d="M16 10H4M9 5l-5 5 5 5" />
          </svg>
          <span className="sweep">{b.back}</span>
        </a>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h1 className="display mt-8 text-[clamp(2.2rem,6vw,4.6rem)]">
              <span className="-mb-[0.26em] block overflow-hidden pb-[0.26em]">
                <motion.span className="block" {...rise(0.05)}>
                  {b.title[0]}
                </motion.span>
              </span>
              <span className="-mb-[0.26em] block overflow-hidden pb-[0.26em]">
                <motion.span className="block" {...rise(0.14)}>
                  <PenUnderline delay={reduce ? 0 : 0.8}>{b.title[1]}</PenUnderline>
                </motion.span>
              </span>
            </h1>
            <p className="mt-7 max-w-[30rem] text-lg leading-relaxed text-ink-2">{b.sub}</p>
          </div>

          <form className="space-y-11 lg:col-span-7 lg:mt-10" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <Legend>{b.serviceLegend}</Legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => {
                  const selected = service === s.id
                  return (
                    <label
                      key={s.id}
                      className={`relative flex cursor-pointer items-start gap-4 rounded-[18px] border p-5 transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-pen ${
                        selected ? "border-ink bg-ink text-paper" : "border-ink/12 bg-sheet hover:border-ink/35"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s.id}
                        checked={selected}
                        onChange={() => setService(s.id)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                          selected ? "border-pen bg-paper" : "border-ink/25"
                        }`}
                      >
                        {selected && <span className="h-2 w-2 rounded-full bg-pen" />}
                      </span>
                      <span>
                        <span className="block leading-snug font-semibold">{s.title}</span>
                        <span className={`mt-1 block text-[14px] ${selected ? "text-paper/60" : "text-ink-3"}`}>{s.meta}</span>
                      </span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <AnimatePresence initial={false}>
              {service === "club" && (
                <motion.fieldset
                  key="plan"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="overflow-hidden"
                >
                  <Legend>{b.planLegend}</Legend>
                  <div className="flex flex-wrap gap-2.5">
                    {t.club.plans.map((p) => (
                      <Chip key={p.id} selected={plan === p.id} onClick={() => setPlan(plan === p.id ? null : p.id)}>
                        {p.name} <span className="opacity-60">· {p.price}</span>
                      </Chip>
                    ))}
                  </div>
                </motion.fieldset>
              )}
            </AnimatePresence>

            <fieldset>
              <Legend optional={b.optional}>{b.whoLegend}</Legend>
              <div className="flex flex-wrap gap-2.5">
                {(["me", "child"] as const).map((w) => (
                  <Chip key={w} selected={who === w} onClick={() => setWho(who === w ? null : w)}>
                    {b.who[w]}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <Legend optional={b.optional}>{b.ageLegend}</Legend>
              <div className="flex flex-wrap gap-2.5">
                {b.ages.map((a, i) => (
                  <Chip key={a} selected={age === i} onClick={() => setAge(age === i ? null : i)}>
                    {a}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <Legend optional={b.optional}>{b.levelLegend}</Legend>
              <div className="flex flex-wrap gap-2.5">
                {b.levels.map((l, i) => (
                  <Chip key={l} selected={level === i} onClick={() => setLevel(level === i ? null : i)}>
                    {l}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="mb-3 flex items-baseline gap-2 text-lg font-semibold tracking-[-0.01em]">
                {b.nameLabel}
                <span className="text-[14px] font-normal text-ink-3">{b.optional}</span>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={b.namePh}
                autoComplete="given-name"
                maxLength={60}
                className="h-13 w-full rounded-[14px] border border-ink/15 bg-sheet px-4 text-[17px] transition-colors outline-none placeholder:text-ink-3/70 focus:border-ink"
              />
            </label>

            <label className="block">
              <span className="mb-3 flex items-baseline gap-2 text-lg font-semibold tracking-[-0.01em]">
                {b.commentLabel}
                <span className="text-[14px] font-normal text-ink-3">{b.optional}</span>
              </span>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={b.commentPh}
                rows={4}
                maxLength={800}
                className="w-full resize-y rounded-[14px] border border-ink/15 bg-sheet px-4 py-3.5 text-[17px] leading-relaxed transition-colors outline-none placeholder:text-ink-3/70 focus:border-ink"
              />
            </label>

            <div className="notebook rounded-[24px] border border-rule p-5 md:p-6">
              <div className="grid gap-2.5 sm:grid-cols-2">
                <button type="button" onClick={sendTelegram} disabled={!ready} className="btn w-full bg-tg text-white hover:bg-[#1b8cc2] disabled:cursor-not-allowed disabled:opacity-40">
                  <TelegramIcon />
                  {b.telegram}
                </button>
                <button type="button" onClick={sendVk} disabled={!ready} className="btn w-full bg-[#0077ff] text-white hover:bg-[#0066dd] disabled:cursor-not-allowed disabled:opacity-40">
                  <VkIcon />
                  {b.vk}
                </button>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-2">{ready ? b.hint : b.needService}</p>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 mx-auto max-w-md rounded-2xl bg-ink px-5 py-4 text-[15px] text-paper shadow-[0_18px_40px_-12px_rgb(28_26_23/0.6)]"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
