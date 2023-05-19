import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Luke', likes: '20' },
  { id: 2, message: 'Brutale', likes: '15' },
  { id: 3, message: 'Yura', likes: '5' },
];

let dialogs = [
  { id: 1, name: 'Luke' },
  { id: 2, name: 'Brutale' },
  { id: 3, name: 'Yura' },
  { id: 4, name: 'Lena' },
];

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Thanks' },
  { id: 4, message: 'Somethink' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
);

// reportWebVitals();
