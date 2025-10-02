import { useState } from "react";
import Preloader from "./components/Preloader";
import MainSite from "./components/MainSite";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <MainSite />
      )}
    </>
  );
}
