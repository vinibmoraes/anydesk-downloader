// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ChooseBrowserPage from "./pages/ChooseBrowserPage";
import DownloadPageGeneric from "./pages/DownloadPageGeneric";
import DownloadPageEdge from "./pages/DownloadPageEdge";
import DownloadPageChrome from "./pages/DownloadPageChrome";
import DownloadPageOpera from "./pages/DownloadPageOpera";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ChooseBrowserPage />} />
        <Route path="/AnydeskGeneric" element={<DownloadPageGeneric />} />
        <Route path="/AnyDeskEdge" element={<DownloadPageEdge />} />
        <Route path="/AnyDeskChrome" element={<DownloadPageChrome />} />
        <Route path="/AnyDeskOpera" element={<DownloadPageOpera />} />
      </Routes>
    </Router>
  );
}

export default App;
