import React from "react";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  // функція додоє нове повідомлення //
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onSendmessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <Dialogs
        updateNewMessageBody={onSendmessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}
      />
    </div>
  );
};

export default DialogsContainer;
