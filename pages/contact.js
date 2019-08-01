import Frame              from '../components/_frame.js';
import ContactContent     from '../components/contact/content';
import Modal              from '../components/modal';
import { getMeta }        from '../helpers/meta';
import { fireNewPageView } from '../helpers/tag-manager.js';

export default class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal:        false,
      modalContent: null,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount(){
    fireNewPageView();
  }
  
  toggleModal(modalContent) {
    this.setState({
      modal: !this.state.modal,
      modalContent,
    });
  }

  render(){

    const meta = getMeta('contact');

    const modal = !this.state.modal ? null :
    <Modal 
      toggleModal={this.toggleModal}
      content={this.state.modalContent}/> ;

    return <Frame 
      hideHeader={false} 
      meta={meta} >
      <section className='section'>
        <ContactContent toggleModal={this.toggleModal}/>
        <style jsx>{`
          .section {
            flex-direction: column;
            align-items: center;
            width: 100vw;
          }
        `}</style>
      </section>
      {modal}
    </Frame>
  }
}