import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import PopularProduct from './Components/PopularProduct/PopularProduct';
import LatestProduct from './Components/LatestProduct/LatestProduct';
import XclusiveMail from './Components/XclusiveMail/XclusiveMail';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Carousel/>
      <PopularProduct/>
      <LatestProduct/>
      <XclusiveMail/>
      <Footer/>
    </div>
  )
}

export default App