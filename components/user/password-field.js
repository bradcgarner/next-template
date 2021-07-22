import { formInputField } from "../../helpers/styles-all";
import { Eye } from "something-rather-iconic";
import { useState } from "react";

export default function PasswordField(props) {

  const [showPw,setShowPw] = useState(false);

  return <div className='password-container'>
  <input 
    type={showPw ? 'text' : 'password'} 
    placeholder='password'
    className='input-field'
    value={props.password}
    onChange={e=>props.handleChange(e, props.fieldName)}
    required />
  <button
    className='eyeButton'
    type='button'
    onClick={()=> setShowPw(!showPw)} >
  <Eye style={{height: 22, width:22}}/>
  </button>
  <style jsx>{`
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
    .password-container {
      width: 250px;
      position: relative;
    }
    .eyeButton {
      background-color: transparent;
      border: none;
      position: absolute;
      top: 6px;
      right: 7.5px;
      height: 15px;
      width: 30px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .eyeButton:focus {
      outline: 0;
    }
    .eyeButton {
      fill:  ${showPw ? 'blue' : '#ccc'};
      color: ${showPw ? 'blue' : '#ccc'};
    }
    .eyeButton:hover { 
      color: green;
      fill: green;
    }
  `}</style>
</div>
};