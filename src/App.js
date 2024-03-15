import React from 'react'

import './styles/main.css'

import UserProfile from './components/UserProfile.jsx'
import UserList from './components/UserList.jsx'
import { Store } from './store/store'

function App() {
	return (
		<div className='App'>
			<UserList />
			<UserProfile />
		</div>
	)
}

export default App
