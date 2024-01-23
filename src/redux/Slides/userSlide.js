import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastName: "",
  firstName: "",
  email: "",
  phoneNumber: "",
  image: "",
  access_token: "",
  role: "R3",
  refresh_token: "",
  gender: "",
};

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      let {
        lastName = "",
        firstName = "",
        email = "",
        phoneNumber = "",
        image = "",
        access_token = "",
        role = "R3",
        refresh_token = "",
        gender = "",
      } = action.payload;
      state.firstName = firstName ? firstName : state.firstName;
      state.lastName = lastName ? lastName : state.lastName;
      state.gender = gender ? gender : state.gender;
      state.email = email ? email : state.email;
      state.phoneNumber = phoneNumber ? phoneNumber : state.phone;
      state.image = image ? image : state.image;
      state.access_token = access_token ? access_token : state.access_token;
      state.role = role ? role : state.role;
      state.refresh_token = refresh_token ? refresh_token : state.refresh_token;
    },
    resetUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.gender = "";
      state.email = "";
      state.phoneNumber = "";
      state.image = "";
      state.access_token = "";
      state.role = "";
      state.refresh_token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
