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
              Information about Heat Island Hero
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
