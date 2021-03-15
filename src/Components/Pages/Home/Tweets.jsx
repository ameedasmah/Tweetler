import React from 'react'
import TweetCard from '../../SharedComponents/tweetcard'

const Tweets = ({ tweets }) => {
    // console.log('here', tweets)

    return (
        <div className='tweets'>
            {
                tweets && tweets.map((tweet, id) => <TweetCard key={id} tweet={tweet} />)
            }
        </div>
    )
}

export default Tweets