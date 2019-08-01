import Frame              from '../components/_frame.js';
import Modal              from '../components/modal';
import PrivacyContent     from '../components/privacy/content';
import { getMeta }        from '../helpers/meta';
import { fireNewPageView } from '../helpers/tag-manager.js';

export default class Privacy extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal:        false,
      modalContent: null,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(modalContent) {
    this.setState({
      modal: !this.state.modal,
      modalContent,
    });
  }

  componentDidMount(){
    fireNewPageView();
  }
  
  render(){

    const meta = getMeta('privacy');

    const modal = !this.state.modal ? null :
    <Modal 
      toggleModal={this.toggleModal}
      content={this.state.modalContent}/> ;

    return <Frame 
      hideHeader={false} 
      meta={meta} >
      <section className='section'>
        <PrivacyContent toggleModal={this.toggleModal}/>
        <style jsx>{`
          .section {
            display: flex;
            flex-direction: row;
            width: 100vw;
          }
        `}</style>
      </section>
      {modal}
    </Frame>
  }
}