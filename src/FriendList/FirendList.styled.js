import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
`;


export const Span = styled.span`
border-radius: 50%;
background-color: ${props => {
    switch (props.status) {
        case 'false':
            return 'red';
        case 'true':
            return 'green';
    }
}};
width:20px;
height: 20px;

`