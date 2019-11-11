import React from "react";
import "./App.css";
import Apod from "./components/Apod";
import styled from "styled-components";

const WholeCard = styled.div`
                    text-align: center;
`;

function App() {
  return (
    <WholeCard>
      <Apod />
    </WholeCard>
  );
}

export default App;
