import React from "react";
import PropTypes from "prop-types";
import styles from "./friendListItem.module.css";

// isOnline

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={styles.status}
      style={{ backgroundColor: isOnline ? "#00ff00" : "#FF0000" }}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
