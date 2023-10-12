'use client'
import { redirect } from "next/navigation";
import HeroSec from "./components/LandingPage/HeroSec";
import Nav from "./components/LandingPage/Nav";
import Services from "./components/LandingPage/Services";
import Industries from "./components/LandingPage/Industries";
import Testimonials from "./components/LandingPage/Testimonials";
import PowerfullTools from "./components/LandingPage/PowerfullTools";
import RelatedServices from "./components/LandingPage/RelatedServices";
import KeyBenefits from "./components/LandingPage/KeyBenefits";
import Footer from "./components/LandingPage/Footer";
import Modal from "./components/LandingPage/Modal";
import { useAuthContext } from "./hooks/useAuthContext";
import PriceCards from "./components/PriceCards";


export default function Home() {
  const { user } = useAuthContext()
  if (user) return redirect('/dashboard')

  return (
    <main className="bg-[url('/hero-img.png')] bg-fixed bg-no-repeat bg-center bg-cover" id="home">
      <Nav />
      <HeroSec />
      <Services />
      <Industries />
      <Testimonials />
      <PowerfullTools />
      <PriceCards />
      <RelatedServices />
      <KeyBenefits />
      <Footer />
      <Modal />
    </main>
  )
}
