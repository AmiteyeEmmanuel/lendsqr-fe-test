import { useState } from "react";
import ContentArea from "./layout/content/content";
import Header from "./layout/header/header";
import Sidebar from "./layout/sidebar/Sidebar";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<string>("Users");
  return (
    <>
      <div className="app">
        <Header />
        <div className="app-container">
          <Sidebar
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          />
          <ContentArea activeSection={activeSection} />
        </div>
      </div>
    </>
  );
}
