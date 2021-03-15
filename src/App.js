import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Bookmarks from './Components/Pages/Bookmarks';
import Home from './Components/Pages/Home/Home'
import Explore from './Components/Pages/Explore/Explore';
import Profile from './Components/Pages/Profile'
// import Tweetcard from './Components/SharedComponents/tweetcard';
import Login from './Components/Pages/LoginSignup/Login';
import Signup from './Components/Pages/LoginSignup/Signup';
import Header from './Components/SharedComponents/Header'
import UserProfile from './Components/Pages/UsersProfile/UserProfile'

import './App.css';
import { load_user } from './Redux/User/userActions';


const App = ({ isAuthenticated, load_user }) => {
  // console.log(isAuthenticated)

  useEffect(() => {
    // console.log('sss')
    load_user()
  }, [])

  return (
    <div className="App">
      <Router>

        {
          isAuthenticated && <Header />
        }
        <Switch>
          <Route path="/" exact render={(props) => !isAuthenticated ? <Login {...props} /> : <Redirect to='/home' />} />
          {/* <Route path="/test" exact component={Home} /> */}
          <Route path="/signup" exact render={(props) => !isAuthenticated ? <Signup {...props} /> : <Redirect to='/home' />} />
          <Route path="/home" exact render={(props) => isAuthenticated ? <Home {...props} /> : <Redirect to='/' />} />
          <Route path="/Profile" exact render={(props) => isAuthenticated ? <Profile {...props} /> : <Redirect to='/' />} />
          <Route path="/Profile/:id" exact render={(props) => isAuthenticated ? <UserProfile {...props} /> : <Redirect to='/' />} />
          <Route path="/Explore" exact render={(props) => isAuthenticated ? <Explore {...props} /> : <Redirect to='/' />} />
          <Route path="/Bookmarks" exact render={(props) => isAuthenticated ? <Bookmarks {...props} /> : <Redirect to='/' />} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ user: { isAuthenticated } }) => {
  return {
    isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load_user: () => dispatch(load_user())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
