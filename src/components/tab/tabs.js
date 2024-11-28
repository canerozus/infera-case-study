import { useState } from "react";
import "./tabs.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {" "}
      <div className="tabs-container">
        <div className="tab-titles">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      {tabs[activeTab] && tabs[activeTab].content}
    </>
  );
};

export default Tabs;
