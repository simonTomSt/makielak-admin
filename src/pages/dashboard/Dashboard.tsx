import Card from 'antd/es/card/Card';
import { useAuth } from 'providers';

export const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <Card title={`Witaj ${user?.name}!`}>
      <span>Znajdujesz się w panelu administracyjnym swojej</span>

      <a
        target='_blank'
        rel='noopener noreferer noreferrer'
        href={process.env.REACT_APP_CLIENT_WEBSITE_URL}
      >
        &nbsp;strony internetowej.
      </a>
      <br />
      <span>
        Możesz tutaj edytować treści dla swoich podstron oraz dane kontaktowe
        firmy.
      </span>
    </Card>
  );
};
