import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import "react-alice-carousel/lib/alice-carousel.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cryptocurrency Prices | YuuzenXCrypto</title>
        <meta
          name="description"
          content="Lacak mata uang kripto favorit Anda secara real-time."
        />
      </Head>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Hero />
    </>
  );
}
