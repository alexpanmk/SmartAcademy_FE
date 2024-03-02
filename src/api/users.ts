const BASE_URL = 'https://localhost:3000/users';

//Get Clerk user from BE with token
export async function getUser(token) {
  const userURL = BASE_URL ;
  const res = await fetch(userURL, {
    method: "GET",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}`},
    // mode: 'cors',   
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the user email
    return res.json();
  } else {
    throw new Error("Invalid Login");
  }
}

//login user with clerk token - returns user email
// export async function loginUser(token) {
//   const loginURL = BASE_URL + '/login';
//   console.log(loginURL);
//   const res = await fetch(loginURL, {
//     method: "GET",
//     headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}`},
//     mode: 'cors',   

//     // body: JSON.stringify(token),
//   });
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the user email
//     console.log(res);
//     return res.json();
//   } else {
//     throw new Error("Invalid Login");
//   }
// }


//To finish the signup flow by sending the rest of the sign up data after creation of user in BE
export async function signUp(userData) {
  
}
