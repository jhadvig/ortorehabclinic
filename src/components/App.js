import React from 'react';
import { NavLink, HashRouter, Route } from 'react-router-dom';

import { Home, Orthopedic, Patient, Fyzio, Rehab, Denzito, Gallery, Fees, Contact } from "./Home";
import Stuff from "./Stuff";
import { NavItem, NavHeader } from "./Nav";
import back from '../assets/back2.png';
import './App.css';

const App = () => {
  
  return (
    <HashRouter>
      <div className="app-container">
        <div className="side-container">
          <NavLink className="navigation-item--back" to="/"><img src={back} /></NavLink>

          <NavLink className="navigation-item" to="/"><NavHeader /></NavLink>
          <NavLink className="navigation-item" to="/patient"><NavItem title="Pacienti" index={1} /></NavLink>
          <NavLink className="navigation-item" to="/orthopedic"><NavItem title="Ortopédia" index={2} /></NavLink>
          <NavLink className="navigation-item" to="/fyzio"><NavItem title="Fyzioterapia" index={3} /></NavLink>
          <NavLink className="navigation-item" to="/rehab"><NavItem title="Rehabilitácia" index={4} /></NavLink>
          <NavLink className="navigation-item" to="/denzito"><NavItem title="Denzitometria" index={5} /></NavLink>
          <NavLink className="navigation-item" to="/gallery"><NavItem title="Galéria" index={6} /></NavLink>
          <NavLink className="navigation-item" to="/fees"><NavItem title="Poplatky" index={7} /></NavLink>
          <NavLink className="navigation-item" to="/contact"><NavItem title="Kontakt" index={8} /></NavLink>
        </div>
        <div className="main-container">
          <Route exact path="/" component={Home}/>
          <Route path="/patient" component={Patient}/>
          <Route path="/orthopedic" component={Orthopedic}/>
          <Route path="/fyzio" component={Fyzio}/>
          <Route path="/rehab" component={Rehab}/>
          <Route path="/denzito" component={Denzito}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/fees" component={Fees}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
