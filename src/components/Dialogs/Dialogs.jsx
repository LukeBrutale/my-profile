import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: 'Luke' },
    { id: 2, name: 'Brutale' },
    { id: 3, name: 'Yura' },
  ];

  let messages = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Thanks' },
  ];

  let dialogsElements = dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
