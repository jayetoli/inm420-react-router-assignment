import contimg from './../images/avengers.jpg';
import './../css/App.css';

export default function Contact() {
  return (
    <div className='App contact'>
      <header className='App-header'>
        <div>
          {/* Hero image with heroimg class to avoid horizonta scroll */}
          <div>
            <img src={contimg} className='heroimg' alt='arroba BSM' />
          </div>
          <h1>Contact Me</h1>
          <h3>DROP ME A LINE</h3>
          <p>
            I will try to answer your mail as soon as possible. Thank you for your interest in my work.&nbsp;&nbsp;
            <a href='mailto:me@mysite.com'>e-mail me</a>
          </p>
        </div>
      </header>
    </div>
  );
}
