import { createSlice } from "@reduxjs/toolkit";

const CodeSlicer = createSlice({
    name: 'CodeSlicer',
    initialState: '',
    reducers: {
        addCode: (state, action) => {
            return state = action.payload
        }
    }
})

export const { addCode } = CodeSlicer.actions

export default CodeSlicer.reducer