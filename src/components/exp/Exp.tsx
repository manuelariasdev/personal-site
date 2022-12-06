import './styles.css';
import TextSpan from '../../helpers/TextSpan';
const pOpen = "<p>"
const pClose = "</p>"
const hOpen = "<h2>"
const hClose = "</h2>"


const sentence1 = "Skills &".split("");
const sentence2 = "Experience".split("");


export const Exp = () => {
  return (
    <div className='exp'>
      <div className='exp__leftside'>

      
      <div className='exp__tag'><p>{hOpen}</p></div>
      <div>
    {sentence1.map((letter, index)=>{
      return(<TextSpan className='prueba' key={index}>
        {letter === " " ? "\u00A0" : letter}
      </TextSpan>
      )
    })}
      </div>

      <div>
    {sentence2.map((letter, index)=>{
      return(<TextSpan className='prueba' key={index}>
        {letter === " " ? "\u00A0" : letter}
      </TextSpan>
      )
    })}
      </div>

      <div className='exp__tag'><p>{hClose}</p></div>

      <div className='exp__leftlower'>
      <div className='exp__tag'>{pOpen}</div>
      <p className='exp__leftlowe--text'>Since beginning my journey as a front-end developer nearly 3 years ago, I've been working 
            in different projects for agencies, and information technology companies, and collaborated
            with talented people to create web products for both bussines and consumer use.
      </p>
      <p className='exp__leftlowe--text'>
           I create successful responsive websites that are fast, easy to use, and built with best practices. 
           The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, features, animations, and coding interactive layouts.
      </p>

      <div className='exp__leftlower--link'>
           <p>Visit my <a className='exp__leftlower--shake'  href='https://www.linkedin.com/in/eduardomaz/' target='_blank'>LinkedIn</a> profile for more details.</p>
      </div>
      <div className='exp__tag'>{pClose}</div>
      </div>
       
      </div>

      <div className='exp__rightside'>
      <div className='exp__rightside--skillsbar'>
        <div className='exp__skills'>Frontend</div>
        <footer className='exp__footerSkill'>
          <div className='exp__frontendDiv'></div>
        </footer>
      </div>
      <div className='exp__rightside--skillsbar'>
        <div className='exp__skills'>ReactJs</div>
        <footer className='exp__footerSkill'>
          <div className='exp__react'></div>
        </footer>
      </div>
      <div className='exp__rightside--skillsbar'>
        <div className='exp__skills'>Redux</div>
        <footer className='exp__footerSkill'>
          <div className='exp__redux'></div>
        </footer>
      </div>
      <div className='exp__rightside--skillsbar'>
        <div className='exp__skills'>Javascript</div>
        <footer className='exp__footerSkill'>
          <div className='exp__javascript'></div>
        </footer>
      </div>
      <div className='exp__rightside--skillsbar'>
        <div className='exp__skills'>Html</div>
        <footer className='exp__footerSkill'>
          <div className='exp__html'></div>
        </footer>
      </div>
      <div className='exp__rightside--skillsbar'>
        <div className='exp__skills'>Css</div>
        <footer className='exp__footerSkill'>
          <div className='exp__css'></div>
        </footer>
      </div>
      <div className='exp__rightside--skillsbar'>
        <div className='exp__skills'>Git</div>
        <footer className='exp__footerSkill'>
          <div className='exp__git'></div>
        </footer>
      </div>
      <div className='pt-4'>
        <div className='exp__rightside--lower'>
           <h2 className='text-start'>
             Fronted Developer
           </h2>
           <p className='text-start'>I've been working on a project called GloMo BBVA as a front-end developer to create
              mobile applications for Latin American countries.
            </p>
          </div>
      </div>

    </div>
    </div>
    
  
  )
}
