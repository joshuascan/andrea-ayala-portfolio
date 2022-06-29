import styled from "styled-components";
import * as ReactModal from "react-modal";
import Image from "next/image";

ReactModal.setAppElement("#__next");

const ModalStyle = styled.div`
  min-height: 18rem;
  margin: 2rem;
  /* padding: 2.5rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
`;

const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: #212b3277;
`;

export default function Modal({
  isOpen,
  children,
  image,
  data,
  onRequestClose,
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      // shouldCloseOnEsc={false}
      // shouldCloseOnOverlayClick={false}
    >
      <Image src={data.image} alt={data.description} width={901} height={400} />
      <p>{data.description}</p>
    </ReactModal>
  );
}
