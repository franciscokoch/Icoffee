import React from "react"
import { ModalContainer, ModalContent, XStyled } from "./styles"
import { ShoppingCart } from 'phosphor-react'

interface ModalProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean
  children: React.ReactNode
}

export function Modal({ setIsOpen, isOpen, children }: ModalProps) {
  return (
    <>
      <ShoppingCart onClick={() => setIsOpen(!isOpen)} size={22} color="#c47f17" weight="fill" />
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  )
}
