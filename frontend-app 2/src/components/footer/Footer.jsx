import { emailIcon, githubIcon } from '../../../public/assests/svgs'

const socialIcon =
  'flex h-full w-[15%] justify-center border border-y-0 border-line text-label text-muted [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_path]:transition-colors [&_span]:mr-[1rem] [&_span]:text-muted [&_span]:transition-colors [&_svg]:h-[3rem] [&_svg]:w-auto [&_svg]:fill-muted [&_svg]:stroke-muted hover:[&_path]:fill-foreground hover:[&_path]:stroke-foreground hover:[&_span]:text-foreground lg:w-fit lg:px-[2rem]'

export default function Footer() {
  return (
    <footer className="flex h-[6.25rem] max-h-[6.25rem] w-full rounded-b-[1rem] border border-x-0 border-b-0 border-line lg:justify-between">
      <div className="flex w-full items-center justify-between lg:max-w-[calc(12.38vw+3.81vw-2rem-1px)]">
        <div className="min-w-[calc(70%-2rem)] whitespace-nowrap rounded-bl-[1rem] py-[1.5rem] pl-[2rem] text-label text-muted lg:flex lg:w-fit lg:min-w-0 lg:items-center lg:px-[2rem] lg:py-0">
          find me on:
        </div>
        <div className={socialIcon}>
          <a
            href="mailto:applications.secluding300@slmails.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Paul khoza"
          >
            {emailIcon}
          </a>
        </div>
        <div className={`${socialIcon} border-none lg:hidden`}>
          <a
            href="https://github.com/psk-98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Paul Khoza's github"
          >
            {githubIcon}
          </a>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className={`${socialIcon} rounded-br-[1rem] border-r-0`}>
          <a
            href="https://github.com/psk-98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Paul Khoza's github"
          >
            <span>@psk-98</span> {githubIcon}
          </a>
        </div>
      </div>
    </footer>
  )
}
