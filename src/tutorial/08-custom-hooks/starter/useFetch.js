import { useEffect, useState } from 'react';

// const useFetchPerson = (url) => {
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //   const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // const fetchUser = async () => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        // const user = await resp.json();
        // setUser(user);
        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
      }
      // hide loading
      setIsLoading(false);
    };
    // fetchUser();
    fetchData();
  }, []);
  //   return { isLoading, isError, user };
  return { isLoading, isError, data };
};

// export default useFetchPerson;
export default useFetch;
