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
    {
      id: "v2",
      Marque: "Dacia_Sandero",
      TypeCarburant: "Diesel",
      PrixLocation: 500,
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
    supprimerVoiture: (state, action) => {
      state.voitures = state.voitures.filter((v) => v.id !== action.payload);
    },
    updateVoiture: (state, action) => {
      // map
      /* state.voitures = state.voitures.map((v) => {
        if (v.id === action.payload.id) {
          return { ...v, ...action.payload };
        }
        return { ...v };
      }); */

      /* const index = state.voitures.findIndex((v) => v.id === action.payload.id);

      if (index !== -1) {
        state.voitures[index] = { ...state.voitures[index], ...action.payload };
      } */

      const v = state.voitures.find((v) => v.id === action.payload.id);

      if (v) {
        Object.keys(action.payload).forEach((key) => {
          v[key] = action.payload[key];
        });
      }
    },
  },
});

export const { addVoiture, supprimerVoiture, updateVoiture } =
  voitureSlice.actions;
export default voitureSlice.reducer;
