import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import questions from "../data/questions";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Question() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const question = questions.find((q) => q.id === parseInt(id));

  const handleSolve = () => {
    const output = question.solve();
    setResult(output);
  };

  return (
    <div className="container">
      <button className="btn-secondary" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h1>{question?.question}</h1>

      <div className="code-container">
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          customStyle={{
            margin: 0,
            padding: "20px",
          }}
        >
          {question.code}
        </SyntaxHighlighter>
      </div>

      <button className="btn-primary" onClick={handleSolve}>
        Run Code
      </button>

      {result !== null && (
        <div className="output">
          <h3>Output:</h3>
          {JSON.stringify(result, null, 2)}
        </div>
      )}
    </div>
  );
}

export default Question;
