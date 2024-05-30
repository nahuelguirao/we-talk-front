import { useState } from "react";

export function usePasswordRequirements() {
  //SHOW / HIDE STATE
  const [showRequirements, setPasswordRequirements] = useState(false);

  //SHOW / HIDE password requirement box
  const handleMouseEnter = () => setPasswordRequirements(true);

  const handleMouseLeave = () => setPasswordRequirements(false);

  const toogleRequirements = () => setPasswordRequirements(!showRequirements);

  return {
    showRequirements,
    handleMouseEnter,
    handleMouseLeave,
    toogleRequirements,
  };
}
