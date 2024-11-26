import { Link, useParams } from "react-router-dom";
import { Assets } from "../../../../../assets";
import styles from "../../../../../styles/components/content/userDetail.module.scss";
import axios from "axios";
import { User } from "../../../../interface/user_interface";
import { useEffect, useState } from "react";
import { hostname } from "../../../../../config/config";

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { ArrowBack, StarOutline, StarSolid, UserAvatar } = Assets;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${hostname}/v3/6b02d772-c8d2-4838-b19a-99bb6d98b659`
        );
        if (Array.isArray(response.data)) {
          const foundUser = response.data.find(
            (u: User) => u.id === numericId 
          );
          setUser(foundUser || null);
        } else {
          setError("Invalid data format received from API.");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [numericId]); 

  if (loading) {
    return <div>Loading user details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <section className={`${styles["details-container"]}`}>
      <div className={`${styles["details-content"]}`}>
        <button className={`${styles["details-button"]}`}>
          <Link to="/dashboard" className={styles.link}>
            <img src={ArrowBack} alt="arrow_back" />
            <p>Back to Users</p>
          </Link>
        </button>

        <div className={`${styles["details-head"]}`}>
          <div className={styles.left}>
            <p>User Details</p>
          </div>

          <div className={styles.right}>
            <button className={styles.blacklist}>Blacklist User</button>
            <button className={styles.activate}>Activate User</button>
          </div>
        </div>

        <div className={`${styles["details-body"]}`}>
          <div className={`${styles["details-info"]}`}>
            <div className={`${styles["head-info-left"]}`}>
              <img src={UserAvatar} alt="avatar" />
              <div className={`${styles["info-left"]}`}>
                <h2>{user.username}</h2>
                <p>{user.email}</p>
              </div>
            </div>

            <div className={`${styles["head-info-middle"]}`}>
              <div className={`${styles["info-middle"]}`}>
                <p>User’s Tier</p>
                <div>
                  <img src={StarSolid} alt="starSolid" />
                  <img src={StarOutline} alt="starOutline" />
                  <img src={StarOutline} alt="starOutline" />
                </div>
              </div>
            </div>

            <div className={`${styles["head-info-right"]}`}>
              <div className={`${styles["info-middle"]}`}>
                <h2>₦200,000.00</h2>
                <p>9912345678 / Providus Bank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
