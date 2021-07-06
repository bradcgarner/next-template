import Link                from 'next/link';
import { isObjectLiteral } from 'conjunction-junction';
import Frame               from '../components/_general/_frame.js';
import { siteMapStatic }   from '../helpers/sitemap-static';
import content             from '../helpers/content';
import { green }           from '../helpers/common-styles.js';

export default class SiteMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: false,
      about: false,
      timer: null,
    }
  }

  componentDidMount(){
    const timer = setTimeout(()=>{
      const about = typeof window !== 'undefined' && window.location && window.location.search === '?showabout=true';
      this.setState({
        images: true,
        about,
      });
    }, 1000);

    this.setState({timer});
  }

  componentWillUnmount(){
    clearTimeout(this.state.timer);
  }

  render() {

    const width = 300;
    const pad   = 25;

    const sm = Array.isArray(siteMapStatic) ? siteMapStatic : [] ;
    const c = content || {} ;

    const metas = sm.map((p,i)=>{
      const key = p.key ? p.key : 'no-key';
      const m = isObjectLiteral(c[key]) && isObjectLiteral(c[key].meta) ?
        c[key].meta : {};

      const page = {...p, ...m};

    const featured_image_arr = typeof page.image === 'string' ?
      page.image.split('.com/') : null ;
    const src = Array.isArray(featured_image_arr) ?
      `https://fs.buttercms.com/resize=width:${width}/${featured_image_arr[1]}` :
      '' ;

      const image = <div className='image-frame'>
        <div className='unintended-background'/>
        {this.state.images ? 
          <img className='image' src={src}/> : null }
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
            background-color: ${this.state.images ? green : '#ccc'};
            z-index: -1;
          }
        `}</style>
        </div> ;


      const preview = <div key={key} className='meta'>
        {image}
        <h3 className='title'>{page.title}</h3>
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

      const altClass   = page.alt.length > 10 ? '' : 'red' ;
      const titleClass = page.title.length > 55 ? 'red' : '' ;
      const descClass  = page.description.length > 120 ? 'yellow' : 
        page.description.length > 140 ? 'red' : '' ;

      const about = this.state.about ? <div className='about'>
        <table className='about-table'>
          <tbody>
            <tr className='row'>
              <td className='cell'>Page</td>
              <td className='cell'>{key}</td>
            </tr>
            <tr className='row'>
              <td className='cell'>Alt</td>
              <td className={`cell ${altClass}`}>{page.alt || 'ARGH!!!'}</td>
            </tr>
            <tr className='row'>
              <td className='cell'>Title</td>
              <td className={`cell ${titleClass}`}>{page.title.length}/55</td>
            </tr>
            <tr className='row'>
              <td className='cell'>Description</td>
              <td className={`cell ${descClass}`}>{page.description.length}/120</td>
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

      const final = <Link key={i} href={p.path}>
        <div className='sitemap-div'>
          {preview}
          {about}
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

    
      return final
    });

    return <Frame 
      hideHeader={false} >
      <section className='section'>
        {metas}
        <style jsx>{`
          .section {
            flex-wrap: wrap;
            justify-content: center;
            width: 100vw;
            margin-top: 100px;
            flex: 1;
          }
        `}</style>
      </section>
    </Frame>

  }
  
}