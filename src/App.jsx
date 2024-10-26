// src/App.js
import React from 'react'
import MainApp from './components/MainApp'
import MainApp2 from './components/_dump/MainApp2.jsx'
import { AuthProviderComponent } from './context/AuthContext'
import FetchUserStatus from './components/_dump/FetchUserStatus.jsx';
import Auth2 from './Auth2'
import Auth from './Auth.jsx'

import { UserProvider } from './context/UserContext'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Appwrite Google Auth Example</h1>
        {/* <AuthProviderComponent>
          <MainApp />
          <FetchUserStatus />
        </AuthProviderComponent> */}
        {/* <Auth2 /> */}
        {/* <Auth /> */}
        <UserProvider>
          <MainApp />
        </UserProvider>

      </header>
    </div>
  )
}

export default App

