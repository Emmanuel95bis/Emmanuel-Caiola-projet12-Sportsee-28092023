import { useEffect, useState } from "react";

export function Usefetch(userID, path) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const BASE_URL_API = "http://localhost:3000/user";

  let USER_PATH = "";

  if (path === "activity") {
    USER_PATH = `${BASE_URL_API}/${userID}/activity`;
  }
  if (path === "average-sessions") {
    USER_PATH = `${BASE_URL_API}/${userID}/average-sessions`;
  }
  if (path === "performance") {
    USER_PATH = `${BASE_URL_API}/${userID}/performance`;
  }
  if (path === "user") {
    USER_PATH = `${BASE_URL_API}/${userID}`;
  }

  useEffect(() => {
    async function fetchData() {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch(USER_PATH);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        setError(err.message || "An error occurred.");
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [USER_PATH]);

  return { isLoading, data, error };
}
