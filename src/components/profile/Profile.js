import {Container,Image,Description,List,Item } from './Profile.styled'


export const Profile = ({ items: { stats, location, avatar, tag, username } }) => {
    
    return (<Container className="profile">
    <Description className="description">
      <Image
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <h3 className="name">{username}</h3>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </Description>
  
    <List className="stats">
      <Item >
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </Item>
      <Item >
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </Item>
      <Item >
        <span className="label">Likes</span>
        <span name="quantity">{stats.likes}</span>
      </Item>
    </List>
  </Container>);
}