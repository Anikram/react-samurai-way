import axiosInstance from './configApi'

export const authAPI = {
  checkUserAuth() {
    return axiosInstance.get(`auth/me`)
  },
}

export default authAPI
