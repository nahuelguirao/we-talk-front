import { usePasswordRequirements } from "@/hooks/auth/usePasswordRequirements";
import { FaCircleInfo } from "react-icons/fa6";

export function Requirements() {
  // Password requirements hook
  const {
    showRequirements,
    handleMouseEnter,
    handleMouseLeave,
    toogleRequirements,
  } = usePasswordRequirements();

  return (
    // PASSWORD REQUIREMENTS BOX
    <div className="password_requirements">
      <h5
        className="password_requirements_h5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toogleRequirements}
      >
        Mirá los requisitos <FaCircleInfo />
      </h5>
      {showRequirements && (
        <div className="password_requirements_info">
          <p>* Mínimo 8 caracteres o más.</p>
          <p>* Al menos 1 letra mayúscula.</p>
          <p>* Un carácter especial (*, @, =, etc.).</p>
        </div>
      )}
    </div>
  );
}
