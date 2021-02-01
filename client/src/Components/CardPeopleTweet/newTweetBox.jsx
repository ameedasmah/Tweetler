import React, { useState, useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import "./post.css"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink, Link } from "react-router-dom"
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CloudImage from "./uplodimage"
import Comment from './comment'
// import aaa from "./aaa.png"

import RepeatIcon from "@material-ui/icons/Repeat";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
// import MenuOptions from "../navbar/MenuOptions";

// import CommentLike from "./commentLike"

const TweetBody = ({ tweet, id }) => {
    console.log('tweeet', tweet)
    const isActive = useMediaQuery('(max-width:900px)')
    const [content, setContent] = useState('')
    const [comments, setComments] = useState(tweet.comments)
    const [like, setLike] = useState("")
    const [retweet, setRetweet] = useState("")
    const [save, setSave] = useState(tweet.tweet_Bookmark)
    const [likeColor, setLikeColor] = useState(false)
    // console.log('save', save)

    const submitComment = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tweet_Id: tweet.id, user_Id: id, comment: content })
        }
        console.log('mybody', { tweet_Id: tweet.id, user_Id: id, comment: content })
        fetch('http://127.0.0.1:8000/comment/', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setContent('')
                setComments([...comments, data])
            })

    }

    const handleLike = async () => {
        setLikeColor(!likeColor)
    }
    const addBookMark = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tweet_Id: tweet.id, user_Id: id })
        }
        fetch('http://127.0.0.1:8000/favourite/', requestOptions)
            .then(response => response.json())
            .then(data => {
                setSave([...save, data])
            })

    }
    console.log('save', tweet)
    return (
        <div className="tweet-body">
            <div className="tweet__top" >
                <Link to="/profile" className="twet__top__image">
                    <Avatar ><img className=" avatar__image" src={tweet.userImage} /></Avatar>
                </Link>

                <div className='top__date'>
                    <h4 style={{ margin: "0px" }} >{tweet.user}</h4>
                    <h5 style={{ margin: "0px", color: "gray" }}>{tweet && tweet.time && (tweet.time.split('T')[0] + '  at ' + tweet.time.split('T')[1].split('.')[0])}</h5>
                </div>
            </div>
            <h4 style={{ color: "gray" }}>
                {/* {tweetResult.caption} */}
                {tweet.tweet}
            </h4>
            {
                tweet.img && <img className="tweet__image" src={tweet?.img} />
            }
            <div className="comments-saves ">
                <h5 style={{ marginRight: "10px" }}>{tweet?.comments?.length} omments</h5>
                <h5 style={{ marginRight: "10px" }}>{likeColor ? tweet?.tweet_likes?.length + 1 : tweet?.tweet_likes?.length} likes</h5>
                <h5> {tweet?.tweet_Bookmark?.length} saves</h5>
            </div>
            <div className='comments-sec'>
                <CommentIcon style={{ width: '35px', height: "35px" }} />
                <FavoriteIcon onClick={handleLike} style={{ width: '35px', height: "35px", color: `${likeColor ? 'red' : ''}` }} />
                <div onClick={addBookMark} style={{ width: '35px', height: "35px" }}><BookmarkBorderIcon style={save.length ? { color: 'Blue', marginRight: '7px' } : { marginRight: '7px' }} /><p>bookmarks</p></div>

            </div>
            <div className="profile-comment" >
                <Link to="/profile" className="profile-link">
                    <Avatar ><img className="avatar__image" src={tweet.userImage} /></Avatar>
                </Link>
                {/* <SearchBar tweetid={tweetResult._id} /> */}
            </div>
            <form style={{ width: '90%' }} onSubmit={submitComment}>

                <input className='tweet__input' placeholder="add a comment .." type='text' value={content} onChange={(e) => setContent(e.target.value)} />
            </form>
            {
                tweet && comments.map((comment, i) => <Comment key={i} comment={comment} />)
            }
            {/* {
                tweetResult.comments && tweetResult.comments.map(comment => {
                    return (
                        <CommentLike comment={comment} user={user} />
                    )
                })
            } */}
        </div>
    )

}

export default TweetBody