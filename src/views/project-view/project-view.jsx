import "./project-view.css";
import arrowIcon from "../../assets/icons/arrow-icon.svg";
import romaniaPic from "../../assets/images/romania-pic.jpg";
import dotsIcon from "../../assets/icons/three-dot-icon.svg";
import Tabs from "../../components/tab/tabs.js";
import OverallView from "../overall-view/overall-view.jsx";
import Models from "../models/models.jsx";

const ProjectView = () => {
  const tabData = [
    {
      title: "Genel Görünüm",
      content: <OverallView />,
    },
    {
      title: "Modeller",
      content: <Models />,
    },
    {
      title: "Proje Takvimi",
      content: <div>Proje Takvimi buraya gelecek</div>,
    },
    {
      title: "Keşif",
      content: <div>Keşif buraya gelecek</div>,
    },
    {
      title: "Alt Yükleniciler",
      content: <div>Alt Yükleniciler buraya gelecek</div>,
    },
  ];
  return (
    <div className="project-page">
      <div className="project-breadcrumb">
        <h3 className="title">Proje Detay</h3>
        <div className="breadcrumb">
          <span className="first-text">Ecommerce</span>
          <img
            className="breadcrumb-arrow-icon"
            src={arrowIcon}
            alt="arrow-icon"
          />
          <span className="sec-text">Seller Details</span>
        </div>
      </div>
      <div className="project-details">
        <div className="project-view">
          <img
            src={romaniaPic}
            alt="project-picture"
            className="project-picture"
          />
          <div className="project-info">
            <h3 className="project-name">Romanya Demo Projesi</h3>
            <span className="project-situation">Onay Sürecinde</span>
          </div>
          <div className="project-more">
            <img src={dotsIcon} alt="more" className="dots-icon" />
          </div>
        </div>
        <div className="project-agreement">
          <div className="project-contract">
            <span>Sözleşme</span>
            <p>ROM-001</p>
          </div>
          <div className="project-contract">
            <span>Şirket</span>
            <p>Asociated CCN ALTYAPI YATIRIMLARI VE İNŞAAT AŞ.</p>
          </div>
        </div>
      </div>
      <div className="project-tabs">
        <Tabs tabs={tabData} />
      </div>
    </div>
  );
};
export default ProjectView;
