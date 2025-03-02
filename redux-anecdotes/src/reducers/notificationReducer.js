import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        message: '',
        visible: false
    }
]

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        voteNotification(state, action) {
            state[0].message = action.payload
            state[0].visible = action.visible
        },

        anecdoteNotification(state, action) {
            state[0].message = action.payload
            state[0].visible = action.visible
        },

        hideNotification(state) {
            state[0].message = ''
            state[0].visible = false
        }
    },
})
console.log(notificationSlice)

export const newVoteNotification = (anecdote) => {
    return {
        type: 'notification/voteNotification',
        payload: `You voted "${anecdote}"`,
        visible: true
    }
}

export const newAnecdoteNotification = (anecdote) => {
    return {
        type: 'notification/anecdoteNotification',
        payload: `You added new anecdote: "${anecdote}"`,
        visible: true
    }
}

export const hideCurrentNotification = () => {
    return {
        type: 'notification/hideNotification',
    }
}


export const { voteNotification, anecdoteNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer