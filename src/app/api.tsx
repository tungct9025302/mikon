import axios from "axios";

const URL = "http://localhost:3000";

export async function getUsers() {
  const response = await axios.get(`${URL}/users`);
  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function getUser(id) {
  const response = await axios.get(`${URL}/users/${id}`);
  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function createUser(post) {
  const response = await axios.post(`${URL}/users`, post);
  return response;
}

export async function updateUser(id, post) {
  const response = await axios.put(`${URL}/users/${id}`, post);
  return response;
}

export async function deleteUser(id) {
  const response = await axios.get(`${URL}/users/${id}`);
  return response;
}
