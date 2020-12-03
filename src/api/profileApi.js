import axiosInstance from "./configApi";


const profileAPI = {
  getUserProfile(userId) {
    return axiosInstance.get(`profile/${userId}`)
  },
}

export default profileAPI;