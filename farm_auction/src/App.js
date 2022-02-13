
import './App.css';
import Main from './components/Auction/Main';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
      <AuthProvider>
        <Header />
        <Main />
      </AuthProvider>
    
  );
}

export default App;
