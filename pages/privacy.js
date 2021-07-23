import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame.js';
import Modal               from '../components/_general/modal';
import PrivacyContent      from '../components/privacy/_main';
import { getMeta }         from '../helpers/meta';
import { fireNewPageView } from '../helpers/browser/tag-manager.js';

export default function PrivacyPage(props) {

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const toggleModal = modalContent => {
    setModal(!modal)
    setModalContent(modalContent);
  };



  const meta = getMeta('privacy');

  return <Frame 
    hideHeader={false} 
    meta      ={meta} >
    <section className='section'>
      <PrivacyContent toggleModal={toggleModal}/>
      <style jsx>{`
        .section {
          display: flex;
          flex-direction: row;
          width: 100vw;
        }
      `}</style>
    </section>
    {modal ?
      <Modal 
        toggleModal={toggleModal}
        content={modalContent}/> : null 
    }
  </Frame>
}