import CustomerReviews from "./Section/CustomerReviews";
import Footer from "./Section/Footer";
import Hero from "./Section/Hero";
import Nav from "./components/Nav";
import PopularProducts from "./Section/PopularProducts";
import Services from "./Section/Services";
import SpecialOffers from "./Section/SpecialOffers";
import Subscribe from "./Section/Subscribe";
import SuperQuality from "./Section/SuperQuality";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l 
    wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue 
    padding">
      <CustomerReviews />
    </section>
    <section className="padding-x 
    sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x 
    bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
