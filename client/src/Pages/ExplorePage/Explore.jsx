import SideNavbar from "../../Components/SideNavbar/SideNavbar";
import NavBar from "../SharedComponents/NavBar";
import Main from "../../Components/Main/Main";
import NewTweet from "../../Components/NewTweet/NewTweet";
import PeopleTweet from "../../Components/CardPeopleTweet/PeopleTweet";
import "../HomePage/HomePage.css"

const HomePage = ({ id, match }) => {
  return (
    <div className="homepage">
      <NavBar />
      <SideNavbar />
      <Main id={id} match={match} />
    </div>
  );
};

export default HomePage;
