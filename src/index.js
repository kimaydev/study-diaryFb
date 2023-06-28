import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import koKR from "antd/lib/locale/ko_KR";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ConfigProvider locale={koKR}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
);
