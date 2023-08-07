import { Span } from "./FirendList.styled"

export const FriendListItem = ({avatar,name,status})=>{
    
    return (<>
        <Span status={status}></Span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </>);
}