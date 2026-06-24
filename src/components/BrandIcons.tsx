import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.072-.215.144-.43.144-.66 0-.49-1.49-1.118-1.59-1.118zm-3.567 6.79a8.498 8.498 0 0 1-4.41-1.218l-3.168.972.985-3.128a8.494 8.494 0 0 1-1.32-4.555c0-4.713 3.86-8.573 8.572-8.573s8.573 3.86 8.573 8.573c0 4.713-3.86 8.573-8.573 8.573zm0-18.85C9.74 5.145 4.99 9.92 4.99 15.76c0 1.84.485 3.65 1.41 5.245L4.5 27.43l6.595-2.05a10.622 10.622 0 0 0 5.043 1.275c5.84 0 10.618-4.778 10.618-10.618 0-5.84-4.778-10.617-10.618-10.617z" />
    </svg>
  );
}

export function GmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path fill="#4285F4" d="M2 9.5v15A1.5 1.5 0 0 0 3.5 26H7V14.2L2 9.5z" />
      <path fill="#34A853" d="M25 26h3.5a1.5 1.5 0 0 0 1.5-1.5v-15L25 14.2V26z" />
      <path fill="#FBBC04" d="M25 7.5V14.2l5-4.7v-1A2 2 0 0 0 27 7l-2 .5z" />
      <path fill="#EA4335" d="M7 14.2V7.5L5 7a2 2 0 0 0-3 1.5v1l5 4.7z" />
      <path fill="#C5221F" d="M7 14.2 16 21l9-6.8V7.5L16 14 7 7.5v6.7z" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64L8.79 4.77A2 2 0 0 0 6.8 3H3.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-3.77c.01-1.03-.76-1.91-1.79-2z" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#ig-grad)" />
      <circle cx="16" cy="16" r="6" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="23.5" cy="8.5" r="1.6" fill="#fff" />
    </svg>
  );
}