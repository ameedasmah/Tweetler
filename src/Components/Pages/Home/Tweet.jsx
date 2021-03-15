import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack';
import WallpaperIcon from '@material-ui/icons/Wallpaper';


const Tweet = ({ user, tweets, setTweets, userImage }) => {
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const { enqueueSnackbar } = useSnackbar();

    const submitTweet = (e) => {
        e.preventDefault()
        if (content.length > 0) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content, user_id: user.id, image })
            }
            fetch('https://tweeeeeter.herokuapp.com/tweet/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    // window.location.reload()
                    setTweets([data, ...tweets])
                    setContent('')
                })
        } else {

            enqueueSnackbar('Please write something', { variant: 'error', autoHideDuration: 1000 })
        }
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
                console.log(data)
                setImage(data.secure_url)

            });

    }

    return (

        <form className='tweet' onSubmit={submitTweet}>
            <p className='tweet__text'>Tweet Something</p>
            <div className='tweet__border'></div>
            <div className='tweet__pic' style={{ backgroundImage: `url(${userImage})` }}></div>
            <textarea className='tweet__input' placeholder='Write Something brooo ..' value={content} onChange={(e) => setContent(e.target.value)} />
            <input
                type="file"
                id="file"
                name="file"
                // className='user_inputfile'
                onChange={uploadImage}
            />
            <label className='label' htmlFor="file"><WallpaperIcon style={{ color: 'gray' }} /></label>
            <button className='tweet__buttom'
                onClick={submitTweet}><p className='buttom__text'>Tweet</p></button>
            {
                image && <div className='tweet__image' style={{ backgroundImage: `url(${image})` }}></div>
            }
        </form>

    )
}

const mapStateToProps = ({ user: { user, image } }) => {
    return {
        user,
        userImage: image
    }
}

export default connect(mapStateToProps)(Tweet)