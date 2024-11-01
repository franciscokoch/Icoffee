import styled from 'styled-components';
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export const HeaderMenu = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  gap: 10px;
`

export const MapPinContainer = styled.div `
  width: 143px;
  height: 38px;
  background-color: ${(props => props.theme['purple-light'])};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & p {
    color: ${(props => props.theme['purple-dark'])};
    font-size: 15px;
  }
`

export const MapPinStyled = styled(MapPin)`
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
`

export const ShoppingCartContainer = styled.div `
  width: 38px;
  height: 38px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props => props.theme['yellow-light'])};
  cursor: pointer;
`

export const ShoppingCartStyled = styled(ShoppingCart)`
  color: ${(props) => props.theme['yellow-dark']};
`

export const HeaderDiv = styled.div `
  width: 100%;
  background-color: ${(props) => props.theme.background};
`

export const HeaderContainer = styled.div `
  max-width: 74rem;
  padding: 10px 20px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.img `
  width: 85px;
  height: auto;
`