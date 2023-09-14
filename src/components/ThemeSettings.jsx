import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { UseStateContext } from "../contexts/ContextProvider";
import { ThemeColors } from "../dummy";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    UseStateContext();

  return (
    <div className="bg-half-transparent w-[400px] fixed nav-item bottom-4 left-4 rounded-xl" style={{zIndex:"9999"}}>
      <div className=" h-[400px] dark:text-gray-200 bg-white dark:bg-[#484b52] w-400 rounded-xl">

        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>

          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-gray-600"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex flex-col border-t border-color dark:border-gray-300 p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>

          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col border-t border-color p-4 ml-4">
          <div>
            <p className="text-xs text-gray-100">
              Select your custom theme Color
            </p>
            <p className="text-lg font-semibold">Theme Colors</p>
          </div>

          <div className="flex gap-3">
            {ThemeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full"
                    style={{ backgroundColor: item.color }}
                    onClick={() => {
                      setColor(item.color);
                    }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default ThemeSettings;
