import { useEffect } from "react"
import { useStore } from "../state"
import SidebarCard from "./SidebarCard"
import "./custom-scrollbar.css"

function Sidebar(props) {
  const { setCardData, cardData } = useStore()

  useEffect(() => {
    setCardData([
      {
        address: "12345 New Lane, Los Angeles, CA 902222",
        heatIndex: 0.5,
        riskLevel: "Low",
        riskColor: "green",
      },
      {
        address: "12345 New Lane, Los Angeles, CA 902222",
        heatIndex: 0.5,
        riskLevel: "Low",
        riskColor: "green",
      },
      {
        address: "12345 New Lane, Los Angeles, CA 902222",
        heatIndex: 0.5,
        riskLevel: "Low",
        riskColor: "green",
      },
      {
        address: "12345 New Lane, Los Angeles, CA 902222",
        heatIndex: 0.5,
        riskLevel: "Low",
        riskColor: "green",
      },
      {
        address: "12345 New Lane, Los Angeles, CA 902222",
        heatIndex: 0.5,
        riskLevel: "Low",
        riskColor: "green",
      },
      {
        address: "12345 New Lane, Los Angeles, CA 902222",
        heatIndex: 0.5,
        riskLevel: "Low",
        riskColor: "green",
      },
    ])
  }, [])

  return (
    <div
      style={{ maxHeight: "calc(100vh - 50px", overflowY: "scroll" }}
      className="relative custom-scrollbar p-4 rounded-lg  bg-[#8aa284]"
    >
      {cardData.map((card, index) => (
        <SidebarCard key={index} data={card} />
      ))}
    </div>
  )
}

export default Sidebar
