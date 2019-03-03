import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

const CommentConnection = ({ conversations, handleReceivedComment }) => {
  return (
    <React.Fragment>
      {conversations.map(conversation => {
        return (
          <ActionCableConsumer
            key={conversation.id}
            channel={{
              channel: "CommentsChannel",
              conversation: conversation.id
            }}
            onReceived={handleReceivedComment}
          />
        );
      })}
    </React.Fragment>
  );
};
export default CommentConnection;
