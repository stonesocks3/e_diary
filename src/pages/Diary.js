import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p> Diary페이지 입니다..</p>
    </div>
  );
};
export default Diary;
