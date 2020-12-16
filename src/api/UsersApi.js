import axiosInstance from './configApi'

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`, {})
  },

  unfollow(userId) {
    return axiosInstance.delete(`follow/${userId}`, {});
  },

  follow(userId) {
    return axiosInstance.post(`follow/${userId}`, {});
  }
}