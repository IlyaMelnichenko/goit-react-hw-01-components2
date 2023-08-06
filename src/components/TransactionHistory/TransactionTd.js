import { Td } from "./Transaction.styled"

export const TransactionTd = ({item})=>{
    return (
        <>
        <Td>{item.type}</Td>
        <Td>{item.amount}</Td>
        <Td>{item.currency}</Td>
        </>
    )
}