import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import "./styles.css"
import { AiOutlineQuestion } from "react-icons/ai"

function InfoModal(props) {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="Button violet">
            <AiOutlineQuestion />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">Info</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Use this tool to identify buildings that would be best candidates
              for a green roof.
              <br />
              <br />
              Suggested buildings consider the Urban Heat Island (UHI)
              temperature delta of an area - (and the resulting Health index
              based on the vulnerability of the population) - along with
              programmatic and geometric properties of the structure, to
              prioritize.
              <br />
              <br />
              Data sources: California Heat Assessment Tool
              https://cal-heat.org/download 2020 Census Tract
              https://data.lacounty.gov/datasets/lacounty::census-tracts-2020/about
              Open Street Maps
              https://www.openstreetmap.org/#map=5/38.007/-95.844
            </Dialog.Description>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            ></div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default InfoModal
