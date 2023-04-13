import { mediaQueries } from '../../utils/media'
import Media from 'react-media'
import {CancelButton, ExitButton, LogoContainer, ModalContainer, Text} from './ModalLogout.styled'
import Modal from 'components/Modal/Modal'
import Logo from 'components/Logo/Logo'


export default function ModalLogout() {

    return (
      <>
        <Modal>
        <ModalContainer>
          <LogoContainer>
          <Media queries={mediaQueries}>
              {(matches) =>
                (matches.mobile) && (
               <Logo />
                )
              }
            </Media>   
          
          </LogoContainer>
        <Text>Are you sure you want to exit?</Text>
        <ExitButton>Exit</ExitButton>
        <CancelButton>Cancel</CancelButton>
      </ModalContainer>
      </Modal>
    </>
    )
}