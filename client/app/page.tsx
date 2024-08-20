import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <section>
          <h1 className={title({ color: "cyan" })}>Vape Taper</h1>
        </section>
        <section>
          <h2 className={subtitle({ class: "mt-4" })}>
            Just let me know when you buy a new vape and I&#39;ll show you if you&#39;re using it more or less over time 
          </h2>
          <p>
            <h1 className={title({ color: "cyan" })}>Track &nbsp;</h1>
            <h1 className={title()}>your use</h1>
          </p>
          <p>
            <h1 className={title({ color: "cyan" })}>Taper &nbsp;</h1>
            <h1 className={title()}>your habits</h1>
          </p>
        </section>
      </div>

      <div className="flex gap-3">
        {/* <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link> */}
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
