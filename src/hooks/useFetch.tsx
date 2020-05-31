import { useEffect, useState, useContext } from 'react';
import { MainStore } from 'store/MainStore';
import { refreshApp } from 'action/mainAction';
import Cookies from 'js-cookie';

export default (url: string, dependencies: Array<any> = []) => {
  const [datas, setDatas] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(MainStore);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, {
          headers: {
            authorization: `bearer: ${Cookies.get('token')}`
          }
        });
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
  }, [state.refresh, ...dependencies]);

  return { datas, isloading, error };
};
