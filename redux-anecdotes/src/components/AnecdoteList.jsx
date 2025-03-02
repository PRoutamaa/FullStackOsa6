import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { newVoteNotification, hideCurrentNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        return state.anecdotes.filter(anecdote => 
            anecdote.content
            .toLowerCase()
            .includes(state.filter.toLowerCase()))
    })
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        dispatch(voteAnecdote(anecdote.id))
        dispatch(newVoteNotification(anecdote.content))
        setTimeout(() => {
            dispatch(hideCurrentNotification())
        }, 5000);
      }

    return (
        <>
            {anecdotes.sort((a, b) => b.votes - a.votes)
            .map(anecdote =>
            <div key={anecdote.id}>
                <div>
                {anecdote.content}
                </div>
                <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
            )}
        </>
    )  
}

export default AnecdoteList