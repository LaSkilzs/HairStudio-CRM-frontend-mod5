import React from "react";
import { ActionCableConsumer } from "react-actioncable-provider";

const CommentConnection = props => {
  return (
    <React.Fragment>
      {props.conversations.map(conversation => {
        return (
          <ActionCableConsumer
            key={conversation.id}
            channel={{
              channel: "CommentsChannel",
              conversation: conversation.id
            }}
            onReceived={props.handleReceivedComment}
          />
        );
      })}
    </React.Fragment>
  );
};
export default CommentConnection;
