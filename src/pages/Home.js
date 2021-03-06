import homeimg from './../images/01_arroba_cover.jpg';
import './../css/App.css';

export default function Home() {
  return (
    <div className='App home'>
      <header className='App-header'>
        <div>
          {/* Hero image with heroimg class to avoid horizonta scroll */}
          <div>
            <img src={homeimg} className='heroimg' alt='arroba BSM' />
          </div>
          <h1>Jairo Torres</h1>
          <h3>PORTFOLIO</h3>
          <p>
            From initial design concepts and development throughout to delivering the final interactive product, I ensure the client’s vision and requirements are represented and brought to life. I am
            a dedicated and detail-oriented team player, capable of working in fast-paced and high-profile environments while maintaining a high level of professionalism in every aspect of my role.
          </p>
        </div>
      </header>
    </div>
  );
}
