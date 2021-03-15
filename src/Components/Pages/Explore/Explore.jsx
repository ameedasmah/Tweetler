import React, { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Loader from 'react-loader-spinner';

import Tweets from '../Home/Tweets'

import './Explore.css'

const Explore = () => {

    const [tweets, setTweets] = useState(null)
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTweets()
    }, [])


    const searchTweets = (e) => {
        e.preventDefault()
        setLoading(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: input })
        }
        fetch('https://tweeeeeter.herokuapp.com/tweet/search', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log('succes', data)
                setTweets(data)
                setLoading(false)
            })
    }

    const getTweets = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('https://tweeeeeter.herokuapp.com/tweet/', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setTweets(data)
                setLoading(false)
            })
    }

    const filterByLikes = () => {
        let sortedTweets = [...tweets]
        sortedTweets.sort((a, b) => b.tweet_likes.length - a.tweet_likes.length)
        setTweets(sortedTweets)
    }

    const filterByLatest = () => {
        let Latest = [...tweets]
        Latest.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setTweets(Latest)
    }

    return (
        <div className='explore'>
            <form className='explore__search' onSubmit={searchTweets}>
                <input className='search__input' type='text' placeholder='Search tweets ..' value={input} onChange={(e) => setInput(e.target.value)} />
                <SearchIcon className='search__icon' onClick={searchTweets} />
                <div className='explore__filters'>
                    <p onClick={filterByLatest}>Latest</p>
                    <p onClick={filterByLikes}>Top</p>
                </div>
            </form>

            {
                loading ?
                    <Loader type="Circles" color="#00BFFF" height={80} width={80} style={{ marginTop: '300px' }} /> :
                    <Tweets tweets={tweets} />
            }
        </div>
    )
}



export default Explore