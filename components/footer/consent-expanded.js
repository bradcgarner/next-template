import Link              from 'next/link';
import { 
  hotButton, 
  hotButtonHover, 
  red, 
  fontNormal,
  fontFinePrint,
  fontOnColorColor,
  accentFontColor,
  fontOnColorColorHover} from '../../helpers/common-styles';
import { privacySave, 
  privacyGoTo }          from '../../helpers/tag-manager';
import content           from '../../helpers/content';

export default class ConsentExpanded extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      selections: [
        {
          key:      'essential',
          label:    'essential',
          editable: false,
          value:    true,
          text:     'Essential cookies record your answers to these selections so that we know not to ask you again for a while.'
        },
        {
          key:      'analytics',
          label:    'anonymous analytics',
          editable: false,
          value:    true,
          text:     'This site uses Google Analytics to provide us with anonymous information about how our site is being used. This is valuable feedback so we can keep improving the site.  This data does not include any personally identifiable information.'
        },
        {
          key:     'userHistory',
          label:   'user experience',
          editable: true,
          value:    !this.props.consent ? true : this.props.consent.userHistory,
          text:     'By checking this option, you allow your browser to remember which content you have already viewed on this site, so that the site can make better recommendations for you. We never see this information. This information stays in your browser.  If you uncheck this box, your experience may be more static.'
        },
        {
          key:     'userStats',
          label:   'user statistics',
          editable: true,
          value:    !this.props.consent ? true : this.props.consent.userStats,
          text:     'By checking this option, you allow us to include in our Google Analytics information your IP address, the unique user ID assigned to you by Google, and other potentially identifiable information.  We use this data to identify repeat visitors versus first-time visitors, and to estimate the demographic composition of our audience.  This data never includes personally sensitive information such as your name.'
        }
      ]
    };
  }

  toggleValue(i){
    const selections = [...this.state.selections];
    const s = {...selections[i]};
    s.value = !s.value;
    selections[i] = s;
    this.setState({selections})
  }

  submitForm(e){
    e.preventDefault();
    const consent = {};
    this.state.selections.forEach(s=>consent[s.key] = s.value);
    this.changeConsent(consent);
  }

  changeConsent(input){
    const cCs = 
      typeof this.props.changeConsent === 'function' ? 
      this.props.changeConsent : 
      ()=>{} ;
    cCs(input);
  }

  render() {

    const win = typeof window !== 'undefined' ? window : {} ;
    const path = win.location && win.location.pathname ? win.location.pathname : '' ;
    const pathClass = path === '/' ? 'home' : path ? path : 'no-path';
  
    const privacy = content.privacy;

    const header = <div className='intro'>
      <p className="text">
        This site uses cookies to improve your experience.
      </p>
      <p className="text">
        We do not share your data with 3rd parties.
      </p>
      <p className="text">
        We do not use on-site advertising.
      </p>
      <button className={`link-button privacy ${privacyGoTo} ${pathClass}-banner ${this.props.consent.consented?true:false}-${this.props.consent.userHistory}-${this.props.consent.userStats}`} >
        <Link href={`/privacy`}>
          <a className='link'>{privacy.policyExpandedLabel}</a> 
        </Link>
      </button>
      <style jsx>{`
        .intro {
          flex-direction: column;
          align-items: center;
          margin-bottom: 15px;
        }
        .text {
          margin-bottom: 8px;
          font-size: 14px;
          color: ${fontOnColorColor};
          text-align: center;
        }
        .link-button {
          background-color: transparent;
          border: none;
        }
        .link {
          ${fontNormal}
          font-size: 11px;
          font-style: italic;
          font-weight: normal;
          color: ${fontOnColorColor};
          text-decoration: none;
        }
        .link:hover {
          color: ${fontOnColorColorHover};
        }
      `}</style>
    </div>

    const inputs = this.state.selections.map((s,i)=>{
      const editable = s.editable ? 'editable-label' : '' ;
      return <div className='consent-details-container'
        key={i}>
        <label 
          className={`consent-input-label ${editable}`}>
          {s.editable ? 
          <input className='consent-input'
            name={s.key}
            type='checkbox'
            checked={this.state.selections[i].value}
            onChange={()=>this.toggleValue(i)} /> :
          <input className='consent-input'
            name={s.key}
            type='checkbox'
            checked={this.state.selections[i].value}
            onChange={()=>this.toggleValue(i)}
            disabled /> }
          {s.label}
        </label>
        <p className='text'>
          {s.text}
        </p>
        <style jsx>{`
          .consent-details-container {
            margin-bottom: 12px;
          }
          .consent-input-label {
            width: 200px;
            flex-grow: 0;
            flex-shrink: 0;
          }
          .editable-label:hover {
            color: ${accentFontColor};
          }
          .consent-input-label,
          .text {
            ${fontFinePrint}
            font-size: 12px;
            color: ${fontOnColorColor};
          }
          .text {
            margin-right: 20px;
            line-height: 18px;
          }
          @media (max-width: 500px) {
            .consent-details-container {
              flex-direction: column;
            }
          }
        `}</style>
    </div>
    });

    const footer = <div className='button-container'>
      <button
        className={`ok-button privacy ${privacySave} ${pathClass}-banner ${this.props.consent.consented?true:false}-${this.props.consent.userHistory}-${this.props.consent.userStats}`}
        type='submit'
        onClick={e=>this.submitForm(e)}>
        Save Choices
      </button>
      <p className="text">
        After exiting, to return here click "privacy settings" in the footer of any page.
      </p>
      <style jsx>{`
        .button-container {
          align-items: center;
        }
        .ok-button {
          ${hotButton}
          width: 190px;
          margin-right: 10px;
          flex-grow: 0;
          flex-shrink: 0;
          height: 35px;
        }
        .ok-button:hover {
          ${hotButtonHover}
        }
        .text {
          color: ${fontOnColorColor};
        }
        @media (max-width: 400px) {
          .button-container {
            flex-direction: column;
          }
          .text {
            margin-top: 15px;
          }
        }
      `}</style>
    </div>

    return <div className="consent-inner" 
      aria-label="notice-message">
      <form className='consent-form'>
        {header}
        {inputs}
        {footer}
      </form>
      <style jsx>{`
        .consent-inner {
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  }

}