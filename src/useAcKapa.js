import React from "react";

const useAcKapa = (ilkDurum=false) => {
    const [state, setState] = React.useState(ilkDurum);
  
    const handleTrue = () => setState(true);
    const handleFalse = () => setState(false);
    const handleToggle = () => setState(!state);
  
    return [
      state,
      {
        ac: handleTrue,
        kapat: handleFalse,
        acKapa: handleToggle,
      },
    ];
  };

  export default useAcKapa;