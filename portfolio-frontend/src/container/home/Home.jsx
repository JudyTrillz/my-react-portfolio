import {
  Header,
  MainHome,
  Portfolio,
  Skill,
  About,
  Contact,
  Footer,
} from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <MainHome />
        <Portfolio />
        <Skill />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
