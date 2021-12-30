//Fetch configuration
const fetchConfig = { domain: 'localhost', port: '3000', path: '/api/users/' };
const endPoint = `http://${fetchConfig.domain}:${fetchConfig.port}${fetchConfig.path}`;

//FETCH ALL USERS
export async function fetchUsers() {
  const fetchResponse = await fetch(`${endPoint}`, {
    method: 'GET',
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}

//CREATE A NEW USER
export async function fetchCreate(body) {
  const fetchResponse = await fetch(`${endPoint}`, {
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
  const fetchResponse = await fetch(`${endPoint}${id}`, {
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
  const fetchResponse = await fetch(`${endPoint}${id}`, {
    method: 'DELETE',
  });
  //Store the response.
  const response = await fetchResponse.json();
  return response;
}
