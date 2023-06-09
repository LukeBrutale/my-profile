import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();
  let newMessageBody = state.newMessageBody;

  // функція додоє нове повідомлення //
  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onSendmessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              ref={newMessageElement}
              value={newMessageBody}
              onChange={onSendmessageChange}
              placeholder="Write me a message..."
              cols="30"
              rows="5"
              className={s.textarea}></textarea>
          </div>
          <div>
            <button
              onClick={onSendMessageClick}
              className={s.btn}>
              Send
            </button>
          </div>
        </div>
      </div>
      <div className={s.add__message}></div>
    </div>
  );
};

export default Dialogs;
