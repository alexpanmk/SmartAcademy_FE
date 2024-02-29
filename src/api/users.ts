const BASE_URL = 'https://localhost:3000/users';

//login user with clerk token - returns user email
export async function loginUser(token) {
  const loginURL = BASE_URL + '/login';
  console.log(loginURL);
  const res = await fetch(loginURL, {
    method: "GET",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}`},
    mode: 'cors',   

    // body: JSON.stringify(token),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the user email
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid Login");
  }
}

// export async function loginUser(userData) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc.
//   const loginURL = BASE_URL + '/login';
//   console.log(loginURL);
//   const res = await fetch(loginURL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json"},
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(userData),
//   });
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     console.log(res);
//     return res.json();
//   } else {
//     throw new Error("Invalid Login");
//   }
// }

// Add a function to get user details by username or email
export async function getUserByUsername(username) {
  const searchParams = new URLSearchParams({ username });
  const response = await fetch(`${BASE_URL}?${searchParams.toString()}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Failed to get user details');
  }
  const users = await response.json();
  return users.length > 0 ? users[0] : null; // Assuming the first user is the one we want
}

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const createURL = BASE_URL + '/create-user';
  console.log(createURL);
  const res = await fetch(createURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export async function getLoginDetails(email) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const searchParams = new URLSearchParams({"email":email});
  const getLoginDetailsURL = BASE_URL + '/login?' + searchParams;
  console.log(getLoginDetailsURL);
  const res = await fetch(getLoginDetailsURL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid User");
  }
}

export async function storeToken(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const createURL = BASE_URL + '/storeToken';
  console.log(createURL);
  const res = await fetch(createURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid Token");
  }
}



export async function logoutUser(token, userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const logoutURL = BASE_URL + '/logout';
  console.log(logoutURL);
  const res = await fetch(logoutURL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}`},
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid Login");
  }
}