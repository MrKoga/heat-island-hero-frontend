import React, { useEffect } from "react"

import { useStore } from "../State"
import SidebarCard from "./SidebarCard"
import InfoModal from "./InfoModal"

function Sidebar(props) {
  const { cardData, setCardData } = useStore()

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
    ])
  }, [])

  return (
    <div className="w-[500px] h-full absolute right-0 top-0  bg-slate-500">
      {cardData.map((card, index) => (
        <SidebarCard key={index} data={card} />
      ))}
      <div className="absolute bottom-5 right-10">
        <InfoModal />
      </div>
    </div>
  )
}

export default Sidebar
