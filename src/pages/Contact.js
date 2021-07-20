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
            You can write to me for any reason. I will try to answer you as soon as possible. Thank you for your interest in my work
            <a href='mailto:someone@yoursite.com'>Email Me here</a>
          </p>
        </div>
      </header>
    </div>
  );
}
