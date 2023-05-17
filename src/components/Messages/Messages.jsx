import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';

const Messages = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        <div className={s.item}>
          <NavLink to="/messages/1">Luke</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/messages/2">Brutale</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/messages/3">Yura</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Thanks</div>
      </div>
    </div>
  );
};

export default Messages;
