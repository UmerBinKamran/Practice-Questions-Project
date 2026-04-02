import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>JavaScript Practice Questions</h1>

      {questions.map((q) => (
        <div key={q.id} className="card">
          <p>{q.question}</p>

          <button
            className="btn-primary"
            onClick={() => navigate(`/question/${q.id}`)}
          >
            Solve
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
