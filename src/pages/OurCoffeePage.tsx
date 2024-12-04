import { AboutOurBeans } from "../components/AboutOurBeans/AboutOurBeans";
import { CoffeeCards } from "../components/CoffeeCards/CoffeeCards";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { OurCoffeeTitle } from "../components/OurCoffeeTitle/OurCoffeeTitle";
import ScrollToTop from "../utils/ScrollToTop";

export const OurCoffeePage = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <OurCoffeeTitle />
      <AboutOurBeans />
      <CoffeeCards />
      <Footer />
    </>
  );
};
