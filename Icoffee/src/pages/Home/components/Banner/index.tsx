import { BannerContainer, 
    BannerDiv, 
    BannerIcons, 
    BannerImage, 
    BannerInfo, 
    BannerText, 
    ClockCountdownStyled, 
    CoffeeStyled, 
    PackageStyled, 
    ShoppingCartStyled } from "./styles";
  import Imagem from "./../../../../assets/Imagem.png"
  
  export function Banner() {
      return (
        <BannerDiv> 
        <BannerContainer>
          <BannerInfo>
            <BannerText>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o ICoffee você recebe seu café onde estiver, a qualquer hora.</p>
            </BannerText>
            <BannerIcons>
              <div>
                <ShoppingCartStyled weight="fill"/>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <PackageStyled weight="fill"/>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <ClockCountdownStyled weight="fill"/>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <CoffeeStyled weight="fill"/>
                <p>O café chega fresquinho até você</p>
              </div>
            </BannerIcons>
          </BannerInfo>
          <BannerImage src={Imagem}/>
        </BannerContainer>
      </BannerDiv>
      )
  }