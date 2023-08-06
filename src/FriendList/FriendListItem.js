import { Span } from "./FirendList.styled"

export const FriendListItem = ({avatar,name,status})=>{
    
    return <>
        <Span status = {status} className="status"></Span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </>
}