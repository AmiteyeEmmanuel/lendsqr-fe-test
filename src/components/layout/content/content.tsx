import React from "react";
import User from "./pages/user";

interface ContentAreaProps {
  activeSection: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <div>Welcome to the Dashboard!</div>;
      case "Users":
        return <User/>;
      case "Guarantors":
        return <div>Welcome to the Guarantors section.</div>;
      case "Loans":
        return <div>Manage your Loans here.</div>;
      default:
        return <div>Select a section to view its content.</div>;
    }
  };

  return <div className="content-area">{renderContent()}</div>;
};

export default ContentArea;
