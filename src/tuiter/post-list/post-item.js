import React from "react";

const PostItem = (  {
  post = {
    "_id": 123,
    "headshot": "../../images/Starship.jpg",
    "userName": "Elon Musk",
    "handle": "@elonmusk",
    "time": "23h",
    "heading": "Amazing show about @Inspiration4x mission!",
    "image": "../../images/Inspiration4x.jpg",
    "tweetHeading": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "tweet": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
    "link": "netfilx.com",
    "comment": "4.2K",
    "retweet": "3.5K",
    "like": "37.5K"
  }
}) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img width={70} height={70} className="rounded-circle float-start" src={post.headshot}/>
          </div>
          <div className="col-10">
            <div><a>{post.userName} <i className="bi bi-patch-check-fill" style={{color:'dodgerblue'}}/> <span style={{color:'gray'}}>{post.handle} .{post.time}</span> <i className="bi bi-three-dots float-end"/> </a></div>
            <div>{post.heading}</div>
            <div>
              <img width="100%" className="rounded-3" src={post.image}/>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <i className="bi bi-chat" /> {post.comment}
              </div>
              <div className="col-3">
                <i className="bi bi-share col-3" /> {post.retweet}
              </div>
              <div className="col-3">
                <i className="bi bi-heart col-3" /> {post.like}
              </div>
              <div className="col-3">
                <i className="bi bi-send col-3" />
              </div>
            </div>
          </div>
        </div>
      </li>
  );
};
export default PostItem;