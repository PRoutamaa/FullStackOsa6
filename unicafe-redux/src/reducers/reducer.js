const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const changedValue = {...state, good : state.good + 1}
      return changedValue
    case 'OK':
      return {...state, ok: state.ok + 1}
    case 'BAD':
      return {...state, bad: state.bad + 1}
    case 'ZERO':
      return {good: 0, ok: 0, bad: 0}
    default: return state
  }
  
}

export const good = () => {
  store.dispatch({
    type: 'GOOD'
  })
}

export const ok = () => {
  store.dispatch({
    type: 'OK'
  })
}

export const bad = () => {
  store.dispatch({
    type: 'BAD'
  })
}

export const zero = () => {
  store.dispatch({
    type: 'ZERO'
  })
}

export default counterReducer
