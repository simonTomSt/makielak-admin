import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import { deleteCookie } from 'utils';
import {
  Configuration,
  Middleware,
  ResponseContext,
  StorageApi,
  UsersApi,
  ContentApi,
} from './lib';

class AuthTokenMiddleware implements Middleware {
  post(context: ResponseContext): Promise<Response | void> {
    if (!context.url.includes('/sign-in') && context.response.status === 401) {
      deleteCookie('token');
      window.location.reload();
    }

    return Promise.resolve(context.response);
  }
}

export const baseApiPath = process.env.REACT_APP_API_URL;

const config = new Configuration({
  basePath: baseApiPath,
  credentials: 'include',
  middleware: [new AuthTokenMiddleware()],
});

// Api
export const usersApi = new UsersApi(config);
export const contentApi = new ContentApi(config);
export const storageApi = new StorageApi(config);

// Query Client Config
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      const { message } = error as { message: string };
      if (query.state.data !== undefined) {
        notification.open({
          message,
        });
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (_error, _variables, _context, _mutation) => {
      notification.error({
        message: 'Uups coś poszło nie tak',
      });
    },
  }),
});
