import React from 'react';
import Header from './components/Header/Header';
import NoiseBg from './components/NoiseBg/NoiseBg';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Main from './modules/Main/Main';
import Contacts from './modules/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Services from './modules/Services/Services';
import Proposal from './modules/Proposal/Proposal';

function App() {
  return (
    <div className='wrapper'>
      <CustomCursor />
      <NoiseBg />
      <div className='content'>
        <Header />

        {/* Content */}
        <Main />
        <Services />
        <Proposal />
        <Contacts />

        <Footer />
      </div>
    </div>
  );
}

export default App;
