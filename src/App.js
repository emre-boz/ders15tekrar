import { useState } from "react";

const kitapData={
  data:[
    {id: 1, baslik:"Lorem ipsum 1", "sayfa":24, stok: 5},
    {id: 2, baslik:"Lorem ipsum 2", "sayfa":47, stok: 1},
    {id: 3, baslik:"Lorem ipsum 3", "sayfa":58, stok: 2},
    {id: 4, baslik:"Lorem ipsum 4", "sayfa":65, stok: 4}
  ]
}



function App() {
  console.log("app render oldu");
  const [isim, isimGuncelle]=useState("isim girilmemiş");
  // const [kitaplar,kitaplarGuncelle]=useState(()=>{
  //   return kitapData;
  // });
  const [kitaplar,kitaplarGuncelle]=useState(kitapData);

  const buton1Calistir=()=>{
    isimGuncelle("Hasan");
  }


  return (
<>
<p>Merhaba react</p>
<p>{isim}</p>
<button onClick={buton1Calistir}>isim güncelle</button>
</>
  );
}

export default App;
