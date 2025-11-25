import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Hero />
      <Products />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
