import React from "react";

const NewsFeedCard = () => {
  return (
    <div className="newsfeed-card">
      <div className="chatroom">
        <h2 className="chatroom-header">Open Chat Rooms</h2>
        {/* <hr className="chat-spacer" /> */}
        <ul className="chatroom-ul">
          <li className="chatroom-li">Chat Room 1</li>
          <li className="chatroom-li">Chat Room 2</li>
          <li className="chatroom-li">Chat Room 3</li>
          <li className="chatroom-li">Chat Room 4</li>
        </ul>
        <button className="news-but">Create New ChatRoom</button>
      </div>
    </div>
  );
};

export default NewsFeedCard;
