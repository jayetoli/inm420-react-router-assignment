import logo from './../images/logo.svg';
import './../css/App.css';

export default function Users() {
  return (
    <div className='App users'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Users COMPONENT Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}