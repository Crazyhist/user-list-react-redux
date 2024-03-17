import { faker } from '@faker-js/faker'

export function createRandomUser() {
	return {
		userId: faker.string.uuid(),
		username: faker.internet.userName(),
		lastName: faker.name.lastName(),
		age: faker.datatype.number({ min: 18, max: 90 }),
		email: faker.internet.email(),
	}
}

export const USERS = faker.helpers.multiple(createRandomUser, {
	count: 5,
})
