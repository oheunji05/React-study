import { isEditable } from "@testing-library/user-event/dist/utils";
import React,{useState} from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Nav } from 'react-bootstrap';

function Detail(props){

    let [alert, setalert] = useState(true); 

    let [탭, 탭변경] = useState(0)

    useEffect(()=>{
        
        let time = setTimeout(()=>{setalert(false)},2000)

        return()=>{
            clearTimeout(time)
        }
    },[alert])

    let {id} = useParams();

    return(
        <div>
            <div className="container">

                {
                    alert === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
                }

                <div className="row">
                    <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                    <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent 탭={탭}></TabContent>

        </div>
        
    )
}

function TabContent(props){
    if (props.탭 == 0){
        return <div>내용0</div>
    }
    else if (props.탭 == 1){
        return <div>내용1</div>
    }
    else if (props.탭 == 2){
        return <div>내용2</div>
    }
}


export default Detail