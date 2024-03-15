import React from 'react'
import { FixedSizeList } from 'react-window'

import UserCard from './UserCard'

const UserList = () => (
	<FixedSizeList
		height={400}
		width={300}
		itemSize={100} // Высота каждой карточки пользователя
		itemCount={users.length} // Количество элементов в списке
	>
		{({ index, style }) => (
			<div style={style}>
				<UserCard user={users[index]} />
			</div>
		)}
	</FixedSizeList>
)
export default UserList
