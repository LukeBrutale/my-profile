import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let reRender = state => {
  root.render(
    <React.StrictMode>
      <App
        state={store._state}
        addPost={store.addPost}
        updateNewPostText={store.updateNewPostText}
      />
    </React.StrictMode>,
  );
};

reRender(store._state);
store.subscribe(reRender);
