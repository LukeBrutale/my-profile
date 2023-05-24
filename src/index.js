import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './redux/state';
import { addPost, updateNewPostText, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRender = state => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
  );
};

reRender(state);
subscribe(reRender);
