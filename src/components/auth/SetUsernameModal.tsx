import { useSetUsername } from "../../hooks/auth/useSetUsername";

export function SetUsernameModal() {
  //CUSTOM HOOK
  const { inputValue, setInputValue, setUsername } = useSetUsername();

  return (
    <div className="modal-overlay">
      <div className="modal_setusername">
        <h3>Antes de comenzar ingresá tu nombre de usuario....</h3>
        <div className="container_input_form">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            className="general_input"
            type="text"
            placeholder="Ingrese su nombre de usuario..."
            id="username"
            name="username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button onClick={setUsername} className="button_general">
          Establecer nombre de usuario
        </button>
      </div>
    </div>
  );
}
