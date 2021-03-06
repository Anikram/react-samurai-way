import axiosInstance from "./configApi";


const profileAPI = {
  getUserProfile(userId) {
    return axiosInstance.get(`profile/${userId}`);
  },
  getUserStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`);
  },
  updateUserStatus(status) {
    return axiosInstance.put(`profile/status/`, {status})
  },
  isFriend(userId) {
    return axiosInstance.get(`follow/${userId}`);
  }
}

export default profileAPI;