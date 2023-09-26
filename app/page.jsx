import { redirect } from "next/navigation";
import HeroSec from "./components/HeroSec";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";

const user = false

export default function Home() {
  if (user) {
    return redirect('/dashboard')
  }
  return (
    <main className="bg-[url('/hero-img.jpeg')] bg-fixed bg-no-repeat bg-center bg-cover">
      <Nav />
      <HeroSec />
      <Services />
      <Industries />
      <Testimonials />
    </main>
  )
}
