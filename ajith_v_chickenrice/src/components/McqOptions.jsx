import React from "react";

const McqOptions = ({ options, updateOptions }) => {
  const handleOptionTextChange = (index, text) => {
    const newOptions = options.map((option, idx) =>
      idx === index ? { ...option, optionText: text } : option
    );
    updateOptions(newOptions);
  };

  const addOption = () => {
    if (options.length < 8) {
      const newOptions = [
        ...options,
        { optionId: options.length + 1, optionText: "" },
      ];
      updateOptions(newOptions);
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <input
          key={option.optionId}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option.optionText}
          onChange={(e) => handleOptionTextChange(index, e.target.value)}
          style={{
            display: "block",
            marginTop: "5px",
            padding: "10px 5px",
            borderRadius: "5px",
            border: "none",
          }}
        />
      ))}
      {options.length < 8 && (
        <button
          onClick={addOption}
          style={{
            marginTop: "10px",
            backgroundColor: "skyblue",
            color: "black",
            padding: "10px 20px",
            borderRadius: "20px ",
            border: "none",
          }}
        >
          Add Option
        </button>
      )}
    </div>
  );
};

export default McqOptions;
