import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Calculator } from "@/components/Calculator";
import { Advantages } from "@/components/Advantages";
import { Geography } from "@/components/Geography";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { FAQ } from "@/components/FAQ";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Calculator />
      <Advantages />
      <Geography />
      <Process />
      <Portfolio />
      <FAQ />
      <Contacts />
      <Footer />
    </main>
  );
}
