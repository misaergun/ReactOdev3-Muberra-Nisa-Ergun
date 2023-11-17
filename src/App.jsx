import "./App.css";
import React from "react";
function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React" || "Nisa" 
  );
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "React Çalışmalarım",
      url: "wwww.google.com.tr",
      yazar: "Nisa Ergün",
      yorum_sayisi: 9,
      puan: 5,
      id: 7,
    },
    {
      baslik: "Denemeler",
      url: "wwww.google.com.tr",
      yazar: "Nisa Ergün",
      yorum_sayisi: 11,
      puan: 24,
      id: 2,
    },
  ];
  const arananYazilar = yaziListesi.filter(function (yazi) {
    return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
  });

  const handleSearch = (event) => {
    setAramaMetni(event.target.value);
  };

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  return (
    <React.Fragment>
      <h1>Merhaba!</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <hr />
      <Liste yazilar={arananYazilar} />
    </React.Fragment>
  );
}
function Arama({ aramaMetni, onSearch }) {
  return (
    <>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
    </>
  );
}
function Liste({ yazilar }) {
  return (
    <>
      <ul>
        {yazilar.map(function (yazi) {
          return <Yazi key={yazi.id} {...yazi} />;
        })}{" "}
      </ul>
    </>
  );
}
function Yazi({ url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayisi:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}
export default App;