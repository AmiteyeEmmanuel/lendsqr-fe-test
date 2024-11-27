import { cardData } from "../../../../data/card_data";
import  styles from "../../../../styles/components/content/userList.module.scss";
import UserList from "./user_list";


function User() {
  return (
    <div className={`${styles["user-container"]}`}>
      <div className={`${styles["user-content"]}`}>
        <h2> Users </h2>
        <div className={`${styles["user-card"]}`}>
          {cardData.map((card) => (
            <div className={`${styles["user-card-content"]}`}>
              <img
                className=""
                src={card.image}
                alt={card.name}
              />
              <p className="">{card.name}</p>
              <h2 className="">
                {card.total}
              </h2>
            </div>
          ))}
        </div>

        <div>
            <UserList />
        </div>
      </div>
    </div>
  );
}

export default User;
