import { fontReading } from "../../helpers/styles-all";

export default function ResponseLine(props){
  return <h6 className='response'>
  {props.message}
  <style jsx>{`
    .response {
      text-align: center;
      max-width: 500px;
      line-height: 20px;
      ${fontReading};
      font-size: 16px;
      margin-left: auto;
      margin-right: auto;
      color: ${props.color};
      margin-bottom: 15px;
    }
  `}</style>
</h6>
} 