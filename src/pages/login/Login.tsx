import { SignInDto } from 'api';
import { useAuth } from 'providers';
import { Button, Form, Input, Card, Col, Row } from 'antd';

export const LoginPage = () => {
  const { signIn } = useAuth();

  return (
    <Row align='middle' justify='center' style={{ height: '90vh' }}>
      <Col span={6}>
        <Card title='Zaloguj się'>
          <Form<SignInDto>
            name='sign-in'
            initialValues={{ remember: true }}
            onFinish={signIn}
            autoComplete='off'
            layout='vertical'
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: 'Podaj swój email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Hasło'
              name='password'
              rules={[{ required: true, message: 'Podaj swoje hasło!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Zaloguj
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
