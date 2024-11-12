import {
  ButtonIconOnly,
  ButtonTextIcon,
  CartAmount,
  HeaderContainer,
} from './styles'
import Logo from '../../assets/Logo.png'
import { MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Modal } from '../Modal'
import { Cart } from '../../pages/Cart'
import { useState } from "react";

export function Header() {
  const { coffee } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <ButtonTextIcon>
          <MapPin size={22} color="#8047f8" weight="fill" />
          <span>Porto Alegre, RS</span>
        </ButtonTextIcon>
        <ButtonIconOnly>
            <Modal isOpen={open} setIsOpen={setOpen}>
              <Cart />
            </Modal>
        </ButtonIconOnly>
        {coffee.length > 0 ? <CartAmount>{coffee.length}</CartAmount> : null}
      </nav>
    </HeaderContainer>
  )
}
