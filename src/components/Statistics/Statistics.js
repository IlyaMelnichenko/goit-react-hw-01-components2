import { Statisticitem } from "components/Statistics/StatisticItem"
import { Container } from 'components/profile/Profile.styled'
import { Item, List } from "./Statistic.styled";
export const Statistics = ({stats,tittle})=>{
    
    
  return (<section className="statistics">
        <Container> <h2 className="title">{tittle}</h2>
    <List className="stat-list">
     {stats.map(stat=>(
         <Item className="item" key = {stat.id}>
            <Statisticitem stats = {stat}/>
         </Item>
     ))}
    </List></Container>
   
  </section>);
};