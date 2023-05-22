import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route
                path="/profile/*"
                element={
                  <Profile
                    posts={props.state.profilePage.posts}
                    addPost={props.addPost}
                  />
                }
              />
              <Route
                path="/dialogs/*"
                element={
                  <Dialogs
                    dialogs={props.state.messagesPage.dialogs}
                    messages={props.state.messagesPage.messages}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
