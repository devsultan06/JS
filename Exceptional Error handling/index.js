const url = "https://jsonplaceholder.typicode.com/comments/";

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
