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
    const response = await fetch("http://localhost:5000/sql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt:
          "Give me all census tracts, with elderly population over 10 percent",
      }),
    })

    const jsonResponse = await response.json()
    // setBuildingSelectionData(jsonResponse)
    console.log(jsonResponse)
  }

  useEffect(() => {}, [buildingSelectionData])

  return (
    <div className=" mt-4 h-[8.5%] flex border-black">
      <input
        className="text-black p-5 bg-[#d0dec6] rounded-lg text-3xl flex-grow"
        placeholder="Query the map..."
        onChange={(e) => setTextQuery(e.target.value)}
        value={textQuery}
      />
      <button
        onClick={submitText}
        className="bg-[#d0dec6] text-black rounded-xl w-[100px] h-full inline-flex justify-center items-center ml-10"
      >
        SUBMIT
      </button>
    </div>
  )
}

export default ChatBox

// #cedcc5

// #8aa284

// #f4faef

// #d0dec6
