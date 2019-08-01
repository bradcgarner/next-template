export default props => {

  const styleFromProps = typeof props.style === 'string' ? props.style : '' ;
  const hoverStyleFromProps = typeof props.hoverStyle === 'string' ? props.hoverStyle : '' ;
  const dir = props.dir === 'left' ?
    'left:       0;' :
    'right:      0;' ;

  const onClick = typeof props.handleClick === 'function' ? props.handleClick : ()=>{} ;
  const param   = props.clickParam !== undefined ? props.clickParam : 0 ;

  const manual = true; // i.e. advancement is via a manual click, not an automatic scroll

  const arr = props.dir === 'left' ? 
    'M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z' :
    'M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z' ;
  
    return <div 
      className={`arr-container ${props.className}`}
      id={props.id}
      onClick={()=>onClick(param, manual)} >
      <svg className='arr'
        xmlns='http://www.w3.org/2000/svg' 
        viewBox='0 0 192 512'>
        <path className='arr-path' d={arr}/>
        <style jsx>{`
          .arr {
            position:   absolute;
            z-index:     2;
            top:        50%;
            ${dir}
            transform:  translateY(-50%);
            background: rgba(0, 0, 0, 0.4);
            max-width:  35px;
            padding:    10px;
            cursor:     pointer;
            ${styleFromProps}
          }
          .arr:hover {
            ${hoverStyleFromProps}
          }
        `}</style>
      </svg>
    </div>
  // Font Awesome Pro 5.3.1 by @fontawesome - https://fontawesome.com
  // License - https://fontawesome.com/license (Commercial License)
}