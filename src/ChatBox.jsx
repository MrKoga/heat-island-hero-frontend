import React from "react"
import { useStore } from "../state"

function ChatBox(props) {
  const { textQuery, setTextQuery } = useStore()

  const submitText = async () => {
    const response = await fetch("https://httpbin.org/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textQuery }),
    })

    const jsonResponse = await response.json()
    console.log(jsonResponse)
  }

  return (
    <div
      style={
        {
          // width: "calc(100% - 500px - 2.5rem)",
        }
      }
      className=" mt-4 h-[6vh]  flex border-black z-10 left-5"
    >
      <input
        className="text-black p-5 bg-white rounded-lg text-3xl flex-grow"
        placeholder="hello"
        onChange={(e) => setTextQuery(e.target.value)}
        value={textQuery}
      />
      <button
        onClick={submitText}
        className="bg-red-300 text-black rounded-xl w-[100px] h-full inline-flex justify-center items-center ml-10"
      >
        SUBMIT
      </button>
    </div>
  )
}

export default ChatBox
