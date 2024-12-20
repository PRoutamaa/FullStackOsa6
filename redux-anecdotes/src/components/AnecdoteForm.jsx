import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNew = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addNewAnecdote(content))
      }

    return (
        <>
        <h2>create new</h2>
        <form onSubmit={addNew}>
            <div>
            <input name="anecdote"/>
            </div>
            <button type="submit">create</button>
        </form>
        </>
    )
}

export default AnecdoteForm