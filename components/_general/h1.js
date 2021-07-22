import { globalHeaderColor } from "../../helpers/styles-all";

export default function H1(props){
  return <h1 className='h1'
    style={{
      width: '100%',
      fontSize: 30,
      textAlign: 'center',
      color: globalHeaderColor,
      marginBottom: 20,
      marginTop: 80,
    }}>
    {props.text}
  </h1>
}