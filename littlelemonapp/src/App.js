import './App.css';
import Header from './components/Header.js'


function App() {
  return (
    <>
      <Header />
        <Nav />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
      <Main />
        <section>
          <h1>Welcome to our website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, nisl non blandit aliquam, lorem magna blandit nulla, et faucibus magna est quis sem.</p>
        </section>
        <section>
          <h2>Our services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section>
          <h2>Contact us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Submit</button>
          </form>
        </section>
      <Footer />
        <p>Copyright &copy; 2023</p>
    </>
  );
}

export default App;
