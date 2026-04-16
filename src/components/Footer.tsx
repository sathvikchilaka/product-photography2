import { Logo } from './Logo'
import { ArrowUpRight, socialIconMap } from './icons'
import { footer } from '../data/content'

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[0.8rem] text-subtle tracking-[-0.005em]">{title}</h4>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  )
}

function LinkRow({ label, href, icon: Icon }: { label: string; href: string; icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-2 text-[0.95rem] text-foreground transition-opacity hover:opacity-70"
      >
        {Icon ? <Icon className="h-[1.05rem] w-[1.05rem]" /> : null}
        <span>{label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 md:mt-28 border-t border-border-soft">
      <div className="container-site pt-14 md:pt-20 pb-8 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 md:gap-16">
          <div className="flex flex-col gap-6">
            <Logo size={30} />
            <p className="text-subtle text-[0.9rem] max-w-[360px] leading-[1.6]">{footer.tagline}</p>
            <div className="flex flex-col gap-3 text-[0.9rem]">
              <div>
                <div className="text-subtle text-[0.78rem] mb-1">Address</div>
                {footer.address.map((line) => (
                  <div key={line} className="text-foreground">
                    {line}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-subtle text-[0.78rem] mb-1">Contact</div>
                <a
                  href={`mailto:${footer.contactEmail}`}
                  className="text-foreground transition-opacity hover:opacity-70"
                >
                  {footer.contactEmail}
                </a>
              </div>
            </div>
          </div>

          <Column title="Utility Pages">
            {footer.utility.map((item) => (
              <LinkRow key={item.label} label={item.label} href={item.href} />
            ))}
          </Column>

          <Column title="Follow Us">
            {footer.social.map((item) => (
              <LinkRow
                key={item.label}
                label={item.label}
                href={item.href}
                icon={socialIconMap[item.icon]}
              />
            ))}
          </Column>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border-soft mt-14 md:mt-20">
        <div className="container-site py-5 flex flex-col-reverse md:flex-row items-start md:items-center gap-4 md:gap-6 justify-between">
          <p className="text-[0.8rem] text-subtle">
            {footer.copyright} <span className="mx-1">|</span> {footer.credit}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[0.8rem] text-subtle underline-offset-4 hover:underline hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
