import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContexProvider'
function App() {

  return (
    <UserContextProvider>
    <h1>Lorem ipsum dolor sit, magni ipsam.</h1>
    <Login/>
    <Profile/>    
    </UserContextProvider>
  )
}

export default App
