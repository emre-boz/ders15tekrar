import React from "react";

const useVericek = (url) => {
  const [veri, veriGuncelle] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => veriGuncelle(data));
  }, [url]);

  function uyariGoster(mesaj){
        alert(mesaj);
  }

  return [veri,uyariGoster];
};

export default useVericek;