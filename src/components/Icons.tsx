type P = { className?: string }

export const TelegramIcon = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9.78 15.53 9.6 19.3c.36 0 .52-.16.71-.35l1.7-1.63 3.53 2.58c.65.36 1.11.17 1.29-.6l2.33-10.94c.21-.97-.35-1.35-.98-1.12L4.5 12.53c-.94.37-.93.9-.16 1.13l3.52 1.1 8.17-5.15c.38-.25.74-.11.45.14" />
  </svg>
)

export const ChannelIcon = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1Z" />
    <path d="M17 9a4 4 0 0 1 0 6" />
    <path d="M19.5 6.5a7.5 7.5 0 0 1 0 11" />
  </svg>
)

export const VkIcon = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.86 17.5c-5.47 0-8.6-3.75-8.73-10h2.74c.09 4.59 2.11 6.53 3.71 6.93V7.5h2.58v3.96c1.58-.17 3.24-1.97 3.8-3.96h2.58a7.62 7.62 0 0 1-3.51 4.97 7.9 7.9 0 0 1 4.11 5.03h-2.84c-.61-1.9-2.13-3.37-4.14-3.57v3.57h-.3Z" />
  </svg>
)

export const InstagramIcon = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const ArrowRight = ({ className = "h-4 w-4" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
)

export const ArrowUpRight = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 14 14 6M7 6h7v7" />
  </svg>
)

export const Chevron = ({ className = "h-4 w-4" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m5 7.5 5 5 5-5" />
  </svg>
)

export const PinIcon = ({ className = "h-5 w-5" }: P) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
)

export const CONTACT_ICONS = {
  telegram: TelegramIcon,
  channel: ChannelIcon,
  vk: VkIcon,
  instagram: InstagramIcon,
} as const
