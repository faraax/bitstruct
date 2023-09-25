import { redirect } from "next/navigation";
import HeroSec from "./components/HeroSec";
import Nav from "./components/Nav";

const user = false

export default function Home() {
  if (user) {
    return redirect('/dashboard')
  }
  return (
    <main className="bg-[url('/hero-img.jpeg')] h-screen bg-fixed bg-no-repeat bg-center bg-cover">
      <Nav />
      <HeroSec />
    </main>
  )
}
