import { createSlice } from "@reduxjs/toolkit";

const managerSlice = createSlice({
  name: 'managerPassword',
  initialState: {
    data: JSON.parse(localStorage.getItem('data')) || [],
  },
  reducers: {
    // тут лучше типизировать payload внутри action, а то TS будет ругаться
    addItem(state, action) {
      // не обязательно прописывать кадое свойство объекта, если у тебя корректно отправляется payload
      // можно сделать просто state.data.push({ ...action.payload })
      state.data.push({
        site: action.payload.site,
        login: action.payload.login,
        password: action.payload.password,
        id: action.payload.id
      })
    },
    removeItem(state, action) {
      state.data = state.data.filter(item => item.id != action.payload.id) // вместо != -> !==
    },
    editItem(state, action) {
      state.data = state.data.map((item) => {
        if (item.id == action.payload.id) {  // вместо != -> !==
          return ({
            ...item,
            password: action.payload.password
          })
        } else {
          return item
        }
      })
    }
  },
});

export const { addItem, removeItem, editItem } = managerSlice.actions;

export default managerSlice.reducer
