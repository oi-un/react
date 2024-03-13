import "./App.css";

import bg from "./images/bg.png";
import { useRef, useState } from "react";
import data from "./data.js";
import Shoes from "./components/Shoes.jsx";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.jsx";
import About from "./routes/About.jsx";
import Header from "./components/Header.jsx";
import EventPage from "./routes/EventPage.jsx";
import axios from "axios";

function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();

  let click = useRef(0);

  return (
    <>
      <Header navigate={navigate} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>

              <div className="container">
                <div className="row">
                  {shoes.map((item) => {
                    return <Shoes item={item} key={item.id} />;
                  })}
                </div>
              </div>

              <button
                onClick={() => {
                  click.current++;
                  console.log(click);

                  if (click.current == 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        const copy = [...shoes, ...result.data];

                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("서버2번 요청 실패");
                      });
                  } else if (click.current == 2) {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((result) => {
                        const copy = [...shoes, ...result.data];

                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("서버3번 요청 실패");
                      });
                  } else {
                    alert("상품 더 없어요");
                  }
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>로케이션임</div>} />
        </Route>

        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>없는 페이지입니당</div>} />
      </Routes>
    </>
  );
}

export default App;
