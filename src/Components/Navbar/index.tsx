import { ContainerNavbar, Lista } from './style'
import { GearSix, InstagramLogo, SealPercent, TwitterLogo, UserCircle, WhatsappLogo } from '@phosphor-icons/react'

export const NavBar = () => (
  <ContainerNavbar>
    <Lista>
      <li>
        <a><TwitterLogo size={30}/></a>
      </li>
      <li>
        <a><InstagramLogo size={30}/></a>
      </li>
      <li>
        <a><WhatsappLogo size={30}/></a>
      </li>
      <li>
        <a><SealPercent size={30}/></a>
      </li>
      <li>
        <a><GearSix size={30}/></a>
      </li>
      <li>
        <a><UserCircle size={30}/></a>
      </li>
    </Lista>    
  </ContainerNavbar>
)
