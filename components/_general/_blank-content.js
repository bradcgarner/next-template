import content       from '../../helpers/content';
import { 
  pageTitle, 
  pageContent,
  pageContentInner} from '../../helpers/styles-all';

export default function BlankContent(props) {

  const c = content._blank || {} ;
  
  return <div className='content'>
      <h1 className='title'>
        {c.header}
      </h1>
       <div className='content-inner'>
         {c.text}
       </div>    
    <style jsx>{`
    .content {
      ${pageContent}
      width: 100vw;
    }
    .content-inner {
      ${pageContentInner}
    }
    .title {
      ${pageTitle}
    }
    `}</style>
  </div>

  }