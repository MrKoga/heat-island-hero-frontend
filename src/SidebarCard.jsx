import React from "react"

function SidebarCard({ data }) {
  return (
    <div className="border text-black p-4 border-black h-[200px] w-full mb-4 bg-slate-300">
      <span>{data.address}</span>
      <span>{data.heatIndex}</span>
      <span>{data.riskLevel}</span>
      <span>{data.riskColor}</span>
    </div>
  )
}

export default SidebarCard
