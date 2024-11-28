import "./sidebar.css";
import tLogo from "../../assets/icons/T.svg";
import yLogo from "../../assets/icons/Y.svg";
import sLogo from "../../assets/icons/S.svg";
import projectIcon from "../../assets/icons/project-icon.svg";
import docsIcon from "../../assets/icons/doc-mngt-icon.svg";
import qualityIcon from "../../assets/icons/quality-icon.svg";
import isgIcon from "../../assets/icons/isg-icon.svg";
import employeeIcon from "../../assets/icons/employee-mngt-icon.svg";
import goodsIcon from "../../assets/icons/goods-mngt-icon.svg";
import reportsIcon from "../../assets/icons/reports-icon.svg";
import definitionIcon from "../../assets/icons/definition-icon.svg";
import Accordion from "../../components/accordion/accordion";

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    <p>Proje Detay</p>,
    "Metrajlar",
    "İhaleler",
    "Sözleşmeler",
    "Hakedişler",
    "Kabul ve Kapanış İşlemleri",
  ];
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="logo">
        <img src={tLogo} height={30} alt="t-letter" />
        <img src={yLogo} height={30} alt="y-letter" />
        <img src={sLogo} height={30} alt="s-letter" />
      </div>
      <div className="sidebar-content">
        <Accordion title={"Proje"} icon={projectIcon}>
          {menuItems}
        </Accordion>
        <div className="sidebar-item">
          <div className="accordion-title">
            <img className="title-icon" src={docsIcon} alt="title-icon" />

            <h3 className="title">Döküman Yönetimi</h3>
          </div>
        </div>
        <Accordion title={"Kalite"} icon={qualityIcon}>
          {menuItems}
        </Accordion>
        <Accordion title={"ISG"} icon={isgIcon}>
          {menuItems}
        </Accordion>
        <Accordion title={"Personel Yönetimi"} icon={employeeIcon}>
          {menuItems}
        </Accordion>
        <Accordion title={"Malzeme Yönetimi"} icon={goodsIcon}>
          {menuItems}
        </Accordion>
        <div className="sidebar-item">
          <div className="accordion-title">
            <img className="title-icon" src={reportsIcon} alt="title-icon" />
            <h3 className="title">Raporlar</h3>
          </div>
        </div>
        <div className="sidebar-item">
          <div className="accordion-title">
            <img className="title-icon" src={definitionIcon} alt="title-icon" />
            <h3 className="title">Tanımlamalar</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
