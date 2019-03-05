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
            onReceived={console.log}
          />
        );
      })}
    </React.Fragment>
  );
};
export default CommentConnection;
