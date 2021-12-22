//Fetch configuration
const url = 'http://localhost:3000/users/';

//FETCH ALL USERS
export async function fetchUsers() {
  const fetchResponse = await fetch(`${url}`, {
    method: 'GET',
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}

//CREATE A NEW USER
export async function fetchCreate(body) {
  const fetchResponse = await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}

//UPDATE AN USER
export async function fetchUpdate(id, body) {
  const fetchResponse = await fetch(`${url}${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}

//FETCH DELETE BY ID
export async function fetchDelete(id) {
  //We send a DELETE fetch and wait for the response
  const fetchResponse = await fetch(`${url}${id}`, {
    method: 'DELETE',
  });
  //Store the response.
  const response = await fetchResponse.json();
  console.log(response);
  return response;
}
