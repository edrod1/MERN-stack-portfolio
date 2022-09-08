import './App.css';
import { useState, useEffect } from "react";
import Footer from './components/Footer';
import Header from './components/Header';

//functions
import { getTest } from "./functions/test";


function App() {
  const [data, setData] = useState("Hello World!");

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Header />
      <body>
        <h1>{data}</h1>
      </body>

      <Footer />
    </div>
  );


}

export default App;
