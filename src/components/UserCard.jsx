import React from 'react'
import faker from 'faker'

function UserCard() {
	const users = Array.from({ length: 5 }, () => ({
		id: faker.datatype.uuid(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		age: faker.datatype.number({ min: 18, max: 100 }),
		email: faker.internet.email(),
	}))

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>
					<p>ID: {user.id}</p>
					<p>First Name: {user.firstName}</p>
					<p>Last Name: {user.lastName}</p>
					<p>Age: {user.age}</p>
					<p>Email: {user.email}</p>
					<hr />
				</div>
			))}
		</div>
	)
}

export default UserCard
