// styles
import "../styles/Header.module.css";

export default function Header() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="navbar">
          <div className="nav-logo">MNM</div>

          <div className="nav-list">
            <a href="#" className="nav-list-item">
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
