import React from 'react';
// import Navbar from "./components/Navbar";
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar";
import Slider from "../../Components/Slider";
import Categories from "../../Components/Categories"
import BestProductPage from "../../Components/BestProducts";
import Announcement from "../../Components/Announcement";
import Newsletter from "../../Components/NewsLetter";

function Home() {
  return (
    <div>
      <Announcement/>
       <Navbar/>
       <Slider/>
       <Categories/>
       <BestProductPage/>
     <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home