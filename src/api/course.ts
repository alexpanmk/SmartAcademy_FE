const BASE_URL = "http://localhost:3000/courses";

//TODO: Remember to include token in the headers


export async function getCourses() {
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}`},
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorBody = await response.text();
        console.error('Error response body:', errorBody);
        throw new Error('Failed to get courses');
    }


}





// export async function getJournalEntries(queryParams) {
//   const searchParams = new URLSearchParams(queryParams);
//   const getURL = `${BASE_URL}?${searchParams}`;
//   const response = await fetch(getURL, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
//   });

//   if (response.ok) {
//     return response.json();
//   } else {
//     // It's good to log the response to understand the error details
//     const errorBody = await response.text();
//     console.error('Error response body:', errorBody);
//     throw new Error('Failed to get journal entries');
//   }
// }

