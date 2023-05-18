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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        <DialogItem name="Luke" id="1" />
        <DialogItem name="Brutale" id="2" />
        <DialogItem name="Yura" id="3" />
      </div>

      <div className={s.messages}>
        <Message message="Hello" />
        <Message message="How are you?" />
        <Message message="Thanks" />
      </div>
    </div>
  );
};

export default Dialogs;
