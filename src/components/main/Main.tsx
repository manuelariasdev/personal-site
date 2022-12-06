
import manuel from '../../assets/M.jpg'
import './styles.css';
import TextSpan from '../../helpers/TextSpan';
const pOpen = "<p>"
const pClose = "</p>"
const hOpen = "<h1>"
const hClose = "</h1>"

const sentence1 = "Hi,".split("");
const sentence2 = "I'm Manuel".split("");
const sentence3 = "Frontend developer".split("");
console.log(sentence1);

export const Main = () => {
  
  return (
    <div className='main'>
      <div className='main__tag'><p>{hOpen}</p></div>
      <div>
    {sentence1.map((letter, index)=>{
      return(<TextSpan key={index}>
        {letter === " " ? "\u00A0" : letter}
      </TextSpan>
      )
    })}
      </div>

      <div>
    {sentence2.map((letter, index)=>{
      return(<TextSpan key={index}>
        {letter === " " ? "\u00A0" : letter}
      </TextSpan>
      )
    })}
      </div>

      <div>
    {sentence3.map((letter, index)=>{
      return(<TextSpan key={index}>
        {letter === " " ? "\u00A0" : letter}
      </TextSpan>
      )
    })}
      </div>
      <div className='main__tag'><p>{hClose}</p></div>

      <div className='main__tag'><p>{pOpen}</p></div>
      <p className='main__softw'>Software Engineer / Web developer</p>
      <div className='main__tag'>{pClose}</div>
    </div>
    
  
  )
}
