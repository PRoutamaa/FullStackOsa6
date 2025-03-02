import { createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice( {
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push(content)
    },
    addVote(state, action) {
      const voteId = action.payload.id
      const anecdote = state.find(ane => ane.id === voteId)
      const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      console.log(updatedAnecdote)
      return state.map(anec => 
        anec.id === voteId ? updatedAnecdote : anec
      )
    }  
  },
})

export const addNewAnecdote = (anecdote) => {
  return {
    type: 'anecdotes/createAnecdote',
    payload: asObject(anecdote)
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'anecdotes/addVote',
    payload: { id }
  }
}

export const { createAnecdote, addVote } = anecdoteSlice.actions
export default anecdoteSlice.reducer