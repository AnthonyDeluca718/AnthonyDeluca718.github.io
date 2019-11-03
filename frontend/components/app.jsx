import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';

const App = ({children}) => (
  <div>
    <HeaderContainer />
    <section className="content">
      {children}
    </section>
    <Footer />
  </div>
);

export default App;
