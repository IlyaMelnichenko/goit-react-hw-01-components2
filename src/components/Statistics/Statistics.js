import { Statisticitem } from 'components/Statistics/StatisticItem';
import { Container } from 'components/profile/Profile.styled';
import { Item, List } from './Statistic.styled';
export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <Container>
        {title && <h2>{title}</h2>}
        <List>
          {stats.map(stat => (
            <Item key={stat.id} percentage={stat.percentage}>
              <Statisticitem stats={stat} />
            </Item>
          ))}
        </List>
      </Container>
    </section>
  );
};
