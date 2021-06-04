import React from "react";
import PropTypes from "prop-types";
import Profile from "./components/Profile/Profile";
import user from "./user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

App.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,
      stats: PropTypes.objectOf(PropTypes.number),
    })
  ),
  statisticalData: PropTypes.arrayOf(),
};

export default App;
