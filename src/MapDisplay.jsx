import { useRef, useEffect } from "react"
import L from "leaflet"

function MapDisplay() {
  const mapRef = useRef(null)

  const lat = 34.20777934831021
  const lon = -118.34127126275136
  const boxSize = 0.001

  useEffect(() => {
    const mapInstance = L.map("mapbox").setView([lat, lon], 20)
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

  return (
    <div className="w-full h-[90%]">
      <div className="h-[100%] w-[100%] rounded-lg" id="mapbox"></div>
    </div>
  )
}

export default MapDisplay
