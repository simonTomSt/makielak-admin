import { contentApi, ContentType, HomePageStructureDto } from 'api';
import MDEditor from '@uiw/react-md-editor';
import { useContentQuery } from 'utils';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadFile } from 'components';

export const HomePageContent = () => {
  const [form] = Form.useForm();
  const { data, isLoading: getDataLoading } =
    useContentQuery<HomePageStructureDto>(ContentType.HomePage);

  const updateContentMutation = useMutation({
    mutationFn: (values: HomePageStructureDto) =>
      contentApi.upsertContent({
        name: ContentType.HomePage,
        upsertContentDto: {
          id: data?.id,
          name: ContentType.HomePage,
          structure: JSON.stringify(values),
        },
      }),
  });

  if (getDataLoading) return null;

  const { structure } = data;

  return (
    <Form
      form={form}
      name='home-page-form'
      initialValues={structure}
      onFinish={updateContentMutation.mutate}
      autoComplete='off'
      layout='vertical'
    >
      <Form.Item
        label='Tytuł dla pierwszej sekcji'
        name='welcomeTitle'
        rules={[
          { required: true, message: 'Podaj tytuł dla pierwszej sekcji' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='welcomeSubtitle'
        label='Opis dla pierwszej sekcji'
        rules={[{ required: true, message: 'Podaj opis dla pierwszej sekcji' }]}
      >
        <MDEditor
          value={form.getFieldValue('welcomeSubtitle')}
          onChange={(value) => form.setFieldValue('welcomeSubtitle', value)}
          data-color-mode='light'
        />
      </Form.Item>

      <Form.Item
        label='Tekst dla przycisku w pierwszej sekcji'
        name='welcomeButtonText'
        rules={[
          {
            required: true,
            message: 'Podaj tekst dla przycisku w pierwszej sekcji',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='aboutUsText'
        label='Opis dla drugiej sekcji'
        rules={[
          {
            required: true,
            message: 'Podaj opis o firmie dla drugiej sekcji',
          },
        ]}
      >
        <MDEditor
          value={form.getFieldValue('aboutUsText')}
          onChange={(value) => form.setFieldValue('aboutUsText', value)}
          data-color-mode='light'
        />
      </Form.Item>

      <Form.Item
        label='Tytuł dla sekcji z ofertą'
        name='offerTitle'
        rules={[
          {
            required: true,
            message: 'Podaj tytuł dla sekcji z ofertą',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Tekst przycisku dla sekcji z ofertą'
        name='offerButtonText'
        rules={[
          {
            required: true,
            message: 'Podaj tekst przycisku  dla sekcji z ofertą',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.List name='serviceItems'>
        {(fields, { add, remove }) => (
          <>
            <p>Usługi</p>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} align='baseline'>
                <div>
                  <Row style={{ width: '100%' }}>
                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      rules={[{ required: true, message: 'Brakuje tytułu' }]}
                    >
                      <Input placeholder='Tytuł uslugi' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'description']}
                      rules={[{ required: true, message: 'Brakuje opisu' }]}
                    >
                      <Input.TextArea placeholder='Opis uslugi' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'image']}
                      rules={[{ required: true, message: 'Brakuje zdjęcia' }]}
                    >
                      <UploadFile fileType={'IMAGE'} />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Row>
                </div>
              </Space>
            ))}
            <Form.Item>
              <Button type='dashed' onClick={add} block icon={<PlusOutlined />}>
                Dodaj usługę
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Zapisz
        </Button>
      </Form.Item>
    </Form>
  );
};
