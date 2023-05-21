import React, { useState } from "react"
import { useStore } from "../state"
import "./chatboxStyles.css"

function ChatBox() {
  const [loading, setLoading] = useState(false)
  const { textQuery, setTextQuery, setCensusTrackData, setLastSubmittedQuery } =
    useStore()

  const submitText = async (e) => {
    e.preventDefault()
    setLoading(true)

    const response = await fetch("http://localhost:5000/sql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: textQuery,
      }),
    })

    const jsonResponse = await response.json()
    setCensusTrackData(jsonResponse)
    console.log(`${textQuery}: `, jsonResponse)
    setLastSubmittedQuery(textQuery)
    setTextQuery("")
    setLoading(false)
  }

  return (
    <div className=" mt-4 h-[8.5%] flex border-black">
      <form className="w-full flex" onSubmit={submitText}>
        <input
          className={`text-black p-5 bg-dark-green rounded-lg text-3xl flex-grow ${
            loading ? "loading-text" : ""
          }`}
          placeholder="Query the map..."
          onChange={(e) => setTextQuery(e.target.value)}
          value={textQuery}
          disabled={loading}
        />
        <button
          onClick={submitText}
          className="bg-dark-green text-black rounded-xl w-[100px] h-full inline-flex justify-center items-center ml-4"
          disabled={loading}
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default ChatBox
