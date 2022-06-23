import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>

        <div className="card">
          <Contact data={contacts[0]} />
        </div>
        <div className="card">
          <Contact data={contacts[1]} />
        </div>
        <div className="card">
          <Contact data={contacts[2]} />
        </div>
        <div className="card">
          <Contact data={contacts[3]} />
        </div>
        <div className="card">
          <Contact data={contacts[4]} />
        </div>
        <div className="card">
          <Contact data={contacts[5]} />
        </div>
      </div>
    </div>
  );
}

export default App;
