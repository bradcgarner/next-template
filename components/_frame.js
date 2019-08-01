import ReactDOM         from 'react-dom';
import Head             from 'next/head';
import ReactGA          from 'react-ga';
import Header           from './header/header';
import Footer           from './footer/footer';
import { fontNormal, 
  fontsToLoad, 
  globalFontColor }     from '../helpers/common-styles';
import scrollFix        from '../helpers/scroll-fix';  // DO NOT DELETE! This mutates the window object; not invoked in this file

// necessary to over-ride browser defaults for the root component
const layoutStyle = {
  margin: 0,
  padding: 0,
}

export default class Frame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideHeader:    typeof window !== 'undefined' && window.location && window.location.hash ? false : typeof this.props.hideHeader === 'boolean' ? this.props.hideHeader : true ,
      scrolledTo:    0 ,
      triggerHeight: 400,
      meta: this.props.meta || {},
      consent: {
        consented:   typeof window === 'undefined' ? false : window.localStorage.getItem('consented') ? true : false ,
        userHistory: true,
        userStats:   true,
        expanded:    false,
      },
      showFooter: false, // show after timeout
    };
    this.hideBar             = this.hideBar.bind(this);
    this.changeConsent       = this.changeConsent.bind(this);
    this.toggleExpand        = this.toggleExpand.bind(this);
    this.showPrivacySettings = this.showPrivacySettings.bind(this);
  }

  componentDidMount(){
    this.addScrollListener();
    this.scrollToHash();
    this.triggerConsentActions();
    window.dataLayer = window.dataLayer || [] ;
    setTimeout(()=>{
      this.setState({showFooter: true})
    }, 200);
  }

  toggleExpand(){
    const consent = {...this.state.consent}
    consent.expanded = !consent.expanded;
    this.setState({consent});
  }

  showPrivacySettings(){
    const consent = {
      ...this.state.consent,
      consented: false, 
      expanded: true,
    }
    this.setState({consent});
  }

  componentDidUpdate(){
    if(typeof window !== 'undefined'){
      if(typeof document !== 'undefined'){
        if(document.location){
          const pageName = document.location.pathname;
          if(pageName !== window.sessionStorage.getItem('page')){
            if(this.state.consent.ga){
              this.triggerConsentActions();
            }
          }
        }
      }
    }
  }

  calcConsent(){
    if(typeof window !== 'undefined'){
      const userHistory  = window.localStorage.userHistory ? window.localStorage.userHistory : 'true' ;
      const userStats    = window.localStorage.userStats   ? window.localStorage.userStats   : 'true' ;
      const consent = {
        ...this.state.consent,
        userHistory: userHistory === 'true' ? true : false ,
        userStats:   userStats   === 'true' ? true : false ,
      };
      return consent;
    }
  }

  triggerConsentActions(){
    const consent = this.calcConsent();
    this.setState({consent});
    if(consent.ga){
      this.initializeGA();
    }
  }

  changeConsent(newConsent){
    const consent = {
      ...this.state.consent, 
      ...newConsent, 
      consented: true,
      expanded: false,
    };
    this.setState({ consent });
    if(typeof window !== 'undefined'){
      window.localStorage.setItem('consented'  , new Date());
      window.localStorage.setItem('userStats'  , consent.userStats);
      window.localStorage.setItem('userHistory', consent.userHistory);
    }
  }

  initializeGA(){
    if(typeof document !== 'undefined'){
      if(document.location){
        const pageName = document.location.pathname;
        window.sessionStorage.setItem('page', pageName)
        ReactGA.initialize(process.env.GAID);
        ReactGA.pageview(pageName);
      }
    }
  }

  addScrollListener(){
    if(this.props.hideHeader){
      const height = !window ? 400 :
        !window.screen ? 400 : 
        Math.min(window.innerHeight, window.screen.availHeight);
      this.setState({triggerHeight: 0.5 * height});
      window.addEventListener('scroll', this.hideBar);
    }
  }

  hideBar() {
    if(window  && this.state){
      if(window.scrollY > this.state.triggerHeight){
        if(this.state.hideHeader){
          this.setState({hideHeader: false});
        }
      } else if(window.scrollY < this.state.triggerHeight){
        if(!this.state.hideHeader){
          this.setState({hideHeader: true});
        }
      }
    }
  }

  scrollToHash(){
    const where = typeof window !== 'undefined' && window.document ? 'client' : 'server' ;
    if(where === 'server') return;

    const _scrollToHash = hash => {
      const e = document.getElementById(hash);
      if(e){
        const el = ReactDOM.findDOMNode(e)
        .getBoundingClientRect()
        if(el){
          if(el.top){
            // the timeout is so that the page loads
            // if this goes too fast, we scroll to a location
            // farther up the page
            window.scrollTo(0, el.top);
            // I tried smooth scroll here (via setInterval) and it did not work
          }
        }
      }
    };

    const hash = window.location.hash;
    if(hash && typeof hash === 'string'){
      const h = hash.slice(1,hash.length);
      if(h){
        setTimeout(()=>{
          _scrollToHash(h);
        }, 500);
      }
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideBar);
  }

  render() {

    const meta = this.state.meta;
    const header = 
      this.state.hideHeader ? 
        null : 
          <Header /> ;

    const thisUrl = process.env.THIS_URL;
    const faviconPath = `${thisUrl}/static/`;

    const footer = this.state.showFooter ?
      <Footer 
      consent            ={this.state.consent}
      showPrivacySettings={this.showPrivacySettings}
      changeConsent      ={this.changeConsent}
      toggleExpand       ={this.toggleExpand}
      post               ={this.props.post} 
      meta               ={this.props.meta}
      toggleModal        ={this.props.toggleModal} /> : null ;

    const gtmScript = <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.GTMID}');`}} /> ;

    const gtmNoScript = <noscript dangerouslySetInnerHTML={{__html:`<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTMID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} /> ;

    return <div className='frame' style={layoutStyle}>
      <Head>
        {gtmScript}
        <script dangerouslySetInnerHTML={{__html: 'function gtag(){dataLayer.push(arguments);}'}}/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta                              property='og:site_name'   content={meta.siteName}/>
        <meta name    ='twitter:card'                                content={meta.twitterCard}/>
        <meta name    ='twitter:site'                                content={meta.twitterSite} />
        <meta                              property='fb:app_id'      content={meta.fbAppId} />
        <meta                              property='og:type'        content={meta.type}/>
        <title>                                                              {meta.seo_title}</title>
        <meta                              property='og:title'       content={meta.title}/>
        <meta name    ='description'                                 content={meta.description} />
        <meta                              property='og:description' content={meta.description}/>
        <meta                              property='og:url'         content={meta.url}/>
        <meta name    ='image'                                       content={meta.image}/>
        <meta                              property="og:image"       content={meta.image} />
        <meta                              property='og:image:alt'   content={meta.alt}/>
        <meta name    ='twitter:image:alt'                           content={meta.alt}/>
        
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIF} />

        <link rel="icon" type="image/x-icon" href={`${faviconPath}favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${faviconPath}favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${faviconPath}favicon-16x16.png`} />
        <link rel="manifest" href={`${faviconPath}site.webmanifest`} />
        <link rel="mask-icon" href={`${faviconPath}safari-pinned-tab.svg`} color="#8bad33"/>
        <meta name="msapplication-TileColor" content="#8bad33"/>
        <meta name="theme-color" content="#ffffff"/>

        <title>Green Roof Diagnostics</title>
      </Head>
      {gtmNoScript}
      <style jsx global>{`
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, tt, var,
        /* sup, sup, BRAD REMOVED */
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend, caption, 
        /* table, tbody, tfoot, thead, tr, th, td, */
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 16px; /* was 100% */
          ${fontNormal} /* customized default font */
          /*font: inherit;*/
          color: ${globalFontColor}; /* Brad added */
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section, div {
          display: flex; /* was block */
        }
        body {
          line-height: 1;
        }
        ol, ul, li {
          list-style: none;
        }
        blockquote, q {
          quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        } 

        * {
          box-sizing: border-box;
        }
        div::-webkit-scrollbar,
        p::-webkit-scrollbar,
        form::-webkit-scrollbar {
          width: 0 !important;
          display: none;
        }
        div::-moz-scrollbar,
        p::-moz-scrollbar,
        form::-moz-scrollbar {
          width: 0 !important;
          display: none;
        }
        button {
          cursor: pointer;
          font: inherit;
        }
        button:focus {
          outline: none;
        }
        body,
        html {
          overflow-x: hidden;
        }
        a {
          font-size: inherit;
          color: inherit;
        }
        a:visited {
          color: inherit;
        }
        table {
          margin-bottom: 10px;
          margin-top: 10px;
        }
        .frame {
          min-height: 100vh;
          width: 100vw;
          flex-direction: column;
        }
      `}</style>
      {header}
      {this.props.children}
      {footer}
      <link href={`https://fonts.googleapis.com/css?family=${fontsToLoad}`} rel="stylesheet"/>
    </div>
  }
  
}