import React from 'react';
import Styles from "./App.module.css"
import Header from "../Header/Header"
import CognitiveTechnologies from '../CognitiveTechnologies/CognitiveTechnologies';
import About from '../About/About';
import ResearchLab from '../ResearchLab/ResearchLab';
import Progects from '../Progects/Progects';
import Education from '../Education/Education';
import Publications from '../Publications/Publications';
import Team from '../Team/Team';
import Partners from '../Partners/Partners';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="Styles.App">
      
      <Header />
      <CognitiveTechnologies />
      <ResearchLab />
      <Education />
      <Publications />
      <Team />
      <Partners />
      <Contacts />
      <Footer />

    </div>
  );
}

export default App;
