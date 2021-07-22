import LazyLoad      from 'react-lazyload';

export default function ImageContainer(props){

  const containerStyle = typeof props.containerStyle === 'string' ?
    props.containerStyle : '' ;
  const imageStyle = typeof props.imageStyle === 'string' ?
    props.imageStyle : '' ;

  return <div className='image-container'>
    <LazyLoad height='100%' offset={100}>
      <img className='image'
        src={props.src}
        alt={props.alt} />
    </LazyLoad>
    {
			props.caption ? 
			  <p className='caption'>
          {props.caption}
				</p> : 
				null 
		}
    <style jsx>{`
      .image-container {
        width: 100%;
        flex-direction: column;
        align-items: center;
        ${containerStyle}
      }
      .image {
        object-fit: contain;
        width: 100%;
        ${imageStyle}
      }
      .caption {
        font-size: 14px;
        font-style: italic;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 25px;
        line-height: 17px;
      }
    `}</style>
  </div>
}