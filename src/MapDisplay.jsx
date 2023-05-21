import { useRef, useEffect } from "react"
import L from "leaflet"
import { useStore } from "../state"

function MapDisplay() {
  const { buildingSelectionData } = useStore()
  const mapRef = useRef(null)

  const lat = 34.0522
  const lon = -118.2437
  const boxSize = 0.001

  useEffect(() => {
    const mapInstance = L.map("mapbox").setView([lat, lon], 11)
    mapRef.current = mapInstance

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19,
      }
    ).addTo(mapInstance)

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

    mapInstance.on("click", function (e) {
      L.popup()
        .setLatLng(e.latlng)
        .setContent("Lat: " + e.latlng.lat + "<br>Lon: " + e.latlng.lng)
        .openOn(mapInstance)
    })

    return () => {
      if (mapInstance) {
        mapInstance.remove()
      }
    }
  }, [])

  useEffect(() => {
    buildingSelectionData.forEach((data) => {
      console.log(data)
      L.polygon(
        [
          [lat - boxSize / 2, lon - boxSize / 4 + 0.01], // southwest corner
          [lat - boxSize / 2, lon + boxSize / 2 + 0.01], // northwest corner
          [lat + boxSize / 2, lon + boxSize / 2 + 0.01], // northeast corner
        ],
        {
          color: "#90EE90",
          fillColor: "#90EE90",
        }
      ).addTo(mapRef.current)
    })
  }, [buildingSelectionData])

  return (
    <div className="w-full h-[90%]">
      <div className="h-[100%] w-[100%] rounded-lg" id="mapbox"></div>
    </div>
  )
}

export default MapDisplay
