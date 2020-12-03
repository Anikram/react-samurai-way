import axiosInstance from "./configApi";

const friendsAPI = {
  fetchUserFriends(friendsNumber,pageNumber) {
   return axiosInstance.get(`users?count=${friendsNumber}&page=${pageNumber}&friend=true`, {}).then(response => response.data)
  }
}

export default friendsAPI;