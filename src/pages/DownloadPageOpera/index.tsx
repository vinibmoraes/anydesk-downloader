import React, { useState } from "react";
import { Box } from "@mui/material";
import InstructText from "../../components/CustomInstructText";
import DownloadButton from "../../components/CustomButtonDownload";
import StepText from "../../components/CustomStepText";
import Subtitle from "../../components/CustomSubtitle/Index";
import StepImg from "../../components/CustomStepImg/index";

const DownloadPageOpera = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/anydesk.bat`;
    link.download = "anydesk.bat";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to bottom, #d1c4e9, #ffffff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        left: 0,
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {/* //Texto H1*/}
      <Box textAlign="center" sx={{ mt: 4 }}>
        <InstructText />
      </Box>
      {/* //Botão de download*/}
      <Box>
        <DownloadButton onClick={handleDownload} />
      </Box>
      {/* //Subtítulo*/}
      <Box>
        <Subtitle text='Após clicar no botão de "Baixar Anydesk" Siga os passos abaixo pra estar executando o arquivo!' />
      </Box>
      {/* //StepText1*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 6,
          width: "100%",
        }}
      >
        <StepText text="Passo 1: O programa será baixado e você pode selecionar a pasta de downloads para salvar o arquivo:" />
      </Box>
      {/* //StepImg1*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StepImg src="/assets/OperaPasso1.png" />
      </Box>
      {/* //StepText2*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 6,
          gap: 4,
          width: "100%",
        }}
      >
        <StepText text="Passo 2: Vá na sua pasta de Downloads e execute o arquivo, ele vai abrir uma janela e carregar as informações, basta aguardar!" />
      </Box>
      {/* //StepImg2*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StepImg src="/assets/abrirArquivo.png" height="700px" />
      </Box>
      {/* //StepText3*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 6,
          gap: 4,
          width: "100%",
        }}
      >
        <StepText text="Passo 3: Após o carregamento terminar, o Anydesk vai abrir. Copie o código de 9 números (na parte superior da tela) e encaminhe para o atendente, possibilitando o acesso remoto." />
      </Box>
      {/* //StepImg3*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StepImg src="/assets/anydeskAberto.png" height="700px" />
      </Box>
    </Box>
  );
};

export default DownloadPageOpera;
