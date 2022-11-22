import Info from "./components/basicinfo";
import Astro from "./components/Astrological";
import Physical from "./components/Physical";
import Edu from "./components/Edu";
import Nav from "./components/Nav";
import Des from "./components/Descrip";

function Index() {
  return (
    <div>
      <Nav />
      <Info />
      <Physical />
      <Edu />
      <Astro />
      <Des />
    </div>
  );
}
export default Index;
