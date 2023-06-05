import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList"
import TransactionHistory from "./transactionHistory/TransactionHistory";

import user from "./profile/user"
import data from "./statistics/data"
import friends from "./friendList/friends"
import transactions from "./transactionHistory/transactions"

import css from "./App.module.css"

export const App = () => {
  return (
    <div className={css.app__container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
