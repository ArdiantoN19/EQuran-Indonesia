import { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LocalContext from "./context/Context";
import DetailPage from "./pages/DetailPage";
import Homepage from "./pages/Homepage";
import { getAllSurah } from "./utils/api";

function App() {
  const [surahs, setSurahs] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const onClickSearchHandler = () => {
    setIsSearch((state) => !state);
  };

  useEffect(() => {
    const fetchAllSurat = async () => {
      const dataSurahs = await getAllSurah();
      setTimeout(() => {
        setSurahs(dataSurahs);
      }, 2000);
    };

    fetchAllSurat();
  }, []);

  const contextValue = useMemo(() => {
    return {
      isSearch,
      onClickSearchHandler,
    };
  });

  return (
    <LocalContext.Provider value={contextValue}>
      <div className="bg-primary min-h-full w-full pb-20">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <main className="py-6 px-4">
            <Routes>
              <Route path="/" element={<Homepage surahs={surahs} />} />
              <Route path="/surat/:nomor" element={<DetailPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </LocalContext.Provider>
  );
}

export default App;
