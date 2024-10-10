import { apiConfig } from "../axios/config"

export const fetcher = async (url: string) => {
  try {
    const response = await apiConfig.get(url)

    return response?.data?.data
  } catch (error) {
    throw error
  }
}