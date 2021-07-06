import Frame              from '../components/_general/_frame.js';
import content            from '../helpers/content';
import BlankContent       from '../components/_general/_blank-content';

export default class BlankPage extends React.Component {
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