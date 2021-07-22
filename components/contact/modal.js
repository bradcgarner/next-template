import { modalCard, 
  accentFontColor, 
  globalHeaderColor}     from '../../helpers/styles-all';
import content           from '../../helpers/content';

export default function Modal(props) {

  const c = props.success ? 
    content.contact.success :
    content.contact.fail;

  const message = typeof c.message === 'string' ?
    <p className='text'>
      {c.message}
      <style jsx>{`
        .text {
          text-align: center;
        }
      `}</style>
    </p> : Array.isArray(c.message) ?
    c.message.map((t,i)=>{
        return <p key={i} className='text'>
        {t}
        <style jsx>{`
          .text {
            text-align: center;
            margin-bottom: 10px;
          }
        `}</style>
      </p> 
    }): 'One of our team members will contact you within approximately 1 business day.'

  return <div className='card contact-modal'
    onClick={()=>{}}>
    <h2 className='header'>{c.header}</h2>
    <div className='content'>
      {message}
    </div>
    <style jsx>{`
      .card {
        ${modalCard}
        width: 70vw;
        height: auto;
        min-height: 300px;
      }
      .header {
        font-size: 40px;
        border-bottom: 7px solid ${accentFontColor};
        text-align: center;
        color: ${globalHeaderColor};
        margin-bottom: 20px;
      }
      .content {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      @media (min-width: 600px){
        .card {
          width: 60vw;
        }
      }
      @media (min-width: 900px){
        .card {
          width: 50vw;
        }
      }
    `}</style>
  </div>
}