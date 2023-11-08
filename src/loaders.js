// YOUR DEPLOYED API BASE URL
const URL = "http://localhost:8000"

const token = localStorage.getItem('accessToken');

const commonHeaders = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/scoreboard/", {
      headers: commonHeaders, // Include the Authorization header
    });
  
    const scoreboardList = await response.json();
    return scoreboardList;
  };
  

//showLoader => get a single todo for Show route
export const showLoader = async ({ params }) => {
    const response = await fetch(URL + `/scoreboard/${params.id}/`, {
      headers: commonHeaders, // Include the Authorization header
    });
  
    const scoreboardDetail = await response.json();
    return scoreboardDetail;
  };


  export const userLoader = async () => {
    const response = await fetch(URL + "/users/", {
      headers: commonHeaders, // Include the Authorization header
    });
  
    const usersList = await response.json();
    return usersList;
  };
  
