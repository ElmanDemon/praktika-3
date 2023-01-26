import React from 'react'
import First from '../../Components/HomeComponents/first'
import Products from '../../Components/HomeComponents/Products'
import Sale from '../../Components/HomeComponents/Sale'
import Navbar from '../../Components/Navbar'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
    
      </Helmet>
      <Navbar />
      <First />
      <Products />
      <Sale />
    </>
  );
}

export default Home