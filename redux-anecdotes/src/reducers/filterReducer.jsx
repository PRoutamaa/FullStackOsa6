import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      console.log("ACTION: ", action)
      return action.payload ? action.payload : state
    },
  }
})

export const filterChange = filter => {
    return {
      type: 'filter/setFilter',
      payload: filter,
    }
  }
  
export const { setFilter } = filterSlice.actions  
export default filterSlice.reducer