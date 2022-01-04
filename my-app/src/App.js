import './App.css';
import logo from './images/profilePicture.JPG';


function Header() {
  return (
    <header>
     <h1> Emmanuel's Social Media</h1> 
    </header>
  );
}
function AdditionHeader() {
  return (
    <section>
      Software Engineer
    </section>
  )
}

function WelcomeUser(props) {
  return (
    <section>
      <p>Welcome </p>
      </section>

  );
}

function ProfilePicture() {
   // Import results is the URL of your image
  return <img src={logo} width="500" height="500" />
}

function Body() {
  return (

    <section>
      <p> Body </p>
    </section>
  );
}

function Footer() {
  return (
    <section>
    <p> bottom</p>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <AdditionHeader />
      <WelcomeUser />
      <ProfilePicture /> 
      <Body />
      <Footer/>
    </div>
  )
}

export default App;
