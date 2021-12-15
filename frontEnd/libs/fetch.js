//Fetch configuration
const url = 'http://localhost:3000/users/';

//FETCH DELETE BY ID
export async function fetchDelete(id) {
  //We send a DELETE fetch and wait for the response
  const fetchResponse = await fetch(`${url}${id}`, {
    method: 'DELETE',
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}

//FETCH ALL USERS
export async function fetchUsers() {
  const fetchResponse = await fetch(`${url}`, {
    method: 'GET',
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}
