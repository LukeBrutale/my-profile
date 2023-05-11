import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg"
          alt="logo"
        />
      </header>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="/">Messages</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Music</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <img
          className="content-img"
          src="https://wallpapers.com/images/featured/beach-background-tg3uh15tj9rwzru5.webp"
          alt=""
        />
        <div>avatar, disc</div>
        <div>
          my post
          <div>New Post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
