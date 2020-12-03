import axiosInstance from './configApi'

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data)
  },

  unfollow(userId) {
    return axiosInstance.delete(`follow/${userId}`, {}).then(response => response.data);
  },

  follow(userId) {
    return axiosInstance.post(`follow/${userId}`, {}).then(response => response.data);
  }
}