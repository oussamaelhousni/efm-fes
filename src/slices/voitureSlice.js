import { createSlice } from "@reduxjs/toolkit";

const initState = {
  voitures: [
    {
      id: "v1",
      Marque: "Dacia_Logan",
      TypeCarburant: "Diesel",
      PrixLocation: 200,
      image: "dacia.jpg",
    },
  ],
};

const voitureSlice = createSlice({
  name: "voiture",
  initialState: initState,
  reducers: {
    addVoiture: (state, action) => {
      state.voitures.push(action.payload);
    },
    deleteVoiture: (state, action) => {
      state.voitures = state.voitures.filter((v) => v.id !== action.payload);
    },
    updateVoiture: (state, action) => {
      /* const v = state.voitures.find((v) => action.payload.id === v.id);
      if (v) {
         v.Marque = action.payload.Marque;
        v.image = action.payload.image;
        v.TypeCarburant = action.payload.TypeCarburant;
        v.PrixLocation = action.payload.PrixLocation; 

        Object.keys(action.payload).forEach((k) => {
          v[k] = action.payload[k];
        });
      } */
      const vIndex = state.voitures.findIndex(
        (v) => action.payload.id === v.id,
      );
      if (vIndex !== -1)
        state.voitures[vIndex] = {
          ...state.voitures[vIndex],
          ...action.payload,
        };
    },
  },
});

export const { addVoiture, deleteVoiture, updateVoiture } =
  voitureSlice.actions;

export default voitureSlice.reducer;
