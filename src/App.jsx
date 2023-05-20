import "./App.css"
import Sidebar from "./Sidebar"
import ChatBox from "./ChatBox"
import MapDisplay from "./MapDisplay"

function App() {
  return (
    <div className="fixed w-full h-full bg-red-500">
      <div className="h-[100px] grid items-center justify-center ">
        <span className="text-7xl">Heat Island Hero</span>
      </div>
      <div>
        <MapDisplay />
        <ChatBox />
      </div>
      <Sidebar />
    </div>
  )
}

export default App
