import React from "react";
import useAcKapa from "./useAcKapa";

function App() {
  const [acikmi, acKapaGuncelle] = React.useState(false);

  const butonTikla = () => acKapaGuncelle(!acikmi);
  const butonAc = () => acKapaGuncelle(true);
  const butonKapat = () => acKapaGuncelle(false);

  return (
    <div>
      <button type="button" onClick={butonTikla}>
        Aç veya Kapat
      </button>
      <button type="button" onClick={butonAc}>
        AÇ
      </button>
      <button type="button" onClick={butonKapat}>
        KAPAT
      </button>

      {acikmi?"AÇIK☀":"KAPALI🌛"}
    </div>
  );
}

export default Appzzz;
