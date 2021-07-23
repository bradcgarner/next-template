export const formatImageUrl = (url, width) => {
  const w = Math.floor(width);
  const urlArr = typeof url === 'string' ?
    url.split('.com/') : 
    null ;

  const urlSized = Array.isArray(urlArr) ?
    `https://fs.buttercms.com/resize=width:${w}/${urlArr[1]}` :
    '' ;

  return urlSized;
};