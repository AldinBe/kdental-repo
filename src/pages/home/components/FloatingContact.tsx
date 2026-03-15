import { useState } from 'react';

const quickActions = [
  {
    href: 'https://wa.me/38761728103?text=Pozdrav%2C%20zelim%20vise%20informacija%20o%20pregledu.',
    icon: 'ri-whatsapp-line',
    title: 'WhatsApp',
    buttonClassName:
      'border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800',
    iconClassName: 'bg-emerald-100 text-emerald-600',
  },
  {
    href: 'viber://chat?number=%2B38761728103',
    icon: 'ri-chat-3-line',
    title: 'Viber',
    buttonClassName:
      'border-violet-200 bg-white text-violet-700 hover:bg-violet-50 hover:text-violet-800',
    iconClassName: 'bg-violet-100 text-violet-600',
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <div className="flex flex-col items-end gap-3">
        <div
          className={`flex flex-col items-end gap-3 transition-all duration-200 ${
            isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          {quickActions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              aria-label={action.title}
              className={`group inline-flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-semibold shadow-[0_18px_40px_rgba(15,23,42,0.14)] transition-all duration-200 hover:-translate-y-0.5 ${action.buttonClassName}`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full text-lg transition-transform duration-200 group-hover:scale-105 ${action.iconClassName}`}
              >
                <i className={action.icon}></i>
              </span>
              <span className="pr-1">{action.title}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Kontakt opcije"
          onClick={() => setIsOpen((open) => !open)}
          className="group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-5 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(20,184,166,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(20,184,166,0.42)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg">
            <i className={isOpen ? 'ri-close-line' : 'ri-customer-service-2-line'}></i>
          </span>
          <span>Kontakt</span>
        </button>
      </div>
    </div>
  );
}
