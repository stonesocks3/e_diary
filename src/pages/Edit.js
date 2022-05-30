import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  const mode = searchParams.get("mode");
  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <p> Edit페이지 입니다..</p>
      <button onClick={() => setSearchParams({ who: "tarae" })}>
        QS바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 이동
      </button>
      <button
        onClick = {() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};
export default Edit;
