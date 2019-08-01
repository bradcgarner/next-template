export default props => {
  const fill      = props.fill      ? props.fill      : '#555';
  const fillHover = props.fillHover ? props.fillHover : '#555';
  return <svg className='nav-up-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'>
    <path className='arr' d='M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z' />
    <style jsx>{`
      .nav-up-icon {
        cursor: pointer;
        width: 16px;
        margin-top: -5px;
      }
      .arr {
        fill: ${fill};
      }
      .arr:hover {
        fill: ${fillHover};
      }
    `}
    </style>
  </svg>
}