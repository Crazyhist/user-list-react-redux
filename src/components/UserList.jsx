import React, { useState } from 'react'
import { FixedSizeList } from 'react-window'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../redux/slices/usersSlice'

import UserCard from './UserCard'
import UserProfile from './UserProfile'
import '../styles/UserListStyle.css'

const UserList = ({ users }) => {
	const [selectedUser, setSelectedUser] = useState(null)

	const handleUserClick = (user) => {
		setSelectedUser(user)
	}

	const renderUserCard = ({ index, style }) => (
		<div
			style={style}
			className='ListItem'
			onClick={() => handleUserClick({ id: index + 1 })}
		>
			<UserCard index={index + 1} />
		</div>
	)

	return (
		<div className='UserList-wrapper'>
			<div className='UserList'>
				<FixedSizeList
					className='List'
					height={400}
					itemCount={1000000}
					itemSize={25}
					width={300}
				>
					{renderUserCard}
				</FixedSizeList>
			</div>
			{selectedUser && <UserProfile user={selectedUser} />}
		</div>
	)
}
export default UserList
