import React from 'react'
import { Container,Card } from 'react-bootstrap'
import Cards from './Card'

export default function Board() {
    const lanes = [
        { id: 1, title: 'To Do' },
        { id: 2, title: 'In Progress' },
        { id: 3, title: 'Review' },
        { id: 4, title: 'Done' },
      ];
  return (
    <>
        <Container fluid className='bg-dark flex flex-row justify-between w-[100vw] h-[100vh]' style={{padding:'20px'}}>
      {/* <Card border="danger" className='rounded-full' style={{ width: '100%' ,borderRadius:'20px',border:'5px solid'}}>

    <Card.Header className='text-center font-bold text-[1.5rem] justify-between'style={{display:'flex',flexDirection:'row',}}>To Do
    <i className='fa fa-add align-items-center justify-center flex cursor-pointer hover:text-green-600'></i>
    </Card.Header>
    <Card.Body style={{overflowY:'scroll'}}>

    
    </Card.Body>
  </Card> */}
    {/* <Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/><Cards/>   */}
</Container>
    </>
  )
}
