import styled from 'styled-components';


export const Item = styled.li`
    display: flex;
    flex-direction: column;
    border:1px solid;
    padding: 5px 10px;
    background-color:${props=>retunrColor(props.percentage)
    };
    
`;

export const List = styled.ul`
    display: flex;
    
    
    
`;

function retunrColor(percentage) {
   if (percentage <= 20) {
        return 'tomato';
    } else if (percentage <= 30) {
        return 'yellow'
    } else if (percentage <= 40) {
        return 'blue'
    } else { return '#30d5c8' }

}