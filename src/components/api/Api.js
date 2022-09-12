import React, {useState} from "react";
import  "./Api.css";

function Api ({setArray, array}){

  const [link, setLink] = useState('')

 async function submitHandler (e) {
    e.preventDefault();
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
    const data = await res.json();
    setArray((prevLinks) => {
      const updatedLinks = [...prevLinks];
      updatedLinks.unshift({shortedLink: data.result.short_link2, prevLink: link})
      return updatedLinks
    })

    setLink('')
  }

  function arrayLimit () {
    if (array.length > 3) {
      array.pop()
    }
  }


    return (

        <form onSubmit={submitHandler} className={"backgroundApi flex w-4/5 h-1/6 flex px-8 py-4 justify-around rounded-lg self-center bg-the-purple absolute -top-20"}>
            <input
                name="text"
                type="text"
                required
                autoComplete="text"
                onChange={event => setLink(event.target.value)}
                value={link}

                className="flex self-center text-lg appearance-none rounded-none relative block w-4/5 h-12 px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-the-blue-focused focus:border-the-blue-focused focus:z-10"
                placeholder="Shorten a link here..."
            />
            <button  type="submit" onClick={arrayLimit} className={"flex blue-button rounded-md self-center h-12 w-1/6 border border-transparent text-white bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-the-blue-focused"}>
                <p className={'self-center'}>Shorten It!</p>
            </button>
        </form>

    )
}

export default Api;
