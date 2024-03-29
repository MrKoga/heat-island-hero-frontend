import "./App.css"
import Sidebar from "./Sidebar"
import ChatBox from "./ChatBox"
import MapDisplay from "./MapDisplay"
import InfoModal from "./InfoModal"

function App() {
  return (
    <div className="fixed w-full h-full grid gap-4 grid-cols-3 p-4 grid-rows-[auto,1fr] bg-white">
      <div className="col-span-3  grid items-center justify-left">
        <img src="/hih-horiz.png" style={{ height: "100px" }} />
        <div className="fixed top-5 right-5">
          <InfoModal />
        </div>
      </div>
      <div className="col-span-2">
        <MapDisplay />
        <ChatBox />
      </div>

      <Sidebar className="col-span-1" />
    </div>
  )
}

export default App
