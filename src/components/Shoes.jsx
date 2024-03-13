import { useNavigate } from "react-router-dom";

export default function Shoes({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="col-md-4"
        onClick={() => {
          navigate(`/detail/${item.id}`);
        }}
      >
        <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="80%" />
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </>
  );
}
