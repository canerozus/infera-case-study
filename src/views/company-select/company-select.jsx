import React, { useState } from "react";
import "./company-select.css";
import ArrowDownIcon from "../../assets/icons/arrow-down-icon.svg";

const CompanySelect = ({ options }) => {
  const [selectedCompany, setSelectedCompany] = useState(options[0]);

  const handleSelect = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="company-select">
      <div className="selected-company">
        <div className="selected-company-info">
          <img
            className="company-picture"
            src={selectedCompany.companyPic}
            alt="company-picture"
          />
          <div className="company-content">
            <h3 className="company-title">{selectedCompany.companyName}</h3>
            <p className="company-number">{selectedCompany.companyNumber}</p>
          </div>
        </div>
        <img
          src={ArrowDownIcon}
          alt="Toggle Icon"
          className="comp-arrow-icon"
        />
      </div>
      <ul className="company-options">
        {options.map((company, index) => (
          <li
            key={index}
            className="company-option"
            onClick={() => handleSelect(company)}
          >
            <img
              className="company-picture"
              src={company.companyPic}
              alt="company-picture"
            />
            <div className="company-content">
              <h3 className="company-title">{company.companyName}</h3>
              <p className="company-number">{company.companyNumber}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanySelect;
