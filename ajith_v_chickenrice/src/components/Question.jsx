import React from "react";
import McqOptions from "./McqOptions";

const Question = ({ question, updateQuestion }) => {
  const handleQuestionTypeChange = (type) => {
    const updatedQuestion = {
      ...question,
      type,
      options:
        type === "MCQ"
          ? [
              { optionId: 1, optionText: "" },
              { optionId: 2, optionText: "" },
            ]
          : [],
    };
    updateQuestion(updatedQuestion);
  };

  const handleQuestionTextChange = (text) => {
    const updatedQuestion = { ...question, questionText: text };
    updateQuestion(updatedQuestion);
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <input
        style={{
          padding: "10px 5px",
          borderRadius: "5px",
          border: "none ",
          width: "250px",
        }}
        type="text"
        placeholder="Enter Your Question"
        value={question.questionText}
        onChange={(e) => handleQuestionTextChange(e.target.value)}
      />
      <select
        value={question.type}
        onChange={(e) => handleQuestionTypeChange(e.target.value)}
        style={{
          marginLeft: "10px",
          padding: "10px 5px",
          borderRadius: "5px",
          border: "none",
        }}
      >
        <option value="MCQ">MCQ</option>
        <option value="Text Area">Text Area</option>
      </select>

      {question.type === "MCQ" && (
        <McqOptions
          options={question.options}
          updateOptions={(newOptions) =>
            updateQuestion({ ...question, options: newOptions })
          }
        />
      )}

      {question.type === "Text Area" && (
        <textarea
          placeholder="Type your answer here..."
          maxLength={2000}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px 5px",
            borderRadius: "5px",
            border: "none",
          }}
        ></textarea>
      )}
    </div>
  );
};

export default Question;
