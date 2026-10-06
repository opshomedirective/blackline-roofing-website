import { BUSINESS } from "../data/site";

const paths = {
  facebook: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  instagram: "M12 2.2c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 4.85a4.95 4.95 0 1 0 0 9.9 4.95 4.95 0 0 0 0-9.9Zm0 8.16a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm5.15-9.5a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32Z",
  google: "M21.35 11.1H12v2.98h5.35c-.23 1.4-1.66 4.1-5.35 4.1a5.98 5.98 0 0 1 0-11.96c1.84 0 3.07.78 3.78 1.46l2.58-2.49C16.7 3.64 14.56 2.7 12 2.7a9.3 9.3 0 0 0 0 18.6c5.37 0 8.93-3.77 8.93-9.09 0-.61-.07-1.08-.15-1.54Z",
} as const;

export default function Social({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {(Object.keys(paths) as (keyof typeof paths)[]).map((k) => (
        <a
          key={k}
          href={BUSINESS.social[k]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={k}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-sky hover:bg-sky hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={paths[k]} /></svg>
        </a>
      ))}
    </div>
  );
}
