// import './Trends.css';
// const Trends = () => {
//     return (
//         <div className="tweeter-trends">
//             <div className="tweeter-trends-container">

//                 <div className="trends-data">
//                     <h3>Trends for you</h3>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
//                         <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
//                         <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
//                     </svg>
//                 </div>

//                 <div className="trends-data">
//                     <div className="trends-data-container">

//                         <div className="trends">

//                             <div className="trends-hashtag">
//                                 <div>palestine</div>
//                                 <div className="dots-container">
//                                     <svg viewBox="0 0 24 24" className="dots">
//                                         <g>
//                                             <circle cx="5" cy="12" r="2"></circle>
//                                             <circle cx="12" cy="12" r="2"></circle>
//                                             <circle cx="19" cy="12" r="2"></circle>
//                                         </g>
//                                     </svg>
//                                 </div>
//                             </div>

//                             <div>13K Tweets</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="trends-data">
//                     <div className="trends-data-container">

//                         <div className="trends">

//                             <div className="trends-hashtag">
//                                 <div>Twitter</div>
//                                 <div className="dots-container">
//                                     <svg viewBox="0 0 24 24" className="dots">
//                                         <g>
//                                             <circle cx="5" cy="12" r="2"></circle>
//                                             <circle cx="12" cy="12" r="2"></circle>
//                                             <circle cx="19" cy="12" r="2"></circle>
//                                         </g>
//                                     </svg>
//                                 </div>
//                             </div>

//                             <div>134K Tweets</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="trends-data">
//                     <a>
//                         <div>Show more</div>
//                     </a>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Trends;



import React from "react";
import "./Trends.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__widgetContainer" style={{ marginTop: '2.3rem' }}>
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="AndreiNeagoie"
                    options={{ height: 400 }}
                />

            </div>
        </div>
    );
}

export default Widgets;