import { HeaderContainer,
    HeaderDiv,
    HeaderLogo,
    HeaderMenu } from "./styles";
import Logo from "../../assets/Logo.png"

export function Header() {
    return (
      <HeaderDiv>
        <HeaderContainer>
            <HeaderLogo src={Logo}/>
            <HeaderMenu>
                <a></a>
            </HeaderMenu>
        </HeaderContainer>
      </HeaderDiv>
    )
}