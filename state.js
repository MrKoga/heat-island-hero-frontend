import { create } from "zustand"

export const useStore = create((set) => ({
  cardData: [],
  setCardData: (cardData) => set({ cardData }),
  textQuery: "",
  setTextQuery: (textQuery) => set({ textQuery }),
  buildingSelectionData: [""],
  setBuildingSelectionData: (buildingSelectionData) =>
    set({ buildingSelectionData }),
}))
