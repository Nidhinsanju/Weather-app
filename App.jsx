import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import DefaultCity from "./components/DefaultCity";
import Weather from "./components/Weather";

function app() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/city" element={<DefaultCity />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default app;
