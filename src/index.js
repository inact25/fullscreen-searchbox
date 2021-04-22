import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchOverlay from "./SearchOverlay";

import "./styles.css";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalVisible(true)}>Open Overlay</button>
      <SearchOverlay
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
