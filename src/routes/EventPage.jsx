import { Link, Outlet } from "react-router-dom";
import "./route.css";

export default function EventPage() {
  return (
    <div className="container routePage">
      <h4>오늘의 이벤트</h4>

      <div className="btn-box">
        <Link to={"/event/one"} className="link-btn">
          one
        </Link>
        <Link to={"/event/two"} className="link-btn">
          two
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
