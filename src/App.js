import "./App.css";
import Navbar from "./views/navbar/navbar";
import ProjectView from "./views/project-view/project-view";
import Sidebar from "./views/sidebar/sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="content">
        <Navbar toggleSidebar={toggleSidebar} />
        <ProjectView />
      </div>
    </div>
  );
}

export default App;
