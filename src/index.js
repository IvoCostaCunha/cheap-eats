import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { CometChat } from "@cometchat-pro/chat";
import MainChat from "./components/chat/MainChat";

const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion("eu").build();
CometChat.init("222728aa23fd1c09",appSetting).then(
  ()=>{
    console.log('chat fonctionne correctement')
  }
)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
