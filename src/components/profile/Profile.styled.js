import styled from 'styled-components';

export const Container = styled.div`
    width:400px;
    margin:auto;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding-bottom:20px;
    `;

export const Image = styled.img`
    width:100px;
    border-radius: 50%;
    
`
export const Description = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin: 0;

`
export const List = styled.ul`
    display:flex;
    

`
export const Item = styled.li`
    display:flex;
    flex-direction: column;
    border: 1px solid;
    padding: 5px 10px;
    width:90px;
    text-align:center;
`