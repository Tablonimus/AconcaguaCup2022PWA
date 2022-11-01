import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cronograma from "./components/Cronograma/Cronograma";
import Download from "./components/Download/Download";
import Notif from "./components/Notif/Notif";

function App() {
  // const  history = createBrowserHistory();
  return (
    <BrowserRouter>
      <Routes /*  history={history} */>
        <Route path="/" element={<Download />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/notification" element={<Notif />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
