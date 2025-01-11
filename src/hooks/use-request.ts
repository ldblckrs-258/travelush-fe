import { useLogout } from '@/hooks/use-logout';
import axios, { AxiosRequestConfig, Method } from 'axios';
import { useEffect, useState } from 'react';

interface HookProps extends AxiosRequestConfig {
  method: Method;
  url?: string;
  queryParams?: object;
  body?: any;
  local?: boolean;
  onSuccessMessage?: string;
  hideErrorMessage?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any, data: any) => void;
  isPublic?: boolean;
}

interface RequestProps {
  url?: string;
  queryParams?: object;
  body?: any;
}

const useRequest = (hookProps: HookProps) => {
  const [pending, setPending] = useState(false);
  const { handleLogout } = useLogout();
  const [refetchCount, setRefetchCount] = useState(0);

  const request = async (props?: RequestProps) => {
    setPending(true);

    try {
      const token = window.localStorage.getItem('access_token');

      if (!token) {
        setTimeout(() => {
          console.error('Token is still null. Reloading the page...');
          window.location.reload();
        }, 700);
      }

      const response = await axios({
        baseURL: hookProps.local ? 'en/api/' : process.env.NEXT_PUBLIC_API_URL,
        url: props?.url || hookProps.url,
        params: props?.queryParams || hookProps.queryParams,
        method: hookProps.method,
        data: props?.body || hookProps.body,
        headers: {
          Authorization: hookProps.local ? '' : `Bearer ${token}`,
          'Content-Type':
            hookProps.headers?.['Content-Type'] || 'application/json',
        },
      });
      hookProps.onSuccess && hookProps.onSuccess(response);
    } catch (error: any) {
      hookProps.onError && hookProps.onError(error, error.response?.data);

      if (error.response?.status === 401 || error.response?.status === 403) {
        handleLogout();
      }

      setPending(false);
      return false;
    }

    setPending(false);
    return true;
  };

  useEffect(() => {
    if (refetchCount > 0) {
      request();
    }
  }, [refetchCount]);

  const refetch = () => {
    setRefetchCount((prevCount) => prevCount + 1);
  };

  return { request, pending, refetch };
};

export default useRequest;
