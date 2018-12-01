import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

// prettier-ignore
function getRetweetCount(count) {
  if(count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

// prettier-ignore
// function Count({count}) {
//   if(count > 0) {
//     return (
//       <span className="retweet-count">
//         {count}
//       </span>
//     );
//   } else {
//     return null;
//   }
// }

const RetweetButton = ({ count }) => (
  <span className="retweet button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-opitons-button" />
);

var testTweet = {
  message: "something about cats.",
  gravatar: "f3787b4e9b8ef613d3daa421cb376c19",
  author: {
    handle: "catperson",
    name: "I'm Cat Person"
  },
  likes: 2,
  retweets: 10,
  tiemstamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
