import Image from "next/image";
import { ConnectButton } from "@/app/thirdweb";
import { client } from "./client";
import duke from "@public/duke.svg";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: "#28A0F0" }}>
      {/* Content */}
      <header className="p-4 flex justify-between items-center relative z-10">
        <a href="/">
          <Image
            src={duke}
            alt=""
            className="w-20 h-20"
            style={{
              filter: "drop-shadow(0px 0px 24px #96BEDC)",
            }}
          />
        </a>
        <a href="https://app.uniswap.org/swap?outputCurrency=0x9623063377AD1B27544C965cCd7342f7EA7e88C7&chain=arbitrum" className="text-white-900 text-lg font-semibold">Buy Now</a>
      </header>

      <main className="flex-grow p-4 pb-10 relative z-10 flex">
        <div className="container max-w-screen-lg mx-auto">
          <div className="py-20">
            <Header />
            <div className="flex justify-center mb-20">
              <ConnectButton
                client={client}
                appMetadata={{
                  name: "Duke of Arbitrum",
                  url: "https://dukeofarbitrum.com",
                }}
              />
            </div>
            <ThirdwebResources />
          </div>
        </div>
      </main>

      {/* Background overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={duke}
          alt="Duke Background"
          layout="fixed"
          width={540}
          height={540} 
          style={{ opacity: 0.7 }} 
        />
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center relative z-10">
        <p>CA: 0x6eBFC4f2B92526d6Aa6F75153b66D1E119696b27</p>
        <a href="https://arbiscan.io/token/0x6eBFC4f2B92526d6Aa6F75153b66D1E119696b27" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
          View DUKE contract on Arbiscan <br />
          Contact the team: team@dukeofarbitrum.com
        </a>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-4 md:mb-20 relative z-10">
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-2 md:mb-6 text-zinc-100">
        <span className="inline-block -skew-x-6 text-white-900"> Duke of Arbitrum </span>
      </h1>

      <p className="text-zinc-400 text-3xl md:text-4xl mb-8">
        Connect your wallet to get started.
      </p>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="About"
        href="https://x.com/dukeofarbitrum"
        description="Learn more about the cultue coin, DUKE. is and what it is all about!"
      />

      <ArticleCard
        title="How To Buy"
        href="https://app.uniswap.org/swap?outputCurrency=0x9623063377AD1B27544C965cCd7342f7EA7e88C7&chain=arbitru"
        description="Head to Uniswap to get your pawwwwwws on some DUKE tokens or claim the airdrop if eligible."
      />

      <ArticleCard
        title="Arbitrum Ecosystem"
        href="https://portal.arbitrum.io/"
        description="Learn more about the largest Ethereum Layer 2 ecosystem, Arbitrum."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg transition-colors"
      style={{ backgroundColor: "#1F2937", borderColor: "#374151" }}
    >
      <article>
        <h2 className="text-lg font-semibold mb-2 text-white">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}

