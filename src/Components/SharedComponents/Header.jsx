import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Avatar, Button } from '@material-ui/core';
import { connect } from 'react-redux'

import UserSearch from './UserSearch'

import './Header.css'

const Header = ({ user, image }) => {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])


    const handleSearch = (e) => {
        setSearch(e.target.value)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: search })
        }
        fetch('https://tweeeeeter.herokuapp.com/user/search', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log('succes', data)
                // window.location.reload()
                setUsers(data)
            })
    }


    const logOut = () => {
        localStorage.removeItem('access')
        window.location.reload()
    }
    return (
        <div className='header'>
            <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-start' }}>
                <img src='https://cdn.dribbble.com/users/3749472/screenshots/6893259/birdicon_1x.png?compress=1&resize=400x300' className='header__icon' alt='icon' />
            </div>
            <div className='header__taps'>
                <Link to='/home' style={{ textDecoration: 'none' }}><p>Home</p></Link>
                <Link to='/explore' style={{ textDecoration: 'none' }}><p>Explore</p></Link>
                <Link to='/Bookmarks' style={{ textDecoration: 'none' }}><p>Bookmarks</p></Link>
            </div>
            <div className='header__profile'>
                <Link to='/profile'><Avatar alt="Remy Sharp" src={image} /></Link>
                <p>{user.name}</p>
                <Button onClick={logOut} variant="contained" size='small' color='primary' style={{ marginLeft: '20px' }}>Log Out</Button>
                <form className='header_search'>
                    <input className='header_input' placeholder='Search for a user ..' type='text' value={search} onChange={handleSearch} />
                </form>
            </div>
            {
                users && search && <div className='usersearch'>
                    {
                        users.map((user, i) => <UserSearch key={i} user={user} setSearch={setSearch} />)
                    }
                </div>
            }


        </div>
    )

}

const mapStateToProps = ({ user: { user, image } }) => {
    return {
        user,
        image
    }
}


export default connect(mapStateToProps)(Header)