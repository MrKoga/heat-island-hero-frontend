import { useState } from "react"
import "./App.css"
import Sidebar from "./Sidebar"
import ChatBox from "./ChatBox"

function App() {
  return (
    <div className="fixed w-full h-full">
      <div>Heat Island Hero</div>
      <ChatBox />
      <Sidebar />
    </div>
  )
}

export default App
