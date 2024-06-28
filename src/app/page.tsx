import Hero from "@/sections/Hero";
import CustomerReviews from "@/sections/CustomerReviews";
import PopularProducts from "@/sections/PopularProducts";
import Services from "@/sections/Services";
import SpecialOffer from "@/sections/SpecialOffer";
import Subscribe from "@/sections/Subscribe";
import SuperQuality from "@/sections/SuperQuality";
import Nav from "@/components/Nav";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section
        className="xl:padding-1 wide:padding-r padding b"
      >
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x p-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <footer className="bg-black padding-x padding-t pb-8">
        <Footer />
      </footer>
    </main>
  );
}
