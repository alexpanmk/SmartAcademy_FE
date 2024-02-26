const BASE_URL = "http://localhost:3000/course";

//TODO: Remember to include token in the headers


export async function getCourses(token) {
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorBody = await response.text();
        console.error('Error response body:', errorBody);
        throw new Error('Failed to get courses');
    }
}




//Get course by id
export async function getCourse(courseId, token) {
    const getURL = `${BASE_URL}/${courseId}`;
    const response = await fetch(getURL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorBody = await response.text();
        console.error('Error response body:', errorBody);
        throw new Error('Failed to get course');
    }
}

//Update course by id
export async function updateCourse(courseId, courseData, token) {
    const updateURL = `${BASE_URL}/${courseId}`;
    const response = await fetch(updateURL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify(courseData)
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorBody = await response.text();
        console.error('Error response body:', errorBody);
        throw new Error('Failed to update course');
    }
}

//Delete course by id
export async function deleteCourse(courseId, token) {
    const deleteURL = `${BASE_URL}/${courseId}`;
    const response = await fetch(deleteURL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    });

    if (response.ok) {
        return response.json();
    } else {
        const errorBody = await response.text();
        console.error('Error response body:', errorBody);
        throw new Error('Failed to delete course');
    }
}





