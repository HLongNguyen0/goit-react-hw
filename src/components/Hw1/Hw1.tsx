import "./Hw1.styled";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import Friends from "./Friends/Friends";
import Transactions from "./Transactions/Transactions";

import profileData from "../../data/user.json";
import statisticsData from "../../data/statistics.json";
import friendsData from "../../data/friends.json";
import transactionsData from "../../data/transactions.json";

export default function Hw1() {
  return (
    <>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      ></Profile>
      <Statistics title="Upload stats" data={statisticsData}></Statistics>
      <Friends friends={friendsData}></Friends>
      <Transactions transactions={transactionsData}></Transactions>
    </>
  );
}
