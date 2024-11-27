import React from "react";
import Info from "./info";

interface DetailsContentrops {
  activeDetailSection: string;
}

const DetailsContent: React.FC<DetailsContentrops> = ({
  activeDetailSection,
}) => {
  const renderContent = () => {
    switch (activeDetailSection) {
      case "General Details":
        return <Info />;
      case "Documents":
        return <div> Documents</div>;
      case "Bank Details":
        return <div> Bank Details.</div>;
      case "Loans":
        return <div>Loans</div>;
      case "Savings":
        return <div>Savings</div>;
      case "App and System":
        return <div> App and System</div>;
      default:
        return <div>Select a section to view its content.</div>;
    }
  };

  return <div className="">{renderContent()}</div>;
};

export default DetailsContent;
