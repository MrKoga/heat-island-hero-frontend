import { useStore } from "../state"
import "./sidebarStyles.css"

function Sidebar() {
  const { selectedCensusData, lastSubmittedQuery } = useStore()

  return (
    <div
      style={{ maxHeight: "calc(100vh - 50px)", overflowY: "scroll" }}
      className="relative text-2xl custom-scrollbar p-4 rounded-lg bg-dark-green"
    >
      <div className="mb-5">My Query: {lastSubmittedQuery}</div>
      <div className="border border-white rounded-lg p-4">
        <h2>TRACT DATA</h2>
        <p>
          <b>County:</b> {selectedCensusData?.census_county}
        </p>
        <p>
          <b>City:</b> {selectedCensusData?.census_city}
        </p>
        <p>
          <b>Delta T:</b> {selectedCensusData?.uhii_avgdeltat}
        </p>
        <p>
          <b>Percent No Tree Canopy:</b>{" "}
          {selectedCensusData?.perc_no_tree_canopy}
        </p>
        <p>
          <b>Heat Health Action Index:</b>{" "}
          {selectedCensusData?.heat_health_action_index}
        </p>
      </div>
    </div>
  )
}

export default Sidebar
