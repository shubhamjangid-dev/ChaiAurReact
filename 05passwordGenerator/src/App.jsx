import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");
  let [copy, setCopy] = useState("copy");

  // useRef hook
  const passwordRef = useRef(password);
  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
    setCopy("copied");
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "~`!@#$%^&*()_-+=?";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  useEffect(() => {
    setCopy("copy");
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-red-200">
        <h1 className="text-3xl my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-2.5 font-mono text-gray-500"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipBoard}
            className="outline-none bg-blue-500 text-white px-3 py-1 shrink-0"
          >
            {copy}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            className=""
            min={8}
            max={50}
            value={length}
            onChange={e => {
              setLength(e.target.value);
            }}
          />{" "}
          length = {length}
          <input
            type="checkbox"
            className=""
            value={numberAllowed}
            onChange={prev => {
              setNumberAllowed(prev => !prev);
            }}
          />
          Numbers
          <input
            type="checkbox"
            className=""
            value={characterAllowed}
            onChange={prev => {
              setCharacterAllowed(prev => !prev);
            }}
          />
          characters
        </div>
      </div>
    </>
  );
}

export default App;
