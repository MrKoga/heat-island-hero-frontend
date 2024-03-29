import React from "react"

function SidebarCard({ data }) {
  return (
    <div className=" text-black p-4 rounded-lg  h-[200px] w-full mb-4 bg-[#f4faef]">
      <span>{data.address}</span>
      <span>{data.heatIndex}</span>
      <span>{data.riskLevel}</span>
      <span>{data.riskColor}</span>
    </div>
  )
}

export default SidebarCard
