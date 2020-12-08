import { fetchRequest, fetchImages } from './fetchRequest'

export const getPosts = (page) => {
  return fetchRequest(`/posts/${page}`, {
    method: 'GET'
  })
}

export const getPost = (postId) => {
  return fetchRequest(`/post/${postId}`, {
    method: 'GET'
  })
}

export const addPost = (post) => {
  return fetchRequest(`/post/create`, {
    method: 'POST',
    body: JSON.stringify(post)
  })
}

export const uploadImages = (formData) => {
  return fetchImages(formData)
}
