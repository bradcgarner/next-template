import Link                from 'next/link';
import LazyLoad            from 'react-lazyload';
import { purple }          from '../../helpers/styles-all.js';
import { formatImageUrl }  from '../../helpers/html-cms/format-image-url';

export default function SiteMapCard(props) {

  const page = props.page || {};

  const about = typeof window !== 'undefined' && window.location && window.location.search === '?showabout=true';

  const width = 300;
  const pad   = 25;
  
  const key = page.key ? page.key : 'no-key';

  const src = formatImageUrl(page.image, width);

  const image = <div className='image-frame'>
    <div className='unintended-background'/>
      <LazyLoad>
        <img className='image' src={src}/> 
      </LazyLoad>
    <style jsx>{`
      .image-frame {
        width: ${width}px;
        height: ${width/1.91}px;
        border: 1px solid #ccc;
        justify-content: center;
        position: relative;
        margin-bottom: 5px;
      }
      .image-frame:hover {
        opacity: 0.8;
      }
      .image {
        object-fit: contain;
        max-width: 100%;
      }
      .unintended-background {
        width: ${width-10}px;
        height: ${(width/1.91)-10}px;
        position: absolute;
        left: 5px;
        top: 5px;
        background-color: ${purple};
        z-index: -1;
      }
    `}</style>
  </div> ;


  const preview = <div key={key} className='meta'>
    {image}
    <h3 className='title'>{page.seoTitle}</h3>
    <a className='link' target='_blank' href={page.url}>
      {page.url}
    </a>
    <p className='description'>{page.description}</p>
    <style jsx>{`
      .meta {
        flex-direction: column;
        margin-bottom: 26px;
        width: ${width}px;
      }
      .title {
        color: #1a0dab;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        width: 100%;
      }
      .title:hover {
        text-decoration: underline;
      }
      .link {
        color: #006621;
        font-style: normal;
        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        width: 100%;
        padding-top: 2px;
        padding-bottom: 3px;
        line-height: 18.2px;
      }
      .description {
        color: #545454;
        font-family: Roboto;
        font-size: 13px;
        line-height: 18.2px;
        font-weight: 400;
        width: 100%;
      }
    `}</style>
  </div>

  const alt = typeof page.alt === 'string' ? page.alt : '';
  const h1Tag = typeof page.h1Tag === 'string' ? page.h1Tag : '';
  const description = typeof page.description === 'string' ? page.description : '';

  const altClass = alt.length > 10 ? '' : 'red' ;
  const h1TagClass = h1Tag.length > 55 ? 'red' : '' ;
  const descClass  = description.length > 120 ? 'yellow' : description.length > 140 ? 'red' : '' ;

  const aboutDiv = about ? <div className='about'>
    <table className='about-table'>
      <tbody>
        <tr className='row'>
          <td className='cell'>Page</td>
          <td className='cell'>{key}</td>
        </tr>
        <tr className='row'>
          <td className='cell'>Alt</td>
          <td className={`cell ${altClass}`}>{alt || 'ARGH!!!'}</td>
        </tr>
        <tr className='row'>
          <td className='cell'>Title</td>
          <td className={`cell ${h1TagClass}`}>{h1Tag.length}/55</td>
        </tr>
        <tr className='row'>
          <td className='cell'>Description</td>
          <td className={`cell ${descClass}`}>{description.length}/120</td>
        </tr>
      </tbody>
    </table>
    <style jsx>{`
      .about {
        width: ${width}px;
        margin-left: 50px;
        margin-bottom: 50px;
      }
      .red {
        color: red;
      }
      .yellow {
        color: #eca615;
      }
    `}</style>
  </div> : null ;

  return <Link prefetch={false} href={page.path || '/'}>
    <div className='sitemap-div'>
      {preview}
      {aboutDiv}
      <style jsx>{`
        .sitemap-div {
          cursor: pointer;
          flex-direction: column;
        }
        @media (min-width: ${(width+pad) * 2}px){
          .sitemap-div {
            flex-direction: row;
            padding-left: ${pad}px;
            padding-right: ${pad}px;
          }
        }
      `}</style>
    </div>
  </Link>
};