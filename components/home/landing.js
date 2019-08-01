import content             from '../../helpers/content';
import { accentFontColor } from '../../helpers/common-styles';

export default function Landing(props) {

  return <header className='landing'>
    <div className='cover'>
      <div className='logo'>
      </div>
    </div>
    <style jsx>{`
      .landing,
      .cover {
        height: 100vh;
        width: 100vw;
        min-height: 440px;
      }
      .landing {
        position: relative;
        background-size: cover;
        overflow: hidden;
      }
      .cover {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }
    `}</style>
  </header>
  }
