import React, { useState, useEffect } from 'react'
import SideNavbar from "../../Components/SideNavbar/SideNavbar";
import NavBar from "../SharedComponents/NavBar";
import Main from "../../Components/Main/Main";
import NewTweet from "../../Components/NewTweet/NewTweet";
import PeopleTweet from "../../Components/CardPeopleTweet/PeopleTweet";
import CustomizedInputBase from './serach'
import "../HomePage/HomePage.css"
import Search from '../../Components/Search/Search';

const HomePage = ({ id, match }) => {
  const [search, setSearch] = useState('')


  const onInputChange = (event) => {
    setSearch(event)
  }
  console.log('search', search)
  return (
    <div className="homepage">
      <NavBar />
      <SideNavbar />
      <div><Search onInputChange={onInputChange} />
        <Main search={search} id={id} match={match} /></div>
    </div>
  );
};

export default HomePage;
