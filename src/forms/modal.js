import React from "react";
import './modalForm.css'
import { TodoContext } from "../TodoContext";

function ModalForm() {
    const {setOpenModal} = React.useContext(TodoContext);
    return (
        <div className="container">
            <h3>Nuevo TODO</h3>
            <div className="form">
                <form method="post">
                    <div className="form__group">
                        <input className="form__field" type="text" name="name" placeholder="Your Message" id="POST-name" />
                        <label className="form__label" htmlFor="POST-name"  >Nombre:</label>
                    </div>
                    <div className="form__group">
                        <input className="form__field" type="text" name="status" placeholder="status" id="POST-status"/>
                        <label className="form__label" htmlFor="POST-status"  >Status:</label>
                    </div>
                    <button type="button">Guardar</button>
                    <button type="button" onClick={()=> setOpenModal(false)}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}


export { ModalForm };