import React from "react";

const FormTitle = ({ title, setTitle }) => {
  return (
    <div>
      <h1
        style={{
          marginTop: "10px",
          backgroundColor: "skyblue",
          color: "black",
          padding: "10px 20px",
          borderRadius: "20px ",
          border: "none",
        }}
      >
        {title}
      </h1>
      <button
        style={{
          backgroundColor: "skyblue",
          color: "black",
          padding: "10px 20px",
          borderRadius: "20px ",
          border: "none",
          marginBottom: "10px",
        }}
        onClick={() => setTitle(prompt("Enter Your Title", title))}
      >
        Edit Title
      </button>
    </div>
  );
};

export default FormTitle;
