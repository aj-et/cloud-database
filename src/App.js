
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn /> {/* This contains the signin component  */}
      <SignUp /> {/* This contains the signup component  */}
      <AuthDetails /> {/* This show if you are logged in  */}
    </div>
  );
}

export default App;
