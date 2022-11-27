import { useState } from 'react';

export default function OptionList({
  answers,
  onChangeAnswer
}) {
  return (
    <ul>
      {answers.map(answer => (
        <li key={answer.id}>
          <Option
            answer={answer}
            onChange={onChangeAnswer}
          />
        </li>
      ))}
    </ul>
  );
}

function Option({ answer, onChange }) {
  const [isEditing, setIsEditing] = useState(false);

  const [checked, setChecked] = useState(false);
  
  const handleChange = () => {
    setChecked(!checked);
  };

  let answerContent;
  answerContent = (
    <>
      {answer.title}
      {/* <button onClick={() => setIsEditing(true)}>
        Edit
      </button> */}
    </>
  );
  return (
    <label>
      <input
        type="checkbox"
        checked={answer.done}
        onChange={e => {
          onChange({
            ...answer,
            done: e.target.checked
          });
        }}
      />
      {answerContent}
      {/* <button onClick={() => onDelete(answer.id)}>
        Delete
      </button> */}
    </label>
  );
}
