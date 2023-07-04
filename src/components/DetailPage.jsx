import React, { useRef } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function DetailPage({ wordData }) {
  const audioRef = useRef();
  const {
    word,
    phonetic,
    phonetics: [audio1, audio2, audio3],
    meanings: [noun, verb],
  } = wordData[0];

  const audioHandler = () => {
    audioRef.current.play();
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-2">
      <section>
        <div className="flex justify-between items-center">
          <h2 className=" text-4xl font-medium lg:text-5xl lg:mb-2 dark:text-gray-200">
            {word}
          </h2>

          <button onClick={audioHandler}>
            <PlayCircleIcon className="h-14 w-14 text-violet-400 " />
          </button>
          <audio
            ref={audioRef}
            src={audio1?.audio || audio2?.audio || audio3?.audio}
          />
        </div>

        <p className="text-lg font-semibold italic text-violet-700">
          {phonetic}
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-semibold mb-2 italic dark:text-gray-200">
          noun
        </h3>
        <h4 className="text-xl text-gray-600 ">Meaning</h4>

        <ul className=" mb-4 lg:mb-0 p-2 list-disc list-inside space-y-3 leading-5 lg:text-base lg:leading-6 dark:text-gray-200">
          {noun?.definitions.map((info) => (
            <li key={info.definition}>{info.definition}</li>
          ))}
        </ul>

        <div className="inline-flex items-center gap-10">
          <h4 className="text-xl text-gray-600">Synonyms</h4>
          <p className="text-lg font-semibold text-violet-700">
            {noun?.synonyms[0]}
          </p>
        </div>
      </section>
      <section>
        <h3 className="text-2xl font-semibold mb-2 italic dark:text-gray-200">
          verb
        </h3>
        <h4 className="text-xl text-gray-600 ">Meaning</h4>
        <ul className=" mb-4 lg:mb-0 p-2 list-disc list-inside space-y-3 leading-5 lg:text-base lg:leading-6 dark:text-gray-200">
          {verb?.definitions.map((info) => (
            <li key={info.definition}>{info.definition}</li>
          ))}
          <p className="text-xl  mb-4 text-violet-700">
            "{verb?.definitions[0]?.example}"
          </p>
        </ul>
      </section>
    </div>
  );
}
