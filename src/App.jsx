import { useState } from "react";
import Preloader from "./components/Preloader.jsx";
import MainSite from "./components/MainSite.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return <MainSite />;
}