import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const Comment = ({ comment, user }) => {
    return (
        <div className='comments'>
            <Link to={user.id === comment.user_id ? `/profile` : `/profile/${comment.user_id}`}>
                <div className='comments_img' style={{ backgroundImage: `url(${comment.userImage})` }}></div>
            </Link>
            <div className='comments_details'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className='comments_name'>{comment.user}</p>
                    <p className='comments_date'>{comment.created_at.split('T')[0]}</p>
                </div>
                <p className='comments__content'>
                    {comment.content}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = ({ user: { user } }) => {
    return {
        user,

    }
}

export default connect(mapStateToProps)(Comment)