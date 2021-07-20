import web1 from './../images/web_dekorpisos.jpg';
import web2 from './../images/web_desarol.jpg';
import web3 from './../images/web_duran.jpg';
import './../css/App.css';

export default function Projects() {
  return (
    <div className='App projects'>
      <header className='App-header'>
        <div>
          <div>
            <img src={web1} className='imgPortfolio' alt='web 1' />
            <img src={web2} className='imgPortfolio' alt='web 2' />
            <img src={web3} className='imgPortfolio' alt='web 3' />
          </div>
          <h1>Last Projects</h1>
          <h3>UI & UX, WEB GRAPHIC DESIGNER</h3>
          <p>Strong time management and effective interpersonal communication skills have enabled me to succeed; I enjoy teamwork, and interacting with multidisciplinary teams feeds my creativity.</p>
        </div>
      </header>
    </div>
  );
}
