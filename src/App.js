import React from "react";
import "./App.css";

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">Ini Pesan 140 karakter</div>;
}

function Author() {
  return (
    <span className="author">
      <span className="name">Desta</span>
      <span className="handle">@emang_dasar</span>
    </span>
  );
}

function App() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author /> <Time /> <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

export default App;
