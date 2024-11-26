import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../../styles/components/content/userList.module.scss";
import { Assets } from "../../../../assets";
import { User } from "../../../interface/user_interface";
import axios from "axios";
import ReactPaginate from "react-paginate";
import FilterModal from "../../../../utils/filter.utils";
import MoreModal from "../../../../utils/more.utils";
import { hostname } from "../../../../config/config";

const UserList = () => {
  const { FilterButton, MoreIcon } = Assets;
  const navigate = useNavigate();

  // State management
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  const usersPerPage = 9;

  // Modal toggle functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${hostname}/v3/6b02d772-c8d2-4838-b19a-99bb6d98b659`
        );
        if (Array.isArray(response.data)) {
          setUsers(response.data);
          setFilteredUsers(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  // Filter logic
  const handleFilters = (filters: Record<string, string>) => {
    const filtered = users.filter((user) =>
      Object.keys(filters).every((key) => {
        const filterValue = filters[key];
        if (!filterValue) return true;
        const userValue = user[key as keyof User];
        return String(userValue)
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      })
    );
    setFilteredUsers(filtered);
  };

  // Navigation and Modal Handlers
  const handleViewDetails = (id: number) => {
    navigate(`/details/${id}`); // Navigate using the correct user ID
  };

  const handleBlacklistUser = (id: number) => {
    // Handle blacklist logic
    console.log(`Blacklist user: ${id}`);
  };

  const handleActivateUser = (id: number) => {
    // Handle activate logic
    console.log(`Activate user: ${id}`);
  };

  return (
    <section className={styles.userListSection}>
      <div className={`${styles["table-container"]}`}>
        <div className={`${styles["table-content"]}`}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                {[
                  { title: "Organization", key: "organization" },
                  { title: "Username", key: "username" },
                  { title: "Email", key: "email" },
                  { title: "Phone Number", key: "phone" },
                  { title: "Date Joined", key: "date" },
                  { title: "Status", key: "status" },
                ].map(({ title, key }) => (
                  <th key={key} className={styles.tableHeader}>
                    <div className={styles.headerContent}>
                      <span>{title}</span>
                      <button
                        onClick={isModalOpen ? closeModal : openModal}
                        className={styles.headerButton}
                      >
                        <img src={FilterButton} alt={`${title} actions`} />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className={styles.tableBody}>
              {currentUsers.map((user) => (
                <tr key={user.id} className={styles.tableRow}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.date}</td>
                  <td>
                    <span
                      className={`${styles.status} ${
                        styles[user.status.toLowerCase()]
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className={styles.actionCell}>
                    <img
                      src={MoreIcon}
                      alt="More actions"
                      onClick={() => setActiveUserId(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination and Filter */}
      <div className={styles.paginationContainer}>
        <div className={styles.paginationLeft}>
          <span>Showing</span>
          <span>{currentUsers.length}</span>
          <span>out of {filteredUsers.length}</span>
        </div>
        <div className={styles.paginationRight}>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageChange}
            pageRangeDisplayed={2}
            pageCount={totalPages}
            previousLabel="<"
            containerClassName={styles.pagination}
            activeClassName={styles.activePage}
            disabledClassName={styles.disabledPage}
            previousClassName={styles.previousButton}
            nextClassName={styles.nextButton}
            breakClassName={styles.breakButton}
          />
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        onApplyFilters={handleFilters}
      />

      {/* More Modal */}
      {activeUserId !== null && (
        <MoreModal
          isOpen={true}
          closeModal={() => setActiveUserId(null)}
          onViewDetails={() => handleViewDetails(activeUserId)}
          onBlacklistUser={() => handleBlacklistUser(activeUserId)}
          onActivateUser={() => handleActivateUser(activeUserId)}
        />
      )}
    </section>
  );
};

export default UserList;
