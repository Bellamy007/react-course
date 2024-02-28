import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          setOpenModal(true)
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };
