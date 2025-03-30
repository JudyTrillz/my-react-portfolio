import { useState, useEffect } from "react";

import {
  Header,
  MainHome,
  Portfolio,
  Skill,
  About,
  Contact,
  Footer,
} from "../../components";
import { getPortfolio } from "../../util/FetchPort";
import "./Home.scss";
import client from "../../Client";

const Home = () => {
  const [projects, setProjects] = useState([]);

  const query = getPortfolio();

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, [query]);

  return (
    <div>
      <Header />
      <main>
        <MainHome />
        <Portfolio projects={projects && projects} />
        <Skill />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
