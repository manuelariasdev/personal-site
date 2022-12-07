import './styles.css';
import TextSpan from '../../helpers/TextSpan';
import javascript from '../../assets/js.svg'
import react from '../../assets/reactsvg.svg'
import redux from '../../assets/redux.svg'
import typescript from '../../assets/typescript.svg'
import git from '../../assets/githubsvg.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import jest from '../../assets/jest.png'
import tailwind from '../../assets/tailwind.png'
const pOpen = "<p>"
const pClose = "</p>"
const hOpen = "<h1>"
const hClose = "</h1>"


const sentence1 = "My, Myself & I".split("");
const sentence2 = "I'm Manuel".split("");
const sentence3 = "Frontend developer".split("");

export const About = () => {
  return (
    <div className='about'>
      <div className='about__leftside'>
      <div className='about__tag'><p>{hOpen}</p></div>
      <div>
    {sentence1.map((letter, index)=>{
      return(<TextSpan className='prueba' key={index}>
        {letter === " " ? "\u00A0" : letter}
      </TextSpan>
      )
    })}
      </div>

      <div className='about__tag'><p>{hClose}</p></div>

      <div className='about__tag'><p>{pOpen}</p></div>
      <p className='about__softw'>I'm a Frontend Developer located in Perú. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Well-organised person, problem solver, independent employee with high attention to detail. Fan of video games like dota 2, outdoor activities, TV series and English literature. A family person. Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
      <div className='about__tag'>{pClose}</div>
      </div>

      <div className='about__rightside'>
        <section className='slideshow'>
          <div className='content'>
            <div className='content-carrousel'>
              <figure className='shadow'><img src={javascript} width="100%"/></figure>
              <figure className='shadow'><img src={react} width="100%"/></figure>
              <figure className='shadow'><img src={redux} width="100%"/></figure>
              <figure className='shadow'><img src={typescript} width="100%"/></figure>
              <figure className='shadow'><img src={git} width="100%"/></figure>
              <figure className='shadow'><img src={html} width="100%"/></figure>
              <figure className='shadow'><img src={css} width="100%"/></figure>
              <figure className='shadow'><img src={jest} width="100%"/></figure>
              <figure className='shadow'><img src={tailwind} width="100%"/></figure>

            </div>

          </div>

        </section>
      </div>
      
    </div>
    
  
  )
}
