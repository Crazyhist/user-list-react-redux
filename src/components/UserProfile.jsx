import React from 'react'
import userSvg from '../assets/user.svg'
import '../styles/UserProfile.css'

const UserProfile = ({ user }) => {
	if (!user) {
		return null
	}

	const { id } = user

	return (
		<div className='UserProfile-wrapper'>
			<h2>Пользователь {id}</h2>
			<div className='UserProfile-bottom'>
				<div className='UserProfile-infoWrapper'>
					<img src={userSvg} alt='qweqe' className='UserProfile-img' />
					<div className='UserProfile-info'>
						<span>Должность</span>
						<span>Отдел</span>
						<span>Компания</span>
					</div>
					<div className='UserProfile-info'>
						<input type='text' />
						<input type='text' />
						<input type='text' />
					</div>
				</div>
			</div>
			<button>сохранить</button>
		</div>
	)
}

export default UserProfile
