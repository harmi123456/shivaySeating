import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Chairs from './components/Chairs';
import Sofas from './components/Sofas';
import ArtOfSitting from './components/ArtOfSitting';
import Contact from './components/Contact';
import Shop from './components/Shop';
import AirSeries from './components/AirSeries';
import BarStool from './components/BarStool';
import ExecutiveSeries from './components/ExecutiveSeries';
import PremiumSeries from './components/PremiumSeries';
import VisitorSeries from './components/VisitorSeries';
import ChairDetails from './components/ChairDetails';

export default function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/aboutUs' element={<About />}></Route>
          <Route path='/chairs' element={<Chairs />}></Route>
          <Route path='/sofas' element={<Sofas />}></Route>
          <Route path='/artOfSitting' element={<ArtOfSitting />}></Route>
          <Route path='/contactUs' element={<Contact />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/AirSeries' element={<AirSeries />}></Route>
          <Route path='/BarStool' element={<BarStool />}></Route>
          <Route path='/ExecutiveSeries' element={<ExecutiveSeries />}></Route>
          <Route path='/PremiumSeries' element={<PremiumSeries />}></Route>
          <Route path='/VisitorSeries' element={<VisitorSeries />}></Route>
          <Route path="/chair/:id" element={<ChairDetails />} />
        </Routes>

      </Router>
    </div>
  )
}
