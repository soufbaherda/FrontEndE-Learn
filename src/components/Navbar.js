import navbar from "./navbar.module.css";
import { IoMdBook } from "react-icons/io";
import { padding } from "@mui/system";
import AboutUs from "./AboutUs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const active = true;
  return (
    <div className={navbar.navbar}>

      <div className={navbar.container}>

        <div className={navbar.logoContainer}>
          <Link to="/">
            <IoMdBook className={navbar.logo} />
          </Link>
          <h2 >
            E<span className={navbar.act}>-</span>Learn
          </h2>
        </div>

        <ul className={navbar.links}>
          <Link to="/Courses"><li className={navbar.item} >Courses</li></Link>
          <Link><li className={navbar.item}>Mentors</li></Link>
          <Link to="/About">
            <li
              className={navbar.item}
              style={{ color: "blue", marginRight: "-20px", right: "0" }}
            >
              About Us

            </li>
          </Link>
        </ul>

        {/* <img src={education} alt="logo" className={navbar.logo} /> */}
        <div>
          <Link to="/SignUP">
            <a href="#" className={navbar.btn} >
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
