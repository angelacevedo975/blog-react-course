/* eslint-disable no-unused-vars */
export const BASE_API_URL = 'http://localhost:5000/api'
export const BASE_UPLOAD_IMAGES =
  'https://api.cloudinary.com/v1_1/dboa1gxzj/image/upload'
const UPLOAD_PRESET = 'k6e23lk3'

export const fetchRequest = async (
  requestPath,
  requestParams = {},
  headers = {}
) => {
  try {
    const response = await fetch(`${BASE_API_URL}${requestPath}`, {
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...requestParams
    })

    const responseAsJson = await response.json()

    return {
      success: true,
      response: responseAsJson
    }
  } catch (error) {
    return {
      success: false,
      error
    }
  }
}

export const fetchImages = async (formData = {}) => {
  try {
    const response = await fetch(`${BASE_UPLOAD_IMAGES}`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      formData
    })

    const responseAsJson = await response.json()

    return {
      success: true,
      response: responseAsJson
    }
  } catch (error) {
    return {
      success: false,
      error
    }
  }
}
