import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://project4-backend-eagr.onrender.com"

//createAction => create a Score from form submissions to `/create`
export const createAction = async ({request}) => {

    const token = localStorage.getItem('accessToken');

    // get form data
    const formData = await request.formData()

    // construct request body
    const newScore = {
        name: formData.get("name"),
        score: formData.get("score")
    }

    // send request to backend
    await fetch(URL + "/scoreboard/", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(newScore)
    })

    // redirect back to index page
    return redirect("/scoreboard")
}

//updateAction => update a Score from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {

    const token = localStorage.getItem('accessToken');

    // get form data
    const formData = await request.formData()

    // get Score id
    const id = params.id

    // construct request body
    const updatedScore = {
        name: formData.get("name"),
        score: formData.get("score")
    }

    // send request to backend
    await fetch(URL + `/scoreboard/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,

        },
        body: JSON.stringify(updatedScore)
    })

    // redirect back to show page page
    return redirect(`/scoreboard/${id}`)
}

//deleteAction => delete a Score from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {

    const token = localStorage.getItem('accessToken');

    // get Score id
    const id = params.id

    // send request to backend
    await fetch(URL + `/scoreboard/${id}/`, {
        method: "delete",
        headers:{

            Authorization: `Token ${token}`,
        }

    })

    // redirect back to show page page
    return redirect("/scoreboard")
}

export const signupAction = async ({ request }) => {
    // Retrieve the user's access token from localStorage
    const token = localStorage.getItem('accessToken');

    // Check if the token exists
    if (!token) {
        // Handle the case where the token is missing or expired
        // You can redirect to a login page or display an error message
        // For example:
        return redirect('/login');
    }

    // Get form data
    const formData = await request.formData();

    // Construct request body
    const newUser = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    // Send a request to the backend to create a new user
    const response = await fetch(URL + "/users/", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(newUser)
    });

    if (response.ok) {
        // Signup successful, you can redirect the user to a success page
        return redirect('/signup-success');
    } else {
        // Handle signup failure, display an error message
        // You can set error state and display a message to the user
        return redirect('/signup-failure');
    }
}