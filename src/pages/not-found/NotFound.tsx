import { Alert, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Routes } from 'router';

export const NotFoundPage = () => (
  <main>
    <section>
      <Alert
        style={{ margin: 'auto', maxWidth: '400px', marginTop: '200px' }}
        description='Nie odnaleziono strony'
        action={
          <Link to={Routes.dashboard}>
            <Button size='small' danger>
              wróć do strony głównej
            </Button>
          </Link>
        }
        message='404'
        type='error'
      />
    </section>
  </main>
);
