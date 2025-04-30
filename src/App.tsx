// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ChooseBrowserPage from "./pages/ChooseBrowserPage";
import DownloadPageGeneric from "./pages/DownloadPageGeneric";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ChooseBrowserPage />} />
        <Route path="/downloadPageGeneric" element={<DownloadPageGeneric />} />
      </Routes>
    </Router>
  );
}

export default App;
