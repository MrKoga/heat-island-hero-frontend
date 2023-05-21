import React, { useEffect } from "react"
import { useStore } from "../state"

function ChatBox(props) {
  const {
    textQuery,
    setTextQuery,
    buildingSelectionData,
    setBuildingSelectionData,
  } = useStore()

  const submitText = async () => {
    const response = await fetch("https://httpbin.org/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textQuery }),
    })

    const jsonResponse = await response.json()
    setBuildingSelectionData(jsonResponse)
    console.log(jsonResponse)
  }

  useEffect(() => {}, [buildingSelectionData])

  return (
    <div className=" mt-4 h-[8.5%] flex border-black">
      <input
        className="text-black p-5 bg-[#8aa284] rounded-lg text-3xl flex-grow"
        placeholder="hello"
        onChange={(e) => setTextQuery(e.target.value)}
        value={textQuery}
      />
      <button
        onClick={submitText}
        className="bg-[#8aa284] text-black rounded-xl w-[100px] h-full inline-flex justify-center items-center ml-10"
      >
        SUBMIT
      </button>
    </div>
  )
}

export default ChatBox

// #cedcc5

// #8aa284
