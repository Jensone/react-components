import { useState } from "react";
import Navigation from "./components/Navigation";
import myLogo from "./assets/react.svg";
import heroImage from "../public/vite.svg";
import Hero from "../Hero";

function App() {
  /**
   * Pour mettre à jour le menu,
   * modifiez le tableau ci-dessous
   */
  const [menu, setMenu] = useState([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Support",
      link: "/support",
      target: "_blank",
      button: true,
    },
  ]);

  /**
   * Pour mettre à jour le logo,
   * modifiez la valeur ci-dessous
   */
  const [logo, setLogo] = useState(myLogo);

  /**
   * Pour mettre à jour le titre, l'image
   * et le sous-titre du composant Hero,
   * modifiez les valeurs ci-dessous
   */
  const [hero, setHero] = useState({
    title: "Title of the hero component",
    subtitle: "Your value proposition goes here.",
    image: heroImage,
  });

  return (
    <>
      <Navigation menu={menu} logo={logo} />
      <Hero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      {/* <SearchBar /> */}
      {/* <Card /> */}
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
