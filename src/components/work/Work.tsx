import './styles.css';
import TextSpan from '../../helpers/TextSpan';
import spotify from '../../assets/sf.png';
import hackerNews from '../../assets/hn.png'
const pOpen = "<p>"
const pClose = "</p>"
const hOpen = "<h2>"
const hClose = "</h2>"


const sentence1 = "Skills &".split("");
const sentence2 = "Experience".split("");

export const Work = () => {
  return (
    <div className='work'>
    <div className='container__background-triangle'>
         <div className="triangle triangle1"></div>
         <div className="triangle triangle2"></div>
         <div className="triangle triangle3"></div>
    </div>
    <div className='work__container'>
      <div className='work___container--cards'>
        <div className='work___container--card'>
          <a href='https://react-spotify-mu.vercel.app/' target='_blank'>
          <div className='work__cover--card'>
              <img src={spotify} alt='spotify'/>
            </div>
            <h2>Spotify</h2>
            <p>A real simulation about Spotify, using official API from Spotify team, using redux.</p>
            <hr/>
            <div className='work__footer--card'>
              <h3 className='user_name'>Manuel developer</h3>
            </div>
          </a>
        </div>
        
        <div className='work___container--card'>
          <a href='https://react-spotify-mu.vercel.app/' target='_blank'>
          <div className='work__cover--card'>
              <img src={hackerNews} alt='spotify'/>
            </div>
            <h2>Hacker News</h2>
            <p>A news portal about different frameworks in frontend development, using context.</p>
            <hr/>
            <div className='work__footer--card'>
              <h3 className='user_name'>Manuel developer</h3>
            </div>
          </a>
        </div>

        

      </div>

    </div>
    </div>
  )
}
