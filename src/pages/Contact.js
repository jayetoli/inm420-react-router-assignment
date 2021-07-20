import logo from './../images/logo.svg';
import './../css/App.css';

export default function Contact() {
  return (
    <div className='App contact'>
      <header className='App-header'>
        <div>
          <h1>Contact Me</h1>
          <h3>DROP ME A LINE</h3>
          <p>
            I will try to answer your mail as soon as possible. Thank you for your interest in my work
            <a href='mailto:someone@yoursite.com'>Email Me</a>
          </p>
        </div>
      </header>
    </div>
  );
}
