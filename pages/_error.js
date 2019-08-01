import Frame        from '../components/_frame.js';
import content      from '../helpers/content';
import { getMeta }  from '../helpers/meta.js';
import Router       from 'next/router';
import { detect }   from 'detect-browser';
import { fireNewPageView } from '../helpers/tag-manager.js';

export default class Error extends React.Component {
  static getInitialProps({ res, err }){
    const statusCode = res ? res.statusCode : err ? err.statusCode : null ;
    return {statusCode};
  }

  componentDidMount(){
    fireNewPageView();
    setTimeout(()=>{
      Router.push('/')
    }, 4000);
  }

  render(){

    const browser = detect();
    const properties = [
      <p key={1} style={{fontSize: 12, color: '#aaa', marginRight: 10}}>browser info:</p>
    ];
    for(let key in browser){
      properties.push(<p key={key} style={{fontSize: 12, color: '#aaa', marginRight: 10}}>{key}: {browser[key]}</p>);
    }
    const c = content.error || {} ;
    const meta = getMeta('error');

    const message = this.props.statusCode === 404 ? c[404] : c.error ;

    return <Frame 
      hideHeader={false} 
      meta={meta} >
      <section className='section'>
        <h1>{this.props.statusCode}</h1>
        {message}
        <div className='properties'>
          {properties}
        </div>
        <style jsx>{`
          .section {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            flex: 1;
          }
          h1 {
            font-size: 100px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 50px;
          }
          .properties {
            margin-top: 20px;
          }
        `}</style>
      </section>
    </Frame>
  }
}