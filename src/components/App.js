import { Profile } from "./profile/Profile";
import profileUsers from '../user.json';
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { GlobalStyle } from "./Globalstyle";



export const App = () => {
  return (<div>
    <Profile items={profileUsers} />
    <Statistics tittle = "Upload stats" stats={data} />
    <FriendList friends= {friends}/>
    <TransactionHistory items = {transactions}/>
    <GlobalStyle/>
  </div>)
          
  
};
