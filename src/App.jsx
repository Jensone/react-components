import { useState } from "react";
import Navigation from "./components/Navigation";
import myLogo from "./assets/react.svg";

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

  return (
    <>
      <Navigation menu={menu} logo={logo} />
      {/* <Hero /> */}
      {/* <SearchBar /> */}
      {/* <Card /> */}
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
