import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import { Navbar, Footer, Sidebar } from "./components";

import { UseStateContext } from "./contexts/ContextProvider";

import "./App.css";
import ThemeSettings from "./components/ThemeSettings";

import {
  Home,
  Calendar,
  Community,
  Energy,
  Inventory,
  Market,
  Minerals,
  Progress,
  Weather,
  Water,
} from "./pages";

function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor } =
    UseStateContext();

  return (
    <>
      <div className="">
        <BrowserRouter>
          <div className="flex relative">
            {/*  */}
            <div className="fixed left-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="settings" position="TopCenter">
                <button
                  type="button"
                  className="text-3xl p-2 hover:drop-shadow-xl hover:bg-light-gray text-white  rounded-full"
                  style={{ background: currentColor, zIndex: "9999" }}
                  onClick={() => setThemeSettings(true)}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {/*  */}

            {activeMenu ? (
              <div
                className="w-72 fixed sidebar bg-white dark:bg-dark2-bg"
                style={{ zIndex: "999" }}
              >
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 ">
                <Sidebar />
              </div>
            )}

            <div
              className={`min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-2"
              }`}
            >
              <div
                className="fixed top-0 md:static bg-main-bg dark:bg-dark2-bg w-full"
                style={{ position: "fixed", zIndex: "999" }}
              >
                <Navbar />
              </div>

              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />

                  {/* Pages */}
                  <Route path="/progress" element={<Progress />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/inventory" element={<Inventory />} />

                  {/* Charts */}
                  <Route path="/energy" element={<Energy />} />
                  <Route path="/water" element={<Water />} />
                  <Route path="/minerals" element={<Minerals />} />

                  {/* Community */}
                  <Route path="/market" element={<Market />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/weather" element={<Weather />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
