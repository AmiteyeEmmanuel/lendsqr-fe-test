import { useEffect, useState } from "react";
import styles from "../../../../../styles/components/content/userDetail.module.scss";
import axios from "axios";
import { hostname } from "../../../../../config/config";
import { User } from "../../../../interface/user_interface";
import { useParams } from "react-router-dom";

export default function Info() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `${hostname}/v3/6b02d772-c8d2-4838-b19a-99bb6d98b659`
        );
        if (Array.isArray(response.data)) {
          const foundUser = response.data.find((u: User) => u.id === numericId);
          setUser(foundUser || null);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserDetails();
  }, [numericId]);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className={`${styles["info-container"]}`}>
      <div>
        <div className={`${styles["info-header"]}`}>
          <h2>Personal Information</h2>
        </div>

        {/* // personalInformation Info  */}
        <div className={`${styles["personal-info-content"]}`}>
          {[
            {
              title: "Full Name",
              value: user.details.personalInformation.fullName,
            },
            {
              title: "Phone Number",
              value: user.details.personalInformation.phoneNumber,
            },
            {
              title: "Email Address",
              value: user.details.personalInformation.email,
            },
            { title: "BVN", value: user.details.personalInformation.bvn },
            { title: "Gender", value: user.details.personalInformation.gender },
            {
              title: "Marital Status",
              value: user.details.personalInformation.maritalStatus,
            },
            {
              title: "Children",
              value: user.details.personalInformation.children,
            },
            {
              title: "Type Of Residence",
              value: user.details.personalInformation.typeOfResidence,
            },
          ].map(({ title, value }, index) => (
            <div key={index} className={styles["info-item"]}>
              <span className={styles["info-title"]}>{title}</span>
              <span className={styles["info-value"]}>{value || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={`${styles["info-header"]}`}>
          <h2>Education and Employment</h2>
        </div>

        <div className={`${styles["personal-info-content"]}`}>
          {[
            {
              title: "level of education",
              value: user.details.educationAndEmployment.levelOfEducation,
            },
            {
              title: "Employment status",
              value: user.details.educationAndEmployment.employmentStatus,
            },
            {
              title: "Sector of employment",
              value: user.details.educationAndEmployment.sectorOfEmployment,
            },
            {
              title: "Duration of employment",
              value: user.details.educationAndEmployment.durationOfEmployment,
            },
            {
              title: "office email",
              value: user.details.educationAndEmployment.officialEmail,
            },
            {
              title: "Monthly income",
              value: user.details.educationAndEmployment.monthlyIncome,
            },
            {
              title: "loan repayment",
              value: user.details.educationAndEmployment.loanRepayment,
            },
          ].map(({ title, value }, index) => (
            <div key={index} className={styles["info-item"]}>
              <span className={styles["info-title"]}>{title}</span>
              <span className={styles["info-value"]}>{value || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={`${styles["info-header"]}`}>
          <h2>Socials</h2>
        </div>

        <div className={`${styles["personal-info-content"]}`}>
          {[
            {
              title: "Twitter",
              value: user.details.social.twitter,
            },
            {
              title: "Facebook",
              value: user.details.social.facebook,
            },
            {
              title: "Instagram",
              value: user.details.social.instagram,
            },
          ].map(({ title, value }, index) => (
            <div key={index} className={styles["info-item"]}>
              <span className={styles["info-title"]}>{title}</span>
              <span className={styles["info-value"]}>{value || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={`${styles["info-header"]}`}>
          <h2>Guarantor</h2>
        </div>

        <div className={`${styles["personal-info-content"]}`}>
          {[
            {
              title: "full Name",
              value: user.details.guarantor.fullName,
            },
            {
              title: "Phone Number",
              value: user.details.guarantor.phoneNumber,
            },
            {
              title: "Email Address",
              value: user.details.guarantor.email,
            },
            {
              title: "Relationship",
              value: user.details.guarantor.relationship,
            },
          ].map(({ title, value }, index) => (
            <div key={index} className={styles["info-item"]}>
              <span className={styles["info-title"]}>{title}</span>
              <span className={styles["info-value"]}>{value || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
      <div className={`${styles["info-header"]}`} />
        <div className={`${styles["personal-info-content"]}`}>
          {[
            {
              title: "full Name",
              value: user.details.guarantor.fullName,
            },
            {
              title: "Phone Number",
              value: user.details.guarantor.phoneNumber,
            },
            {
              title: "Email Address",
              value: user.details.guarantor.email,
            },
            {
              title: "Relationship",
              value: user.details.guarantor.relationship,
            },
          ].map(({ title, value }, index) => (
            <div key={index} className={styles["info-item"]}>
              <span className={styles["info-title"]}>{title}</span>
              <span className={styles["info-value"]}>{value || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
