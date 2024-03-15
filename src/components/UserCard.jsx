import React from 'react'

import '../styles/UserCardStyle.css'

const UserCard = ({ index, style }) => {
	return (
		<div className='ListItem-wrapper' style={style}>
			<span className='ListItem'>Пользователь {index}</span>
		</div>
	)
}

export default UserCard
