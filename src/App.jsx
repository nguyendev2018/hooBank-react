import React from "react";
import styles from "./style";
import {
  Navbar,
  Business,
  Clients,
  Services,
  Stats,
  Footer,
  AboutUs,
  Hero,
  Billing,
  CardDeal,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary over-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <AboutUs />{" "}
          <Clients /> <Services />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
