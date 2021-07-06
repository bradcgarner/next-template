import { isObjectLiteral } from 'conjunction-junction';
import LazyLoad            from 'react-lazyload';
import { 
  accentFontColor, }      from '../../helpers/common-styles';
import { oopsClick }      from '../../helpers/browser/tag-manager';

export default function HomeContent(props) {

  return <div className='content'>
    <div className={`${oopsClick} headshot-in-content`}>
      <LazyLoad>
        <img className='image' src='' alt=''/>
      </LazyLoad>
    </div>
    
    <style jsx>{`
    .content {
      flex-direction: column;
      align-items: center;
      width: 44%;
      border-radius: 2px;
      padding: 40px 70px 0 70px;
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: #ccc;
    }
    `}</style>
  </div>

  }