import {ModalContainer, Text} from './ModalLogout.styled'
import Modal from 'components/Modal/Modal'

export default function ModalLogout() {

    return (
        <Modal>
        <ModalContainer>
        <Text>Вы уверены?</Text>
        <button>Logout</button>
        <button>Cansel</button>
      </ModalContainer>
      </Modal>
    )
}