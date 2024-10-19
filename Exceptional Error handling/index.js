const url = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { userId, id, title, completed } = data;
    console.log(data);
    console.log(userId);
  } catch (error) {
    console.log(error);
  }
};

fetchData(url);
