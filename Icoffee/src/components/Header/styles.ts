import styled from 'styled-components';
import { MapPin } from "@phosphor-icons/react";

export const MapPinStyled = styled(MapPin)`

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

export const HeaderMenu = styled.div `

`