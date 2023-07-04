import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FontMenu() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);

  const FontHandler = (e) => {
    const target = e.target.id;
    switch (target) {
      case "sans":
        document.body.style.fontFamily = "sans-serif";
        break;
      case "roboto":
        document.body.style.fontFamily = "Noto Serif";
        break;
      case "indie":
        document.body.style.fontFamily = "Kalam";
        break;
      default:
        document.body.style.fontFamily = "Noto Serif";
        break;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={showMenu}
        className="inline-flex justify-center gap-x-1.5 rounded-xl p-2 mx-2
         text-sm font-semibold text-gray-600 dark:text-gray-300"
      >
        Font
        <ChevronDownIcon className=" h-6 w-6 text-gray-600 stroke-violet-700 stroke-1" />
      </button>

      {menu && (
        <div
          onClick={FontHandler}
          className="absolute z-10 rounded-lg w-36 right-0
         bg-white shadow-lg ring-1 ring-gray-700 ring-opacity-5 dark:bg-slate-800
           focus:outline-none"
        >
          <button
            id="sans"
            className="Sans block mx-auto w-full hover:rounded-t-lg  py-2 text-sm text-gray-600 dark:text-gray-300 dark:hover:bg-gray-600   hover:bg-gray-100
            hover:text-gray-900 "
          >
            Sans
          </button>
          <button
            id="roboto"
            className="Roboto block mx-auto w-full   py-2 text-sm text-gray-600 dark:text-gray-300 dark:hover:bg-gray-600   hover:bg-gray-100
            hover:text-gray-900 "
          >
            Roboto
          </button>

          <button
            id="indie"
            className="Indie block mx-auto w-full hover:rounded-b-xl  py-2 text-sm text-gray-600
            dark:text-gray-300 dark:hover:bg-gray-600  hover:bg-gray-100
                    hover:text-gray-900 "
          >
            Indie
          </button>
        </div>
      )}
    </div>
  );
}
