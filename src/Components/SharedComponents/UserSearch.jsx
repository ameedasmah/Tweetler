import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const UserSearch = ({ user, myUser, setSearch }) => {
    return (
        <Link to={myUser.id === user.id ? `/profile` : `/profile/${user.id}`} style={{ textDecoration: 'none' }}>
            <div onClick={() => setSearch('')} className='searchedusers'>
                <div className='search__image' style={{ backgroundImage: `url(${user.image})` }} ></div>
                <p className='comments_name' style={{ marginTop: '14px' }}>{user.name}</p>
            </div>
        </Link>
    )
}

const mapStateToProps = ({ user: { user } }) => {
    return {
        myUser: user

    }
}

export default connect(mapStateToProps)(UserSearch)