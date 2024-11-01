import styled from "styled-components";
import { ShoppingCart, ClockCountdown, Package, Coffee } from "@phosphor-icons/react";

export const BannerDiv = styled.div`
  width: 100%;
  min-height: 544px;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BannerContainer = styled.div `
  display: flex;
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const BannerText = styled.div `
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 16px;
  min-width: 588px;
  min-height: 192px;

  & h1 {
    font-size: 48px;
    line-height: 130%;
    font-weight: "ExtraBold";
    font-family: "Baloo 2", sans-serif;
  }

  & p {
    font-size: 20px;
    line-height: 130%;
    font-weight: "Regular & Bold";
    font-family: "Roboto", sans-serif;
  }
`

export const BannerIcons = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-left: -40px;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  & p {
    font-size: 16px;
    line-height: 130%;
    font-weight: "Regular & Bold";
    font-family: "Roboto", sans-serif;
    margin-left: 10px;
  }
`

export const ShoppingCartStyled = styled(ShoppingCart)`
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['base-background']};
  padding: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const ClockCountdownStyled = styled(ClockCountdown)`
  background-color: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['base-background']};
  padding: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const PackageStyled = styled(Package)`
  background-color: ${(props) => props.theme['base-text']};
  color: ${(props) => props.theme['base-background']};
  padding: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const CoffeeStyled = styled(Coffee)`
  background-color: ${(props) => props.theme['purple']};
  color: ${(props) => props.theme['base-background']};
  padding: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const BannerImage = styled.img `
  width: 476px;
  height: 360px;
`