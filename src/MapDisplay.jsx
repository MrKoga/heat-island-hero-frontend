import { useRef, useEffect } from "react"
import L from "leaflet"

function MapDisplay() {
  const mapRef = useRef(null)

  useEffect(() => {
    const lat = 34.20777934831021
    const lon = -118.34127126275136
    const boxSize = 0.001
    const mapInstance = L.map("mapbox").setView([lat, lon], 20)
    mapRef.current = mapInstance

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance)

    L.marker([lat, lon]).addTo(mapInstance)

    L.polygon([
      [lat - boxSize / 2, lon - boxSize / 4], // southwest corner
      [lat - boxSize / 2, lon + boxSize / 2], // northwest corner
      [lat + boxSize / 2, lon + boxSize / 2], // northeast corner
      [lat + boxSize / 2, lon - boxSize / 4], // southeast corner
    ]).addTo(mapInstance)

    L.circle([lat, lon], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 50,
    }).addTo(mapInstance)

    return () => {
      if (mapInstance) {
        mapInstance.remove()
      }
    }
  }, [])

  return (
    <div className="w-full h-[90%]">
      <div className="h-[100%] w-[100%]" id="mapbox"></div>
    </div>
  )
}

export default MapDisplay
