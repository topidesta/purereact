import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";

// arrow style
const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};
const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function Count(count) {
  if (count.count > 0) {
    return <span className="retweet-count">{count.count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    <Count count={count} />
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

// prop { tweet } sebagai fungsi destructured
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
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

const testTweet = {
  message: "props dengan Pure React",
  gravatar: "775984321d9338f0ee4425a8021db280",
  author: {
    handle: "emang_dasar",
    name: "topidesta"
  },
  likes: 2,
  retweets: 10,
  timestamp: "2020-07-30 21:24:37"
};

ReactDOM.render(
  <React.StrictMode>
    <Tweet tweet={testTweet} />
  </React.StrictMode>,
  document.getElementById("root")
);
