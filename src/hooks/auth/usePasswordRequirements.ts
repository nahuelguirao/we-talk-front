import { useState } from "react";

export function usePasswordRequirements() {
  const [passwordRequirements, setPasswordRequirements] = useState(false);

  //SHOW / HIDE password requirement box
  const handleMouseEnter = () => {
    setPasswordRequirements(true);
  };

  const handleMouseLeave = () => {
    setPasswordRequirements(false);
  };

  const tooglePasswordRequirements = () => {
    setPasswordRequirements(!passwordRequirements);
  };
  return {
    passwordRequirements,
    handleMouseEnter,
    handleMouseLeave,
    tooglePasswordRequirements,
  };
}
