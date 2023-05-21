import { useRef, useEffect, useState } from "react"
import L from "leaflet"
import { useStore } from "../state"
import { scaleLinear } from "d3-scale"
import { interpolateRgb } from "d3-interpolate"

const colorScale = scaleLinear()
  .domain([0, 70, 90, 100])
  .range(["lightgray", "green", "yellow", "red"])
  .interpolate(interpolateRgb)

function getColor(value) {
  return colorScale(value)
}

function MapDisplay() {
  const { censusTrackData, setSelectedCensusData } = useStore()
  const mapRef = useRef(null)

  const lat = 34.0522
  const lon = -118.2437

  // function getColor(value) {
  //   const hue = ((1 - value / 80) * 120).toString(10)
  //   return ["hsl(", hue, ",100%,50%)"].join("")
  // }

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

    return () => {
      if (mapInstance) {
        mapInstance.remove()
      }
    }
  }, [])

  // useEffect(() => {
  //   censusTrackData.forEach((data) => {
  //     const polygonPoints = data.geometry.map((geo) => {
  //       return [geo.lat, geo.lon]
  //     })
  //     const polygon = L.polygon([polygonPoints], {
  //       color: getColor(data.perc_no_tree_canopy),
  //       fillColor: getColor(data.perc_no_tree_canopy),
  //     }).addTo(mapRef.current)
  //     polygon.bindPopup(
  //       ` <b>${data.census_city}</b><br>Delta T: ${data.perc_no_tree_canopy}&deg;<br>
  //      Poverty Percentage: ${data.perc_poverty}%
  //       `
  //     )
  //     polygon.on("click", () => {
  //       console.log(data)
  //       setSelectedCensusData(data)
  //     })
  //   })
  // }, [censusTrackData])

  useEffect(() => {
    // Create a layer group
    const polygonLayerGroup = L.layerGroup().addTo(mapRef.current)

    censusTrackData.forEach((data) => {
      const polygonPoints = data.geometry.map((geo) => {
        return [geo.lat, geo.lon]
      })

      const polygon = L.polygon([polygonPoints], {
        color: getColor(data.perc_no_tree_canopy),
        fillColor: getColor(data.perc_no_tree_canopy),
      })

      polygon.bindPopup(
        `<b>${data.census_city}</b><br>Delta T: ${data.perc_no_tree_canopy}&deg;<br>
            Poverty Percentage: ${data.perc_poverty}%`
      )

      polygon.on("click", () => {
        console.log(data)
        setSelectedCensusData(data)
      })

      // Add the polygon to the layer group
      polygonLayerGroup.addLayer(polygon)
    })

    // If the data changes, clear the layers before next render
    return function cleanup() {
      polygonLayerGroup.clearLayers()
    }
  }, [censusTrackData])

  return (
    <div className="w-full h-[90%]">
      <div className="h-[100%] w-[100%] rounded-lg" id="mapbox"></div>
    </div>
  )
}

export default MapDisplay
