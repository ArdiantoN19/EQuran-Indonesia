import { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
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
      setSurahs(dataSurahs);
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
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-md mx-auto">
            <Navbar />
          </div>
          <main className="pt-20 px-4">
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
