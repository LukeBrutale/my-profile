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
  let dialogsData = [
    { id: 1, name: 'Luke' },
    { id: 2, name: 'Brutale' },
    { id: 3, name: 'Yura' },
  ];

  let messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Thanks' },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>

      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} />
      </div>
    </div>
  );
};

export default Dialogs;
