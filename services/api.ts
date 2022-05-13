import { useUser } from '~~/stores/user';
export const url = 'https://api-hunting.herokuapp.com';

export class AuthServices {
  static singIn = async (emailAndPassword: Object) => {
    const response = await fetch(`${url}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify(emailAndPassword),
    });
    const data = await response.json();
    return data;
  };

  static signOut = () => {
    const storeUser = useUser();
    const router = useRouter();
    storeUser.token = '';
    router.push('/login');
  };
}

export class AuthorizationTkn {
  static authorizers = async () => {
    const store = useUser();
    const response = await fetch(`${url}/authentication/check`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${store.getToken}`,
      },
    });
    const data = await response.json();
    return data.message;
  };
}
