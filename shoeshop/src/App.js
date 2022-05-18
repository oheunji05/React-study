import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

import data from './data.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {

  let [shoes, setShoes] = useState(data);

  let navigate = useNavigate();
  
  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/detail'>detail</Link></Nav.Link> */}
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <br/>

      <Routes>

        <Route path='/' element={
          <div>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map(function(a,i){
                    return(
                      <Card shoes={shoes} i={i}></Card>
                    )
                  })
                }
              </div>
            </div>

            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
              })
            }}>더보기</button>

          </div>
          }>

         
        </Route>

        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>}></Route>

        <Route path='/cart' element={<Cart></Cart>}></Route>

        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>멤버페이지</div>}></Route>
          <Route path='location' element={<div>위치페이지</div>}></Route>
        </Route>

        <Route path='/event' element={<EventPage></EventPage>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path='*' element={<div>없는페이지입니다</div>}></Route>
      </Routes>

      

    </div>
  );
}

function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
} 

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return(
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width='100%'></img>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content} & {props.shoes[props.i].price}원</p>
    </div>
  )
}

export default App;
