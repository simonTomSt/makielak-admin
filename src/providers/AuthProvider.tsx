import { createContext, ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { SignInDto, TokenResponse, UserOutDto, usersApi } from 'api';
import { Routes } from '../router';
import { useCookies } from 'react-cookie';
import { decodeTokenSafety } from 'utils';
import { useMutation } from '@tanstack/react-query';

type AuthContextValues = {
  user: UserOutDto | null;
  signIn: (signInDto: SignInDto) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

type AuthProviderProps = { children: ReactNode };

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const signInMutation = useMutation({
    mutationFn: (signInDto: SignInDto) => usersApi.singIn({ signInDto }),
    onSuccess: (response: TokenResponse) => {
      const newDecodedToken = decodeTokenSafety(response.data?.token);

      setUser(newDecodedToken.payload);
      navigate(Routes.dashboard);
    },
  });

  const [cookies] = useCookies(['token']);
  const decodedTokenOnInit = decodeTokenSafety(cookies?.token);

  const navigate = useNavigate();
  const [user, setUser] = useState<UserOutDto | null>(
    () => decodedTokenOnInit.payload
  );

  const handleSignIn = async (signInDto: SignInDto) =>
    signInMutation.mutate(signInDto);

  const handleSignOut = async () => {
    await usersApi.signOut();
    setUser(null);
    navigate(Routes.login);
  };

  const value = {
    user,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('usage of useAuth not wrapped in `AuthProvider`.');
  }

  return context;
};
