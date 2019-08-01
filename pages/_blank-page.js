import Frame              from '../components/_frame.js';
import content            from '../helpers/content';
import BlankContent       from '../components/_blank-content';

export default class Privacy extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){

    return <Frame 
      hideHeader={false} 
      meta={content.meta} >
      <section className='section'>
        <BlankContent/>
        <style jsx>{`
          .section {
            display: flex;
            flex-direction: row;
            width: 100vw;
          }
        `}</style>
      </section>
    </Frame>
  }
}