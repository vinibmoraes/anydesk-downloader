import React from "react";
import { CssBaseline } from "@mui/material";
import DownloadPage from "../src/pages/home/index"; // Ajuste o caminho conforme sua estrutura

function App() {
  return (
    <>
      <CssBaseline /> {/* Reset de estilos padrão */}
      <DownloadPage /> {/* Sua página principal */}
    </>
  );
}

export default App;
