import { useEffect, useState, useContext } from 'react';
import { MainStore } from 'store/MainStore';
import { refreshApp } from 'action/mainAction';

export default (url: string) => {
  const [datas, setDatas] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(MainStore);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url);
        const resJson = await res.json();
        setDatas(resJson);
        setIsLoading(false);
        refreshApp(dispatch, false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setError(error);
        refreshApp(dispatch, false);
      }
    };

    if (state.refresh) {
      fetchData();
      return;
    }

    fetchData();
  }, [state.refresh]);

  return { datas, isloading, error };
};
