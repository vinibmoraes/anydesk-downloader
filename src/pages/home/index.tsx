import React, { useState } from "react";
import { Button, Typography, CssBaseline, Box } from "@mui/material";
import CustomInstructText from "../../components/CustomInstructText";
import CustomDownloadButton from "../../components/CustomButtonDownload";

const DownloadPage = () => {
  const [downloaded, setDownloaded] = useState(false);

  const downloadAnyDesk = () => {
    window.open(
      "https://anydesk.com/pt/downloads/thank-you?dv=win_exe",
      "_blank"
    );
    setDownloaded(true);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {/* //Texto H1*/}
      <Box textAlign="center" sx={{ mt: 4 }}>
        <CustomInstructText />
      </Box>
      {/* //Botão de download*/}
      <Box>
        <CustomDownloadButton onClick={downloadAnyDesk} />
      </Box>
    </Box>
  );
};

export default DownloadPage;
