import { 
	useEffect,
	useState }              from 'react';
import { 
  formInputField, 
  purple, 
  disabledButtonColor }   from '../../helpers/styles-all';
import content            from '../../helpers/content';       
import PasswordField      from './password-field';
import ResponseLine       from './response-line';
import { 
  toggleConsent, 
  hasConsented }          from './handle-consent';   
import { isValidEmail } from 'conjunction-junction/build/primitives';
import PayPal from './paypal';
import { getRegistrationInfo, postUser } from './helpers';
import TooltipCss from '../_general/tooltip-css';
import { isPrimitiveNumber } from 'conjunction-junction/build/basic';

const thisUrl = process.env.THIS_URL;

const userAccountConsentIsRequired = true; // i.e. for this form, ALWAYS check to see if userAccountConsent is set, versus normal cookies

const privacy = content.privacy || {};
const lastUpdate = privacy.lastUpdate;

const isValidPassword = pw => {
	if(typeof pw !== 'string'){
		return false;
	}
	if(pw.length > 25){
		return true;
	}
	const reShort = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
	return reShort.test(pw);
};

const isValidUsername = username => {
	if(typeof username !== 'string'){
		return false;
	}
	if(username.length >= 8){
		return true;
	}
};

const accountKeys = [
	{ fieldName: 'username',  required: isValidUsername, label: 'username (8+ characters)',  },
	{ fieldName: 'firstName', required: true,            label: 'first name', name: 'given-name' },
	{ fieldName: 'lastName',  required: true,            label: 'last name', name: 'family-name' },
	{ fieldName: 'password',  required: isValidPassword, label: 'password (>25 characters, or >8 combo of CAPS, lowercase, number, symbol)', name: 'new-password' },
	{ fieldName: 'password2', required: isValidPassword, label: 're-type password',  },
	{ fieldName: 'email',     required: isValidEmail,    label: 'email',  },
	{ fieldName: 'phone',     required: false,           label: 'phone', name: 'tel' },
	{ fieldName: 'address',   required: false,           label: 'street address', name: 'address-line1' },
	{ fieldName: 'city',      required: true,            label: 'city', name: 'address-level2' },
	{ fieldName: 'state',     required: true,            label: 'state/province', name: 'address-level1' },
	{ fieldName: 'country',   required: true,            label: 'country', },
	{ fieldName: 'company',   required: true,            label: 'company/agency', name: 'organization' },
	{ fieldName: 'title',     required: true,            label: 'position / job title', name: 'organization-title' },
];

export default function UserCreate(props) {

	const [isValid, setIsValid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [permissionsArray, setPermissionsArray] = useState([]);
  const [allPermissionsHash, setAllPermissionsHash] = useState({});
  const [permissionsHash, setPermissionsHash] = useState({});
  const [amountDue, setAmountDue] = useState(0);
	
	const [state,setState] = useState({ 
		username: '',
		firstName: '',
		lastName: '',
		password: '',
		password2: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		state: '',
		country: '',
		company: '',
		title: '',
		userHasConsented: false,
		mode: 'create',
	});

	useEffect(()=>{
		getRegistrationInfo()
		  .then(permissionsArray=>{
				setPermissionsArray(permissionsArray);
				const _allPermissionsHash = {};
				permissionsArray.forEach(p=>{
					_allPermissionsHash[p.permission] = p;
				})
				setAllPermissionsHash(_allPermissionsHash);
				setLoaded(true);
			})
			.catch(err=>{
				console.error(err);
			});
	}, [loaded]);

	const togglePermission = p => {
		const _permissionsHash = {...permissionsHash};
		if(_permissionsHash[p.permission]){
			delete _permissionsHash[p.permission];
			if(p.subOf){
				delete _permissionsHash[p.subOf];
			}
			if(Array.isArray(p.parentOf)){
				p.parentOf.forEach(p2=>{
					delete _permissionsHash[p2];
				})
			}
		} else {
			_permissionsHash[p.permission] = p;
			if(p.subOf && allPermissionsHash[p.subOf]){
				console.log('p.subOf', p.subOf,'allPermissionsHash[p.subOf]',allPermissionsHash[p.subOf])
				_permissionsHash[p.subOf] = {...allPermissionsHash[p.subOf]};
			}
		}

		let _amountDue = 0;
		for(let k in _permissionsHash){
			console.log(k, '_permissionsHash[k]',_permissionsHash[k],'allPermissionsHash[k]',allPermissionsHash[k])
			if(isPrimitiveNumber(allPermissionsHash[k].annualFee)){
				_amountDue += allPermissionsHash[k].annualFee;
			}
		}
		setAmountDue(_amountDue);
		setPermissionsHash(_permissionsHash);
	};

	const handleChange = (event, fieldName) => {
		const newState = {...state, [fieldName]: event.target.value}
		setState(newState);
		validateUser(newState);
	}

	const toggleConsentHere = () => {
    toggleConsent(userAccountConsentIsRequired);
    setState({...state, userHasConsented: !state.userHasConsented});
	}
	
	const validateUser = state => {
		let isValid = amountDue > 0;
		if(!isValid){
			setIsValid(isValid);
			return;
		}
		accountKeys.forEach(k=>{
			const {fieldName, required} = k;
			if(typeof required === 'function'){
				const fieldIsValid = required(state[fieldName]);
				if(!fieldIsValid){
					isValid = false;
				}
			} else if(required){
				if(!state[fieldName]){
					isValid = false;
				}
			}
		});
		if(state.password !== state.password2){
			isValid = false;
		}
		setIsValid(isValid);
	}

  const submitRegistration = e => {
		e.preventDefault();
		console.log('posting',state)
    return postUser({...state, permissionsHash})
      .then(user=>{
				console.log(user)
        if(user.authToken){
					setState({
						...state, 
						mode:          'pay',
						loginError:    false,
						loginResponse: null
					})
        } else {
          setState({
						...state,
            loginError:     true,
            loginResponse: `Error: ${user.message}`,
          });
        }
      })
      .catch(err=>{
        console.error('login err',err);
      })
  };

    const disableClass = 
      !state.userHasConsented ? 
			'disabled' :
			isValid ?
			'' :
			'disabled';

    const loginForm = state.mode !== 'create' ? null :
		<form className='login-form' 
      onSubmit={e=>submitRegistration(e)}>
			{
				accountKeys.map((k,i)=>{
					const {fieldName, required, label} = k;
					if(fieldName === 'password' || fieldName === 'password2'){
						return <label key={i} className='field-and-label'>
							<PasswordField 
							key         ={i}
							fieldName   ={fieldName}
							password    ={state[fieldName]}
							handleChange={handleChange} />
							{label}
						</label>
					}
					if(required === true || typeof required === 'function'){
						return  <label key={i} className='field-and-label'>
							<input 
								name       ={k.name || k.fieldName}
								type       ='text'
								placeholder={label}
								className  ='input-field'
								value      ={state[fieldName]}
								onChange   ={e=>handleChange(e,fieldName)} 
								required />
								{label}
							</label>
					}
					return  <label key={i} className='field-and-label'>
						<input 
							name       ={k.name || k.fieldName}
							type       ='text'
							placeholder={label}
							className  ='input-field'
							value      ={state[fieldName]}
							onChange   ={e=>handleChange(e,fieldName)} />
							{label}
						</label>
					})
			}

			<div className='subscriptions'>
				<p>Subscriptions:</p>
				{
					permissionsArray.map((p,i)=>{
						const checked = !!permissionsHash[p.permission];
						return <label 
							key      ={i}
							className='subscription-label-and-field'>
							<input 
								type       ="checkbox" 
								className  ='input-field2'
								checked    ={checked}
								onChange   ={()=>togglePermission(p)} /> 
							<div className='subscription-label tooltip'>
							  <p>{p.label}</p>
								<p>${p.annualFee} annually</p>
								<div className='popover'>
									<p>{p.desc}</p>
								</div>
							</div>
						</label>
					})
				}
				<p>Total: ${amountDue} (annually)</p>
			</div>

      <label className='consent-label'>
        <input 
					type       ="checkbox" 
					className  ='input-field2'
					checked    ={state.consented}
					onChange   ={()=>toggleConsentHere()}
					required /> 
				I accept the User Account {` `}
				<a href={`${thisUrl}/privacy#user-accounts`} target='_blank'>
					Terms and Conditions (last updated {lastUpdate}).
				</a>
			</label>

      <button className={`submit-button ${disableClass}`} type="submit">
        Create Account and Proceed to Payment
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
						margin-bottom: 5px;
          }
        }
        .submit-button {
					${formInputField}
					margin-top: 25px;
        }
        .submit-button:hover {
          background-color: ${purple};
          color: white;
				}
				.field-and-label {
					display: flex;
					flex-direction: column;
					font-size: 12px;
					margin-bottom: 15px;
					width: 250px;
				}
        .consent-label {
          ${formInputField}
          line-height: 18px;
          cursor: pointer;
          border: none;
        }
        .disabled, 
        .disabled:hover {
          background-color: ${disabledButtonColor};
          color: #888;
				}
				.subscriptions {
					flex-direction: column;
					width: 250px;
				}
				.subscription-label-and-field {
					display: flex;
					flex-direction: row;
					margin-bottom: 8px;
				}
				.subscription-label {
					flex-direction: column;
					margin-right: 12px;
				}
      `}</style>
    </form>

	const errorColor = '#74bf08';

	const loginResponse = 
		state.mode !== 'create' ? null :
		state.loginError ? <ResponseLine
		message={state.loginResponse}
		color={errorColor} /> : null ;

	const paymentForm = state.mode === 'pay' ?
	<PayPal value={500} /> : null ;
			
	return <div className='login-outer-container'>
		{loginForm}
		{loginResponse}
		{paymentForm}
		<TooltipCss />
		<style jsx>{`
			.login-outer-container {
				flex-direction: column;
				align-items: center;
				padding-top: 75px;
				width: 100%;
				min-height: 100vh;
				align-items: center;
				margin-bottom: 100px;
			}
		`}</style>
	</div>;
};