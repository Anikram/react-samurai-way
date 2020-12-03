import axiosInstance from './configApi'

export const usersAPI = {
  getUsers(currentPage, pageSize){
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then( response => response.data)
  },

  toggleFollow(method, userId) {
    switch (method) {
      case 'post':
        return axiosInstance[method](`follow/${userId}`, {}).then(response => response.data);
      case 'delete':
        return axiosInstance[method](`follow/${userId}`, {}).then(response => response.data);
      default:
        return undefined;
    }
  }
}