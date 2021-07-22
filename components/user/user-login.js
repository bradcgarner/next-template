import React              from 'react';
import Link               from 'next/link';
import { 
  formInputField, 
  modalBackground, 
  purple, 
  fontReading,
  disabledButtonColor }   from '../../helpers/styles-all';
import content            from '../../helpers/content';       
import PasswordField      from './password-field';
import ResponseLine       from './response-line';
import { 
  login, 
  requestPwReset, 
  setNewPassword }        from './helpers';
import { 
  toggleConsent, 
  hasConsented }          from './handle-consent';   

const thisUrl = process.env.THIS_URL;

const userAccountConsentIsRequired = true; // i.e. for this form, ALWAYS check to see if userAccountConsent is set, versus normal cookies

const privacy = content.privacy || {};
const lastUpdate = privacy.lastUpdate;

export default class UserLogin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      password1: '',
      password2: '',
      email: '',
      resetRequested: false,
      resetResponse: '',
      resetError:    false,
      reset:         true,
      errorColor: '#74bf08', //'#efe086', // this is detail roots if we want to import later...
      isConsentSession:  !hasConsented(userAccountConsentIsRequired),
      userHasConsented:   hasConsented(userAccountConsentIsRequired),
    };
    this.reset       =this.reset.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  login(e){
    e.preventDefault();

    return login(this.state.username, this.state.password)
      .then(user=>{
        if(user.authToken){

          if(user.pwReset){
            this.setState({
              reset:          true,
              authToken:      user.authToken,
              firstName:      user.firstName,
              permissions:    user.permissions,
              userId:         user.id,
              resetResponse:  '',
              resetError:     false,
              resetRequested: false,
              loginError:     false,
              loginResponse:  '',
            });
          } else {
            if(typeof this.props.logUserIn === 'function'){
              // this component will unmount, so no need
              // to update state
              this.props.logUserIn(true);     
            } else {
              console.error('this.props.logUserIn is not a function');
            }
          }
        } else {
          this.setState({
            resetResponse:  '',
            resetError:     false,
            resetRequested: false,
            loginError:     true,
            loginResponse: `Error: ${user.message}`,
          });
        }
        
        if(this.state.userHasConsented){
          this.setState({isConsentSession: false});
        } else {
          this.setState({isConsentSession: true});
        }

      })
      .catch(err=>{
        console.warn('login err',err);
      })
  }

  toggleConsent(){
    toggleConsent(userAccountConsentIsRequired);
    this.setState({userHasConsented: !this.state.userHasConsented});
  }

  submitNewPassword(e){
    e.preventDefault();
    if(this.state.password1 !== this.state.password2) return;
    if(!this.state.password1) return;
    return setNewPassword({
      password:    this.state.password1, 
      id:          this.state.userId, 
      authToken:   this.state.authToken,
      permissions: this.state.permissions,
    })
    .then(user=>{
      const success = user.id && !user.pwReset;
      if(success) {
        this.setState({
          newPasswordError: '',
        });
        if(this.state.authToken){
          window.localStorage.setItem('authToken',  this.state.authToken);
        }
      } else {
        this.setState({
          newPasswordError: user.error,
        });
      }
      if(typeof this.props.logUserIn === 'function'){
        this.props.logUserIn(success);     
      } else {
        console.error('this.props.logUserIn is not a function');
      }
    })
  }

  handleChange(event, key){
    this.setState({
      [key]: event.target.value,
    })
  }

  reset(e){
    e.preventDefault();
    return requestPwReset(this.state.email)
    .then(response=>{
      this.setState({
        resetRequested: true,
        resetResponse: response.message,
        resetError:    response.error,
      });
    })
  }
  
  render() {

    const disableClass = 
      !this.state.userHasConsented && this.state.isConsentSession ? 
      'disabled' :
      '' ;

    const meta = this.props.meta || {};

    const pageId = <div className='page-id-div'>
      <p className='page-id'>{meta.h1Tag} is a password-protected page.</p>
      <p className='page-id'>Please enter your credentials below.</p>
      <p className='page-id'>If you believe you received this message in error, please {` `}
        <Link prefetch={false} href='/contact'>
          <span className='contact-link'>
            contact us.
          </span>
        </Link>
      </p>
      <style jsx>{`
        .page-id-div {
          margin-bottom: 25px;
          flex-direction: column;
          padding-top: 25px;
        }
        .page-id {
          text-align: center;
          max-width: 500px;
          line-height: 18px;
          ${fontReading};
          font-size: 16px;
          margin: auto;
          color: #ccc;
          margin-bottom: 5px;
        }
        .contact-link {
          cursor: pointer;
          color: inherit;
        }
        .contact-link:hover {
          color: white;
          text-decoration: underline;
        }
      `}</style>
    </div>

    const loginForm = <form className='login-form' 
      onSubmit={e=>this.login(e)}>
      <input 
        type       ="text" 
        placeholder='username (not email)'
        className  ='input-field'
        value      ={this.state.username}
        onChange   ={e=>this.handleChange(e,'username')}
        required />
      <PasswordField 
        fieldName   ='password'
        password    ={this.state.password}
        handleChange={this.handleChange} />
      {
        this.state.isConsentSession ?
          <label className='consent-label'>
          <input 
            type       ="checkbox" 
            className  ='input-field2'
            checked    ={this.state.consented}
            onChange   ={()=>this.toggleConsent()}
            required /> 
          I accept the User Account {` `}
            <a href={`${thisUrl}/privacy#user-accounts`} target='_blank'>
              Terms and Conditions (last updated {lastUpdate}).
            </a>
          </label>:
        null 
      }
      <button className={`submit-button ${disableClass}`} type="submit">
        Log In
      </button>
      <style jsx>{`
        .login-form {
          display: flex;
          margin: 10px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .input-field:focus,
        .input-field {
          ${formInputField}
          height: 40px;
        }
        @media (min-width: 500px){
          .input-field:focus,
          .input-field {
            height: 32px;
          }
        }
        .submit-button {
          ${formInputField}
        }
        .submit-button:hover {
          background-color: ${purple};
          color: white;
        }
        .consent-label {
          ${formInputField}
          color: white;
          line-height: 18px;
          cursor: pointer;
          border: none;
        }
        .disabled, 
        .disabled:hover {
          background-color: ${disabledButtonColor};
          color: #888;
        }
      `}</style>
    </form>

    const loginResponse = this.state.loginError ? <ResponseLine
      message={this.state.loginResponse}
      color={this.state.errorColor} /> : null ;

    const misMatch = this.state.password1 !== this.state.password2;
    const isLongEnough = typeof this.state.password1 === 'string' && this.state.password1.length >= 8;

    const resetForm = this.state.reset && this.state.authToken ?
      <div className='login-container'>   
        <ResponseLine
          message={`Hey, ${this.state.firstName}, looks like you need to reset your password.`}
          color={this.state.errorColor} />      
        <form className='reset-form' 
          onSubmit={e=>this.submitNewPassword(e)}>
          <PasswordField 
            fieldName='password1'
            password={this.state.password1}
            handleChange={this.handleChange} />
          <PasswordField 
            fieldName='password2'
            password={this.state.password2}
            handleChange={this.handleChange} />
          <button disabled={misMatch || !this.state.password1} 
            className='submit-button' 
            type="submit">
            Reset
          </button>
        </form>
        { 
          misMatch ? <ResponseLine
            message={`Passwords do not match`}
              color={this.state.errorColor} /> :
          !isLongEnough ? <ResponseLine
            message={`Password must be at least 8 characters`}
            color={this.state.errorColor} /> :
          this.state.newPasswordError ? <ResponseLine
            message={`Error resetting password: ${this.state.newPasswordError}`}
            color={this.state.errorColor} /> :
          null 
        }
        <style jsx>{`
          .login-container {
            display: flex;
            flex-direction: column;
            margin: 10px;
            margin-top: 25px;
            justify-content: center;
            align-items: center;
          }
          .login-form {
            align-items: center;
          }
          .submit-button {
            ${formInputField}
          }
          .password-warning {
            color: ${this.state.errorColor};
            text-align: center;
            margin-top: 7px;
            margin-bottom: 7px;
          }
        `}</style>
      </div> : null ;

    const resetRequestForm = <form className='pw-reset-form' onSubmit={this.reset}>
      <input
        type="text" 
        value={this.state.email}
        onChange={e=>this.handleChange(e,'email')}
        className='input-field'
        placeholder='email'
        required />
      <button className='submit-button' type="submit">Email Me A Password</button>
      <style jsx>{`
        .pw-reset-form {
          display: flex;
          margin: 10px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 100px;
        }
        .input-field {
          ${formInputField}
          height: 40px;
        }
        @media (min-width: 500px){
          .input-field:focus,
          .input-field {
            height: 32px;
          }
        }
        .submit-button {
          ${formInputField}
        }
        .submit-button:hover {
          background-color: ${purple};
          color: white;
        }
      `}</style>
    </form>

    const resetRequested = 
      !this.state.resetRequested ?
      false :
      this.state.resetResponse ?
      true : 
      'pending' ;

    const resetMessage = !resetRequested ?
      'if you do not know your username or password, enter your email address above, then click the reset button.' :
      this.state.resetResponse ?
      this.state.resetResponse :
      '...password reset request pending...';

    const resetResponse = <ResponseLine
      message={resetMessage}
      color={this.state.resetError ? 
        this.state.errorColor : 
        this.state.resetRequested ? 
        'white' : 
        '#ccc'} />

    return <div className='login-outer-container'>
      {pageId}
      {loginForm}
      {loginResponse}
      {resetForm}
      {resetRequestForm}
      {resetResponse}
      <style jsx>{`
        .login-outer-container {
          flex-direction: column;
          align-items: center;
          padding-top: 75px;
          width: 100%;
          min-height: 100vh;
          z-index: 9999;
          align-items: center;
          background-color: ${modalBackground};
        }
      `}</style>
    </div>;
  }
}