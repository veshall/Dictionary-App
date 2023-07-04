import React, { useEffect, useRef, useState } from "react";
import { BookOpenIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ThemeMenu from "./settings/ThemeMenu";
import FontMenu from "./settings/FontMenu";
import axios from "axios";

export default function SearchBar({ setData }) {
  const textRef = useRef();
  const [word, setWord] = useState("");

  const wordHandler = (e) => {
    e.preventDefault();
    setWord(textRef.current.value);
  };

  useEffect(() => {
    const fetchWord = async () => {
      if (!word) return;
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWord();
  }, [word]);

  return (
    <>
      <header className=" flex items-center justify-between mb-5">
        <BookOpenIcon className="h-8 w-8 text-gray-600 stroke-violet-700 stroke-1" />
        <div className="flex items-center justify-center">
          <FontMenu />
          <ThemeMenu />
        </div>
      </header>

      <form onSubmit={wordHandler} className="relative">
        <input
          type="text"
          // value={text}
          ref={textRef}
          // onChange={(e) => {
          //   setText(e.target.value);
          // }}
          className="bg-slate-200 w-full h-10 rounded-lg px-4 outline-none"
          placeholder="type keyword. . ."
        ></input>
        <button>
          <MagnifyingGlassIcon className=" absolute top-2 right-3 h-6 w-6 text-gray-600 stroke-violet-700 stroke-1" />
        </button>
      </form>
    </>
  );
}
