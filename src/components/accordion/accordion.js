import React, { useState } from "react";
import "./accordion.css";
import ArrowIcon from "../../assets/icons/arrow-icon.svg";

const Accordion = ({ isCollapse = false, title, icon, children }) => {
  const [collapse, setCollapse] = useState(isCollapse);

  const handleAccordionToggle = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${collapse ? "open" : "closed"}`}
        onClick={handleAccordionToggle}
      >
        <div className="accordion-title">
          {icon && (
            <img
              className={`title-icon ${collapse ? "collapsed" : ""}`}
              src={icon}
              alt="title-icon"
            />
          )}
          {title && <h3 className="title">{title}</h3>}
        </div>
        <img
          src={ArrowIcon}
          alt="Toggle Icon"
          className={`accordion-arrow-icon ${collapse ? "collapsed" : ""}`}
        />
      </div>
      {collapse && (
        <div className="accordion-body">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="accordion-item">
              <span>-</span>
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
