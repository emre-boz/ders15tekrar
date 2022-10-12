import YapilacakIs from "./YapilacakIs";
import { useEffect, useRef, useState,useReducer } from "react";
//import ilkYapilacaklarObjesi from "./data/yapilacaklarData";
import reducerYapilacaklar from './reducers/reducerYapilacaklar'



function TodosReducer(){
  const [yapilacaklar, dispatchYapilacaklar] = useReducer(reducerYapilacaklar, []);
  //const [yapilacaklar, yapilacaklarGuncelle] = useState([]);//usestate ile yapılsaydı böyle olacaktı.

  const iptalInput=useRef(null);
  const ekleInput=useRef(null);
  const idInput=useRef(null);

  useEffect(()=>{
    const yapilacaklarVerisiAl=async()=>{
      const resp= await fetch("yapilacaklarData.json");
      const ilkYapilacaklarObjesi= await resp.json();
      dispatchYapilacaklar({ad:"ILKVERILER", data:ilkYapilacaklarObjesi});
    }
    yapilacaklarVerisiAl();
  },[dispatchYapilacaklar])

  function tamamlandiYap(guncellenecekIs){ 
    dispatchYapilacaklar({ad:"TAMAMLANDI", id:guncellenecekIs.id});
  }

  function iptalEt(){
    const iptalDegeri=parseInt(iptalInput.current.value);
    

    //yapilacaklarGuncelle(yeniListe);
    dispatchYapilacaklar({ad:"IPTALET", iptalId:iptalDegeri});
  }

  function yeniEkle(){
    const yeniTitle=ekleInput.current.value;
    const yeniId=parseInt(idInput.current.value);


    //yapilacaklarGuncelle(  yeniListe );

    dispatchYapilacaklar({ad:"YENIEKLE", title:yeniTitle, id:yeniId});
  }

  if (yapilacaklar.length<1)
  return <>Liste Boş</> 

  return(
    <>
    <div>
    {yapilacaklar.map((yapilacakIs)=>{
      return (
      <YapilacakIs 
      is={yapilacakIs} 
      tamamlandiYap={tamamlandiYap} 
      key={yapilacakIs.id} />
      )
     })}
    </div>
    <div>
      <input type="text" ref={iptalInput} /> <button onClick={iptalEt}>İptal</button>
    </div>
    <div style={{display:"flex"}}>
      <input style={{width:"3rem"}} placeholder="id" type="number" ref={idInput} />
      <input style={{flex:4}} placeholder="İş Adı" type="text" ref={ekleInput} />  
      <button onClick={yeniEkle}>ekle</button>
    </div>
 
     </>
  )
}

export default TodosReducer;

