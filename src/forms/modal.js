import React from "react";
import './modalForm.css'
import { TodoContext } from "../TodoContext";

function ModalForm() {
    const { setOpenModal, addTodo, message } = React.useContext(TodoContext);
    const [description, setDescription] = React.useState('')
    return (
        <div className="container">
            <h3>Nuevo TODO</h3>
            <div className="form">
                <form method="post">
                    <div className="form__group">
                        <textarea className="form__field" type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            name="name"
                            placeholder="Your Message"
                            id="POST-name"></textarea>
                        <label className="form__label" htmlFor="POST-name"  >Nombre:</label>
                    </div>
                    <h2>{message && message}</h2>
                    <button type="button" onClick={() => addTodo(description)}>Guardar</button>
                    <button type="button" onClick={() => setOpenModal(false)}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}


export { ModalForm };