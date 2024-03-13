import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div className="container routePage">
      <h4>회사 정보임</h4>

      <div className="btn-box">
        <Link to={"/about/member"} className="link-btn">
          member
        </Link>
        <Link to={"/about/location"} className="link-btn">
          location
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
