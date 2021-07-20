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
            I will try to answer your mail as soon as possible. Thank you for your interest in my work.&nbsp;&nbsp;
            <a href='mailto:me@mysite.com'>e-mail me</a>
          </p>
        </div>
      </header>
    </div>
  );
}
