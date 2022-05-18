import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { changeName, changeAge } from './../store.js';

function Cart(){

    let state = useSelector((state)=>{return state})

    let dispatch = useDispatch()

    return(
        <div>
            <h3>{state.user.name} {state.user.age}의 장바구니</h3>
            <br/>
            <button onClick={()=>{dispatch(changeAge())}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i)=>{
                            return(
                                <tr>
                                <td>{i+1}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td><button onClick={()=>{dispatch(changeName())}}>+</button></td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart