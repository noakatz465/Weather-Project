import React, { FC } from 'react';
import './Home.scss';
import axios from 'axios';


interface HomeProps { }

const Home = (props: HomeProps) => {
  return <div className="Home">
    <h1>מזג האוויר בערים</h1>
  </div>
}

export default Home;
