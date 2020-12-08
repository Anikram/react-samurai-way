import axiosInstance from './configApi'

export const authAPI = {
  checkUserAuth() {
    return axiosInstance.get(`auth/me`);
  },

  loginUserAuth(formData) {
    return axiosInstance.post('auth/login', formData)
  },

  logoutUserAuth() {
    return axiosInstance.post('auth/logout', {})
  }
}

export default authAPI
