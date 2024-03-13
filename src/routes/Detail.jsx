import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

export default function Detail({ shoes }) {
  let { id } = useParams();

  //url 파라미터와 shoes[i].id가 일치한 거 찾아야 함
  const shoesFind = shoes.find((item) => item.id == id);
  const shoesId = shoesFind.id;

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  const [input, setInput] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(input) == true) {
      alert("숫자만 입력하세용");
    }
  }, [input]);

  let [tab, setTab] = useState(0);

  return (
    <div className="container">
      {alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}

      <div className="row">
        <div className="col-md-6">
          <img src={shoes[shoesId].img} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes[shoesId].title}</h4>
          <p>{shoes[shoesId].content}</p>
          <p>{shoes[shoesId].price}</p>

          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼 2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab}></TabContent>
    </div>
  );
}

function TabContent({ tab }) {
  // if (tab == 0) {
  //   return <div>내용 1</div>;
  // } else if (tab == 1) {
  //   return <div>내용 2</div>;
  // } else if (tab == 2) {
  //   return <div>내용 3</div>;
  // }
  return [<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab];
}
