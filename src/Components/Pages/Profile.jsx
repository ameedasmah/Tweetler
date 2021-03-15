import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import { changeImage } from '../../Redux/User/userActions'
import TweetCard from '../SharedComponents/tweetcard'

import './Profile.css'



const Profile = ({ user, changeImage, userImage }) => {
    const [tweets, setTweets] = useState(null)
    const [profile, setProfile] = useState(null)

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
                setProfile(data)
                setTweets(data.tweets)
            })
    }

    const uploadImage = (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'pqcz20rh')

        const requestOptions = {
            method: 'POST',
            body: formData
        };
        fetch('	https://api.cloudinary.com/v1_1/dzjchtsxn/image/upload', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('uploaded', data)

                user.image = data.secure_url
                console.log('dispatched', user)
                changeImage(user)
                // setImage(data.secure_url)
                postImage({ id: user.id, image: data.secure_url })
            });

    }

    const postImage = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }
        fetch('https://tweeeeeter.herokuapp.com/user/image', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('succes', data)
                // window.location.reload()
            })
    }


    return (
        <div className='profile'>
            <div className='home__img'></div>
            <div className='profile__details'>
                <div className='profile__img' style={{ backgroundImage: `url(${user.image})` }}>
                    <div className='details__info'>
                        <p className='profile__name'>{profile && profile.name}</p>
                        <p><span className='follow'><span style={{ marginRight: '7px', fontWeight: '600' }}>{profile && profile.userTo.length - 1}</span> Following</span></p>
                        <p><span className='follow'><span style={{ marginRight: '7px', fontWeight: '600' }}>{profile && profile.userFrom.length - 1}</span> Followers</span></p>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            // className='user_inputfile'
                            onChange={uploadImage}
                        />
                        <label className='upload' htmlFor="file"><PhotoCameraIcon style={{ color: 'gray' }} /></label>
                    </div>
                </div>

            </div>
            <div className='tweets'>
                {
                    tweets && tweets.map((tweet, id) => <TweetCard key={id} tweet={tweet} />)
                }
            </div>
        </div>

    )
}

const mapStateToProps = ({ user: { user, image } }) => {
    return {
        user,
        userImage: image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeImage: user => dispatch(changeImage(user))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Profile)