export interface ModalPortalProps {
  children : React.ReactElement<any, string | React.JSXElementConstructor<any>> | false;
}

export interface ModalProps {
  show: boolean;
  children : React.ReactElement<any, string | React.JSXElementConstructor<any>> | string;
  close: (e: boolean) => void
}