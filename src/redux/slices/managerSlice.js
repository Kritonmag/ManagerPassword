import { createSlice } from "@reduxjs/toolkit";

const managerSlice = createSlice({
  name: 'managerPassword',
  initialState: {
    data: [
      {
        site: 'vk',
        login: 'GenaLoveDota',
        password: 'tron',
        id: '1'
      }, {
        site: 'ok',
        login: 'Gena',
        password: 'raes143',
        id: '2'
      }, {
        site: 'mail',
        login: 'GaLoota',
        password: 'kall',
        id: '3'
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

    }
  },
});

export const { addItem, removeItem, editItem } = managerSlice.actions;

export default managerSlice.reducer
