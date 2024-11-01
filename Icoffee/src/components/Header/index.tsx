import { HeaderContainer,
    HeaderDiv,
    HeaderLogo,
    HeaderMenu,
    MapPinContainer,
    MapPinStyled, 
    ShoppingCartContainer,
    ShoppingCartStyled} from "./styles";
import Logo from "../../assets/Logo.png"

export function Header() {
    return (
      <HeaderDiv>
        <HeaderContainer>
            <HeaderLogo src={Logo}/>
            <HeaderMenu>
              <MapPinContainer>
                <MapPinStyled size={22} weight="fill"/>
                <div>
                  <p>Porto Alegre, RS</p>
                </div>
              </MapPinContainer>
              <ShoppingCartContainer>
                <ShoppingCartStyled size={22} weight="fill"/>
              </ShoppingCartContainer>
            </HeaderMenu>
        </HeaderContainer>
      </HeaderDiv>
    )
}