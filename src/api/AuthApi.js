import axiosInstance from './configApi'

export const getUserProfile = (userId) => {
  return axiosInstance.get(`profile/${userId}`)
}
