'use client'
import dynamic from 'next/dynamic'
import { redirect } from "next/navigation";
import Nav from "./components/LandingPage/Nav";
import PriceCards from "./components/PriceCards";
import Modal from "./components/LandingPage/Modal";
import Footer from "./components/LandingPage/Footer";
import HeroSec from "./components/LandingPage/HeroSec";
import { useAuthContext } from "./hooks/useAuthContext";
import Services from "./components/LandingPage/Services";
import Industries from "./components/LandingPage/Industries";
import KeyBenefits from "./components/LandingPage/KeyBenefits";
import Testimonials from "./components/LandingPage/Testimonials";
import PowerfullTools from "./components/LandingPage/PowerfullTools";
import RelatedServices from "./components/LandingPage/RelatedServices";



export default function Home() {
  const { user, profiles } = useAuthContext()

  if (user && !profiles) return redirect('/setup-profile')
  if (user) return redirect('/settings')

  return (
    <main
      className="bg-[url('/hero-img.png')] bg-fixed bg-no-repeat bg-center bg-cover"
      id="home">
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
