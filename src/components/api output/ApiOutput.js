import React from "react";

function ApiOutput ({array}){

  return(
    array.map((item) => {
      return(
        <div className={'flex w-4/5 h-16 flex px-4 py-2 justify-between rounded-lg self-center bg-white my-2'}>
          <p className={'flex self-center w-1/2'}>{item.prevLink}</p>
          <div className={'flex w-1/2 justify-end'}>
            <p className={'flex self-center mx-12 text-the-blue font-semibold'}>{item.shortedLink}</p>
            <button onClick={() => {navigator.clipboard.writeText(item.shortedLink)}} className={'blue-button flex p-2 self-center justify-self-end font-semibold text-center w-1/6 h-4/5 border border-transparent rounded-lg bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-the-blue-focused'}>Copy!!</button>
          </div>
        </div>
      )
    })
  )
}

export default ApiOutput;
