import { modalBackground } from '../../helpers/styles-all';

export default function Modal(props) {

  const toggleModal = typeof props.toggleModal === 'function' ? props.toggleModal : ()=>{} ;
  
  return <div className='modal'>
    <div className='background'
      onClick={()=>toggleModal()}>
      <div className='close'/>
    </div>
    {props.content}
    {props.children}
    <style jsx>{`
      .modal,
      .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1900;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
      .background {
        background-color: ${modalBackground};
      }
      .close {
        height: 40px;
        width: 40px;
        position: fixed;
        top: 0;
        right: 12px;
      }
    `}</style>
  </div>
}