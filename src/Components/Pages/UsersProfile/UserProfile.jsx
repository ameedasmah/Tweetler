import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import TweetCard from '../../SharedComponents/tweetcard'

import './styles.css'

const UserProfile = ({ match, user, history }) => {
    const [tweets, setTweets] = useState(null)
    const [profile, setProfile] = useState(null)
    const [followers, setFollowers] = useState([])
    const [followersCount, setFollowersCount] = useState(0)
    const [follow, setFollow] = useState(true)
    const [followId, setFollowId] = useState(null)
    // console.log('followid', followId)
    const id = match.params.id

    useEffect(() => {
        if (user.id == match.params.id) {
            history.push('/profile')
        } else {
            getTweets()
        }
    }, [match.params.id])

    const checkFollow = (profile) => {
        profile.userFrom.forEach((us) => {
            if (us.user_from === user.id) {
                setFollow(false)
                setFollowId(us.id)
            }
        })
    }

    const getTweets = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        }
        fetch('https://tweeeeeter.herokuapp.com/user/details', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setProfile(data)
                setTweets(data.tweets)
                setFollowers(data.userFrom)
                setFollowersCount(data.userFrom.length)
                checkFollow(data)
            })
    }

    const followUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_from: user.id, user_to: profile.id })
        }
        fetch('https://tweeeeeter.herokuapp.com/followers/', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setFollowers([...followers, data])
                setFollowersCount(followersCount + 1)
                setFollowId(data.id)
                setFollow(false)
            })
    }

    const unFollowUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: followId })
        }
        fetch('https://tweeeeeter.herokuapp.com/followers/remove', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setFollowersCount(followersCount - 1)
                setFollow(true)
            })
    }

    return (
        <div className='userprofile'>
            <div className='home__img'></div>
            <div className='profile__details'>
                <div className='profile__img' style={{ backgroundImage: `url(${profile && profile.image})` }}>
                    <div className='details__info'>
                        <p className='profile__name'>{profile && profile.name}</p>
                        <p><span className='follow'><span style={{ marginRight: '7px', fontWeight: '600' }}>{profile && profile.userTo.length - 1}</span> Following</span></p>
                        <p><span className='follow'><span style={{ marginRight: '7px', fontWeight: '600' }}>{followersCount - 1}</span> Followers</span></p>
                    </div>
                </div>
                {
                    follow ? <button onClick={followUser} className='profile__follow'>Follow</button> :
                        <button onClick={unFollowUser} className='profile__follow'>Unfollow</button>
                }

            </div>
            <div className='tweets'>
                {
                    tweets && tweets.map((tweet, id) => <TweetCard key={id} tweet={tweet} />)
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


export default connect(mapStateToProps)(UserProfile)