import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);

  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState(''); 

  function 제목바꾸기(){
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  function 정렬(){
    let newArray2 = [...글제목];
    newArray2[0] = '강남 우동 맛집';
    newArray2[1] = '남자 코트 추천';
    newArray2[2] = '파이썬 독학';
    글제목변경(newArray2);
  }

  function 글추가하기(){
    let newArray3 = [...글제목];
    newArray3.unshift(입력값);
    글제목변경(newArray3);
  }

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>

      <button onClick={제목바꾸기}>제목바꾸기</button>

      <button onClick={정렬}>글자순으로 정렬</button>

      {
        글제목.map(function(글,i){
          return(
            <div>
              <h3 onClick={()=>{누른제목변경(i)}}>{글} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className='publish'>
        <input onChange={(e)=>{입력값변경(e.target.value)}}></input>
        <button onClick={글추가하기}>저장</button>
      </div>
     

      {/* <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button> */}

      <button onClick={()=>{modal변경(!modal)}}>modal창 띄우기</button>

      {
        modal === true ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
