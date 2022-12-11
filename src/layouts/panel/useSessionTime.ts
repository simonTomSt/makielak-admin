import { useTimer } from 'react-timer-hook';
import { useCookies } from 'react-cookie';
import { decodeTokenSafety } from 'utils';

export const useSessionTime = () => {
  const [cookies] = useCookies(['token']);
  const tokenExp = decodeTokenSafety(cookies?.token).exp;
  const expiryTimestamp = new Date(tokenExp * 1000);

  const { seconds, minutes } = useTimer({ autoStart: true, expiryTimestamp });

  return `${minutes}:${seconds}`;
};
