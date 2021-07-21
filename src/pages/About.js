import aboutimg from './../images/3D-presentation.jpg';
import './../css/App.css';

export default function About() {
  return (
    <div className='App about'>
      <header className='App-header'>
        <div>
          {/* Hero image with heroimg class to avoid horizonta scroll */}
          <div>
            <img src={aboutimg} className='heroimg' alt='arroba Ad' />
          </div>
          <h1>About Me</h1>
          <h3>UI & UX, WEB AND GRAPHIC DESIGNER</h3>
          <p>
            My passion and enthusiasm for work, combined with my strong design background and creativity enables me to produce high-quality interactive graphic designs. From choosing images, typefaces
            and colours that align with corporate guidelines while considering multiple points of view, I champion the overall vision to achieve the company’s mission through design.
          </p>
        </div>
      </header>
    </div>
  );
}
