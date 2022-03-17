import './App.css';
import React, { useState } from 'react'
import Boards from './Component/Board';
import Cards from './Component/Card';
import PostData from './assets/data.json'

// import tailwindcss from 'tailwindcss';
import {Nav,Navbar,Alert, Container,InputGroup,DropdownButton,Dropdown,Carousel,Offcanvas,Card,NavDropdown, Form,FormControl,Button} from 'react-bootstrap';
// import Header from './Header';
const dragStart = e => {
  const target = e.target;

  e.dataTransfer.setData ('card_id' ,target.id);

  setTimeout(() => {
      target.style.display = 'none';
  }, 0);
}
const dragOver = e => {
  e.stopPropagation();
}

const drop = e => {
  e.preventDefault();
  const card_id = e.dataTransfer.getData('card_id');
  const card = document.getElementById(card_id);
  card.style.display = 'block';

  e.target.appendChild(card);
}
const dragOvers = e => {
  e.preventDefault();
}
function App() {
  const [show, setShow] = React.useState(true);
  function handle(){
    alert("hello");
  }
  const [number, setNumber] = useState(0);
  // function myFunction() {
  //   alert(number);
  // }
  
  const myFunction = () => {
    setNumber(number+1);
      alert(number);
    };
  const lanes = [
    { id: 1, title: 'To Do' ,color:'danger'},
    { id: 2, title: 'In Progress' ,color:'warning'},
    { id: 3, title: 'Review' ,color:'primary'},
    { id: 4, title: 'Done' ,color:'success'},
  ];
  return (
    <div className="App">
    {/* <Header/> */}
      {/* <div className='container-fluid fixed header text-center bg-violet-700 text-white text-[2rem] font-bold flex justify-center z-[-1]'>
      <h1 className='text-center flex align-items-center justify-center'>Project Management Board</h1>
      </div> */}
      {/* <Boards lanes={lanes} dataSource={'../../assets/data.json'}>
      {lanes.map(lane => (
          <Cards
            key={lane.id}
            laneId={lane.id}
            // title={lane.title}
            // loading={loading}
            // error={error}
            // onDragStart={this.onDragStart}
            // onDragOver={this.onDragOver}
            // onDrop={this.onDrop}
            // tickets={this.state.tickets.filter(
            //   ticket => ticket.lane === lane.id,
            // )}
          />
        ))}
      </Boards> */}
      {lanes.map((postDetails,index) => {
        return <div key={postDetails.id}>
        <Container fluid className='bg-dark flex flex-row justify-between w-[100vw] h-[100vh] container-body'>
        <Card border={postDetails.color} className='rounded-full whole' style={{ width: '100%' ,borderRadius:'20px',border:'5px solid',}}>

<Card.Header className='text-center font-bold text-[1.5rem] justify-between'style={{display:'flex',flexDirection:'row',}}>{postDetails.title}
<i className='fa fa-add align-items-center justify-center flex cursor-pointer hover:text-green-600'></i>
</Card.Header>
<Card.Body style={{overflowY:'scroll'}} onDrop={drop}
    onDragOver={dragOvers} id="board_1">

{PostData.map((postline,index)=> {
  return <div key={postline.id} onClick={myFunction} draggable="true" onDragStart={dragStart}
    onDragOver={dragOver} id="card_1">
  <Card className='w-[100%] h-initial' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body className=''>
      <Card.Title className='d-flex justify-content-between' style={{fontWeight:'bold'}}>{postline.title}<i className='fa fa-pen' style={{}}></i>
      </Card.Title>
      <Card.Text className='d-flex justify-content-between'>{postline.body}
        <div className='icon d-flex flex-col my-2'>
        <i className='fa fa-angle-up my-2'></i>
        <i className='fa fa-angle-down my-2'></i>
      </div> 
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
})}  

</Card.Body>
</Card>
</Container>
</div>
      })}
      <script>
      var a = getElementById('main');
      a.addEventListener('click',myFunction);
      </script>
    </div>
  );
}

export default App;
