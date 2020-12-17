import {createSelector} from "reselect";

export const selectUserProfile = (state) => {
  return state.profilePage.profile
}

export const getProfileStatus = (state) => {
  return state.profilePage.status
}

export const getAuthorizedUserProfile = (state) => {
  return state.auth.userId
}

export const isUserAuthorized = (state) => {
  return state.auth.isAuth
}

export const getIsFriend = (state) => {
  return state.profilePage.isFriend
}

