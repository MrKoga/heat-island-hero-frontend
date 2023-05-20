import React from "react"
import PropTypes from "prop-types"

function SidebarCard({ data }) {
  return (
    <div className="border border-black h-[200px] w-full">
      <span>{data.address}</span>
      <span>{data.heatIndex}</span>
      <span>{data.riskLevel}</span>
      <span>{data.riskColor}</span>
    </div>
  )
}

export default SidebarCard
