import React from "react";
import useVericek from "./useVericek";

function App() {
  const [yapilacaklar,uyariGoster] = useVericek("https://jsonplaceholder.typicode.com/todos");
  const [fotolar]=useVericek("https://jsonplaceholder.typicode.com/photos");


  //uyariGoster("Ben render oluyorum");
  return (
    <>

    <button onClick={()=>{uyariGoster("ben merhaba oluyorum")}}>test et</button>
    <h1>YAPILACAKLAR</h1>
      {yapilacaklar &&
        yapilacaklar.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}

<h1>FOTOĞRAFLAR</h1>
      {fotolar &&
        fotolar.map((item) => {
          return <p key={item.id}>
            <img src={item.thumbnailUrl} alt=""/>
           </p>;
        })}
    </>
  );
}

export default App;
