import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		usersList: [],
		selectedUser: null,
	},
	reducers: {
		addUser: (state, action) => {
			state.usersList.push(action.payload)
		},
		selectUser: (state, action) => {
			state.selectedUser = action.payload
		},
	},
})

export const { addUser, selectUser } = usersSlice.actions
export default usersSlice.reducer
