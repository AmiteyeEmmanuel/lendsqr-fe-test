import { useState } from "react";
import Header from "../../../header/header";
import Sidebar from "../../../sidebar/Sidebar";
import UserDetails from "./user_details";

export default function Details() {
  const [activeSection, setActiveSection] = useState<string>("Users");
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
          <UserDetails />
      </div>
    </div>
  );
}
