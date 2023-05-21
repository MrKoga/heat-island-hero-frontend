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

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b294bd359119639843ed9bcf5284c7c2`
    )
      .then((response) => response.json())
      .then((data) => {
        L.marker([lat, lon])
          .addTo(mapRef.current)
          .bindPopup(`Current temperature: ${data.main.temp - 273.15}°C`)
          .openPopup()
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="w-full h-[90%]">
      <div className="h-[100%] w-[100%] rounded-lg" id="mapbox"></div>
    </div>
  )
}

export default MapDisplay
