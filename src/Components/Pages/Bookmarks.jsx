import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import TweetCard from '../SharedComponents/tweetcard'

import './Bookmarks.css'

const Bookmarks = ({ user }) => {

    // const [tweets, setTweets] = useState(null)
    const [bookmarks, setBookmarks] = useState(null)

    useEffect(() => {
        getTweets()
    }, [])

    const getTweets = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: user.id })
        }
        fetch('https://tweeeeeter.herokuapp.com/user/details', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                // setTweets(data.tweets)
                getBookmarks({ user_bookmarks: data.user_bookmarks })
            })
    }

    const getBookmarks = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }
        fetch('https://tweeeeeter.herokuapp.com/tweet/bookmarks', requestOptions)
            .then(response => response.json())
            .then(data => {
                // window.location.reload()
                // console.log('bookmarks', data)
                setBookmarks(data)

            })
    }

    return (
        <div className='bookmark'>
            <h1>Bookmarks</h1>
            <div className='tweets'>
                {
                    bookmarks && bookmarks.map((tweet, id) => <TweetCard key={id} tweet={tweet} />)
                }
            </div>
        </div>

    )
}

const mapStateToProps = ({ user: { user } }) => {
    return {
        user
    }
}


export default connect(mapStateToProps)(Bookmarks)