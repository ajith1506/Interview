import React, { useState } from "react";
import FormTitle from "./components/FormTitle";
import Question from "./components/Question";

const App = () => {
  const [formTitle, setFormTitle] = useState("Untitled Form");
  const [questions, setQuestions] = useState([
    {
      questionId: 1,
      type: "MCQ",
      questionText: "",
      options: [
        { optionId: 1, optionText: "" },
        { optionId: 2, optionText: "" },
      ],
      continueTo: "",
    },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionId: questions.length + 1,
        type: "MCQ",
        questionText: "",
        options: [
          { optionId: 1, optionText: "" },
          { optionId: 2, optionText: "" },
        ],
        continueTo: "",
      },
    ]);
  };

  const updateQuestion = (index, updatedQuestion) => {
    const newQuestions = [...questions];
    newQuestions[index] = updatedQuestion;
    setQuestions(newQuestions);
  };

  const handleDeleteForm = () => {
    if (window.confirm("Are you sure you want to delete this form?")) {
      setFormTitle("Untitled Form");
      setQuestions([
        {
          questionId: 1,
          type: "MCQ",
          questionText: "",
          options: [
            { optionId: 1, optionText: "" },
            { optionId: 2, optionText: "" },
          ],
          continueTo: "",
        },
      ]);
    }
  };

  const handleSubmit = () => {
    const questionsWithContinueTo = questions.map((q, index) => ({
      ...q,
      continueTo:
        index < questions.length - 1
          ? `Section ${questions[index].questionId}`
          : "End",
    }));

    const validQuestions = questionsWithContinueTo.filter(
      (q) =>
        q.questionText &&
        (q.type === "Text Area" ||
          (q.options.length >= 2 && q.options.every((opt) => opt.optionText)))
    );

    if (validQuestions.length >= 2) {
      const output = {
        formTitle,
        questions: questionsWithContinueTo.map((q) => ({
          questionId: q.questionId,
          type: q.type,
          questionText: q.questionText,
          options: q.options.map((o) => ({
            optionId: o.optionId,
            optionText: o.optionText,
          })),
          continueTo: q.continueTo,
        })),
      };
      console.log(JSON.stringify(output, null, 2));
      alert("Form submitted successfully!");
    } else {
      alert("Please fill at least 2 questions correctly before submission.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "violet",
        padding: "20px",
        borderRadius: "40px 20px",
        gap: "20px",
      }}
    >
      <FormTitle title={formTitle} setTitle={setFormTitle} />

      {questions.map((question, index) => (
        <Question
          key={question.questionId}
          question={question}
          updateQuestion={(updatedQuestion) =>
            updateQuestion(index, updatedQuestion)
          }
        />
      ))}

      <button
        onClick={addQuestion}
        style={{
          borderRadius: "20px ",
          display: "block",
          margin: "20px 0",
          padding: "10px 20px",
          backgroundColor: "lightskyblue",
        }}
      >
        Add Question
      </button>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px ",
          border: "none",
        }}
      >
        Save Form
      </button>
      <button
        onClick={handleDeleteForm}
        style={{
          borderRadius: "20px ",
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          marginLeft: "10px",
          border: "none",
        }}
      >
        Delete Form
      </button>
    </div>
  );
};

export default App;
