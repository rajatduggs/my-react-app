import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FooterClass from './components/FooterClass';
import AboutMe from './components/AboutMe';
import MySkill from './components/MySkill';
import SkillDetail from './components/FrameWorks';
import Education from './components/Education';
import ConctactMe from './components/ContactMe';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <div className="main_title"><h2>MY SKILL</h2></div>
      <MySkill />
      <Education />
      <ConctactMe />
      <FooterClass />
    </div>
  );
}

export default App;
