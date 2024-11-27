import { useState } from "react";
import Header from "../../../header/header";
import Sidebar from "../../../sidebar/Sidebar";
import UserDetails from "./user_details";

export default function Details() {
  const [activeSection, setActiveSection] = useState<string>("Users");

  const [ activeDetailSection, setActiveDetailsSection] = useState<string>("General Details");
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
          <UserDetails
             setActiveDetailsSection={setActiveDetailsSection}
             activeDetailSection={activeDetailSection}
          />
      </div>
    </div>
  );
}
