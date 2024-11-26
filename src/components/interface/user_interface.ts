export interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phone: string;
    date: string;
    status: string;
    details: {
      personalInformation: {
        fullName: string;
        phoneNumber: string;
        email: string;
        bvn: number;
        gender: string;
        maritalStatus: string;
        children: number | string; 
        typeOfResidence: string;
      };
      educationAndEmployment: {
        levelOfEducation: string;
        employmentStatus: string;
        sectorOfEmployment: string;
        durationOfEmployment: string;
        officialEmail: string;
        monthlyIncome: string;
        loanRepayment: number;
      };
      social: {
        twitter: string;
        facebook: string;
        instagram: string;
      };
      guarantor: {
        fullName: string;
        phoneNumber: string;
        email: string;
        relationship: string;
      };
    };
  }
  