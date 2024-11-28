import "./navbar.css";
import HamburgerIcon from "../../assets/icons/hamburger-icon.svg";
import CompanySelect from "../company-select/company-select";
import romaniaPic from "../../assets/images/romania-pic.jpg";
import usaFlag from "../../assets/images/usa-flag.png";
import rectIcon from "../../assets/icons/rectangle-icon.svg";
import themeIcon from "../../assets/icons/theme-icon.svg";
import notificationIcon from "../../assets/icons/notification-icon.svg";
import userPic from "../../assets/images/user.png";

const Navbar = ({ toggleSidebar }) => {
  const companies = [
    {
      companyName: "Romanya Demo Projesi",
      companyNumber: "ROM-001",
      companyPic: romaniaPic,
    },
    {
      companyName: "Türkiye Projesi",
      companyNumber: "TR-002",
      companyPic: romaniaPic,
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button
          className="toggle-btn"
          onClick={toggleSidebar}
          aria-label="Sidebar Button"
        >
          <img src={HamburgerIcon} alt="hamburger-icon" />
        </button>
        <CompanySelect options={companies} />
      </div>
      <div className="navbar-right">
        <div className="icon-menu">
          <img className="flag" src={usaFlag} alt="flag" />
          <img className="rectangle" src={rectIcon} alt="full-screen" />
          <img className="theme-change" src={themeIcon} alt="theme-changer" />
          <img
            className="notifications"
            src={notificationIcon}
            alt="notification"
          />
        </div>
        <div className="profile">
          <img className="user-pic" src={userPic} alt="user-pic" />
          <div className="profile-info">
            <p className="user-name">Anna Adame</p>
            <span className="user-role">Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
