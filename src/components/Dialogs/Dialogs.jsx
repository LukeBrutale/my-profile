import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = props => {
  let dialogsElements = props.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();

  // функція додоє нове повідомлення //
  const addMessage = props => {
    let text = newMessageElement.current.value;
    newMessageElement.current.value = '';
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.add__message}>
        <textarea
          ref={newMessageElement}
          placeholder="Write me a message..."
          cols="30"
          rows="5"
          className={s.textarea}
        ></textarea>
        <button onClick={addMessage} className={s.btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
