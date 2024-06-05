import { useState } from "react";
import Navigation from "./components/Navigation";
import myLogo from "./assets/react.svg";
import heroImage from "../public/vite.svg";
import Hero from "./components/Hero";
import Bubble from "./components/Bubble";
import Card from "./components/Card";

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

  /**
   * Pour mettre à jour les bulles,
   * modifiez le tableau ci-dessous
   */
  const [bubbles, setBubbles] = useState([
    {
      title: "React",
      link: "https://reactjs.org/",
    },
    {
      title: "Vite",
      link: "https://vitejs.dev/",
    },
    {
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
  ]);

  const [cardDetail, setCardDetail] = useState({
    image: "https://placehold.it/150",
    title: "Title of the card",
    description:
      "Description of the card goes here with some interesting details about the card.",
    buttonText: "Click me",
    link: "/link-of-the-card",
  });

  return (
    <>
      <Navigation menu={menu} logo={logo} />
      <Hero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      <Bubble list={bubbles} />
      {/* <SearchBar /> */}
      <Card
        image={cardDetail.image}
        title={cardDetail.title}
        description={cardDetail.description}
        buttonText={cardDetail.buttonText}
        link={cardDetail.link}
      />
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
