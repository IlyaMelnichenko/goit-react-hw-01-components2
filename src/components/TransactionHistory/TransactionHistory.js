import { Table, Th } from "./Transaction.styled"
import { TransactionTd } from "./TransactionTd"
import { Container } from 'components/profile/Profile.styled'
export const TransactionHistory = ({items})=>{
  return (
    <Container>
      <Table className="transaction-history">
    <thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </thead>
    <tbody>
    {items.map(item =>
    <tr key={item.id}>
        <TransactionTd item={item}/>
    </tr>
       
       
    )}
    </tbody>
    </Table>
      </Container>)
    
  
  
}