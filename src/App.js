import React from "react";
import useAcKapa from "./useAcKapa";

function App() {
  const [acikmi, {acKapa,ac,kapat}] = useAcKapa();



  return (
    <div>
      <button type="button" onClick={acKapa}>
        Aç veya Kapat
      </button>
      <button type="button" onClick={ac}>
        AÇ
      </button>
      <button type="button" onClick={kapat}>
        KAPAT
      </button>

      {acikmi?"AÇIK☀":"KAPALI🌛"}
    </div>
  );
}

export default App;
