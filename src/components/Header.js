import Logo from "../image/logo.png";
import "./Header.css"
export default function Header({title}) {
  // const {title} = props
  return (
    <>
      <nav>
        <img src={Logo} alt="logo" className="logo"></img>
        <a href="/">{title}</a>
      </nav>
    </>
  );
}
