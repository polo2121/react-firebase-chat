import logo from "./logo.svg";

export default function Header() {
  return (
    <nav className="nav">
      <img src={logo} alt="this is react logo" className="nav-logo"></img>
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
