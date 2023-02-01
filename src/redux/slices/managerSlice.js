import { createSlice } from "@reduxjs/toolkit";

const managerSlice = createSlice({
  name: 'managerPassword',
  initialState: {
    data: [
      {
        site: 'vk',
        login: 'Tolya',
        password: 'tron',
        id: 'vk'
      }, {
        site: 'ok',
        login: 'Gena',
        password: 'raes143',
        id: 'ok'
      }, {
        site: 'mail',
        login: 'GaLoota',
        password: '46479',
        id: 'mail'
      }
    ]
  },
  reducers: {
    addItem(state, action) {
      state.data.push({
        site: action.payload.site,
        login: action.payload.login,
        password: action.payload.password,
        id: action.payload.id
      })
    },
    removeItem(state, action) {
      state.data = state.data.filter(item => item.id != action.payload.id)
    },
    editItem(state, action) {
      state.data = state.data.map((item) => {
        if (item.id == action.payload.id) {
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
