import axiosInstance from "./configApi";

const friendsAPI = {
  fetchUserFriends(friendsNumber,pageNumber) {
   return axiosInstance.get(`users?count=${friendsNumber}&page=${pageNumber}&friend=true`, {})
  },

  getFriend(friendId) {
    return axiosInstance.get(`profile/${friendId}`)
  }
}

export default friendsAPI;