import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <span className="logo">YouthCoders</span>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/Posts"}>posts</Link>
          <Link to={"/Categories"}>categories</Link>
          <Link to={"/Contact-Us"}>contact us</Link>
          <Link to={"/About-Us"}>about us</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
