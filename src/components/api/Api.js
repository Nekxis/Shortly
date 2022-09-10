import React, {useState,useRef} from "react";
import  "./Api.css";

function Api (){

  const [result, setResult] = useState(" ")

  const linkRef = useRef()

  function submitHandler (e) {
    e.preventDefault();

    fetch(`https://api.shrtco.de/v2/shorten?url=${linkRef.current.value}`)
      .then(response => response.json())
      .then(data => {
        setResult(data.result.full_short_link2);
      });
  }

  console.log(result);

    return (
        <form onSubmit={submitHandler} className={"backgroundApi w-4/5 h-1/6 flex px-8 py-4 justify-around rounded-lg self-center bg-the-purple absolute -top-20"}>
            <input
                name="text"
                type="text"
                autoComplete="text"
                ref={linkRef}
                className="flex self-center text-lg appearance-none rounded-none relative block w-4/5 h-12 px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-the-blue-focused focus:border-the-blue-focused focus:z-10"
                placeholder="Shorten a link here..."
            />
            <button className={"flex blue-button rounded-md self-center h-12 w-1/6 border border-transparent text-white bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-the-blue-focused"}>
                <p className={'self-center'}>Shorten It!</p>
            </button>
        </form>
    )
}

export default Api;
