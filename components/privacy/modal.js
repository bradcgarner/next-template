import { modalCard, 
  hotButton,
  hotButtonHover}     from '../../helpers/common-styles';

export default props => {

  const message = props.message;
  const removeAllCookies = typeof props.removeAllCookies === 'function' ? props.removeAllCookies : ()=>{} ;

  return <div className='card contact-modal'
    onClick={()=>{}}>
    <div className='content'>
      <p className='text'>
        {message}
      </p>
      <button className='remove-button'
      onClick={()=>removeAllCookies()}>Remove</button>
    </div>
    <style jsx>{`
      .card {
        ${modalCard}
        width: 70vw;
        height: 200px;
      }
      .content {
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        align-items: center;
      }
      .text {
        text-align: center;
      }
      .remove-button {
        ${hotButton}
        padding: 10px 20px;
      }
      .remove-button:hover {
        ${hotButtonHover}
        border: none;
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