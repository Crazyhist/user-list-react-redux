import { faker } from '@faker-js/faker'

export function createRandomUser() {
	return {
		userId: faker.string.uuid(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
	}
}

export const USERS = faker.helpers.multiple(createRandomUser, {
	count: 5,
})
