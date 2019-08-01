import content       from '../helpers/content';
import { 
  postContent, 
  postTitle, 
  postContentInner } from '../helpers/common-styles';

export default props => {

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
      ${postContent}
      width: 100vw;
    }
    .content-inner {
      ${postContentInner}
    }
    .title {
      ${postTitle}
    }
    `}</style>
  </div>

  }