import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice";
import { addCount } from "../store";

export default function Cart() {
  let user = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);

  let dispatch = useDispatch(); //store.js로 요청을 보내주는 함수

  return (
    <>
      <div>
        <h3>
          {user.name} {user.age}의 장바구니
        </h3>
        <button
          onClick={() => {
            dispatch(increase(20));
          }}
        >
          버튼
        </button>
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
            {cart.map((item, num) => (
              <tr key={item.id}>
                <td>{num + 1}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      // console.log(item.id);
                      dispatch(addCount(item.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
