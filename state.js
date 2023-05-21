import { mountStoreDevtool } from "simple-zustand-devtools"
import { create } from "zustand"

export const useStore = create((set) => ({
  cardData: [],
  setCardData: (cardData) => set({ cardData }),
  textQuery: "",
  setTextQuery: (textQuery) => set({ textQuery }),
  buildingSelectionData: [""],
  setBuildingSelectionData: (buildingSelectionData) =>
    set({ buildingSelectionData }),
  censusTrackData: [],
  setCensusTrackData: (censusTrackData) => set({ censusTrackData }),
  selectedCensusData: {},
  setSelectedCensusData: (selectedCensusData) => set({ selectedCensusData }),
  lastSubmittedQuery: "",
  setLastSubmittedQuery: (lastSubmittedQuery) => set({ lastSubmittedQuery }),
}))

mountStoreDevtool("Store", useStore)
