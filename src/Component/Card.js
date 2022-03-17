import React from 'react'
import { Card } from 'react-bootstrap'

export default function () {
  return (
    <>
        <Card className='w-[100%] h-initial' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body className=''>
      <Card.Title className='d-flex justify-content-between' style={{fontWeight:'bold'}}>Fix Navigation Bug<i className='fa fa-pen' style={{}}></i>
      </Card.Title>
      <Card.Text className='d-flex justify-content-between'>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
        <div className='icon d-flex flex-col my-2'>
        <i className='fa fa-angle-up my-2'></i>
        <i className='fa fa-angle-down my-2'></i>
      </div> 
      </Card.Text>
    </Card.Body>
  </Card>
    </>
  )
}
