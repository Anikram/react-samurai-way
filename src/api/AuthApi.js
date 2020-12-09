import axiosInstance from './configApi'

export const authAPI = {
  checkUserAuth() {
    return axiosInstance.get(`auth/me`);
  },

  login(formData) {
    return axiosInstance.post('auth/login', formData)
  },

  logout() {
    return axiosInstance.delete('auth/login')
  },

  getCaptcha() {
    return axiosInstance.get('security/get-captcha-url')
  }
}

export default authAPI
