import React, 
{ useEffect, useState }    from 'react';
import Frame               from '../components/_general/_frame.js';
import ContactContent      from '../components/contact/_main';
import Modal               from '../components/_general/modal';
import { getMeta }         from '../helpers/meta';
import { fireNewPageView } from '../helpers/browser/tag-manager.js';

export default function ContactPage(props) {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [ready, setReady] = useState(false);

  const toggleModal = modalContent => {
    setModal(!modal)
    setModalContent(modalContent);
  };

  useEffect(()=>{
    if(!ready){
      fireNewPageView();
      setReady(true);
    }
  }, [ready])

  const meta = getMeta('contact');

  return <Frame 
    hideHeader={false} 
    meta={meta} >
    <section className='section'>
      <ContactContent toggleModal={toggleModal}/>
      <style jsx>{`
        .section {
          flex-direction: column;
          align-items: center;
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