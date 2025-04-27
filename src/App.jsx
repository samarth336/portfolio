import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologys from './components/Technologys';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Tools from './components/Tools';
import Experiance from './components/Experiance';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Background and Gradient */}
      <div className='fixed top-0 -z-10 h-full w-full'>

              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      </div>
      
      {/* Container with doubled left padding */}
      <div className='container mx-auto px-8 pl-19'> {/* Changed pl-12 to pl-24 for doubled left padding */}
        <Navbar />
        <Hero />
        <About/>
        <Technologys/>
        <Tools/>
        <Experiance/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
