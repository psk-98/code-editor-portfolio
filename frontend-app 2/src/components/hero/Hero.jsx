import HeroCarousel from '../heroCarousel/HeroCarousel'
import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section className="flex h-[calc(100vh-4rem-6vh-6.25rem)] max-h-screen items-center lg:h-[var(--max-height-desktop-between-footer-nav)] lg:max-h-[var(--max-height-desktop-between-footer-nav)]">
      <HeroBackground />
      <div className="z-10 flex h-full flex-col justify-center lg:w-1/2 lg:pl-[16.19vw]">
        <p className="pl-[2rem] text-body">Hi. I am</p>
        <h1 className="ml-[1rem] text-headline font-light leading-none">
          Paul Khoza
        </h1>
        <p className="ml-[2rem] text-[2.5rem] text-accent-green">
          {'> Developer'}
        </p>
        <p className="mt-[10rem] mb-[1rem] ml-[2rem] text-code text-muted">{`// find my profile on Github:`}</p>
        <p className="mb-[1rem] ml-[2rem] break-all text-code [&>*]:font-medium">
          <span className="text-accent-purple">const</span>
          <span className="text-accent-green">{' githubLink '}</span>={' '}
          <a
            className="text-accent-orange"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/psk-98"
          >
            &quot;https://github.com/psk-98&quot;
          </a>
        </p>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <HeroCarousel />
      </div>
    </section>
  )
}
