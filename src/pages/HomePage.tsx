import { AboutUs } from "../components/AboutUs/AboutUs";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { MainTitle } from "../components/MainTitle/MainTitle";
import { OurBest } from "../components/OurBest/OurBest";

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainTitle />
      <AboutUs />
      <OurBest />
      <Footer />
    </>
  );
};
