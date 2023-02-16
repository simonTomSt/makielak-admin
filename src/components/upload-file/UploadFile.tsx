import { Card, Modal, Image,  Button } from 'antd';
import {
  EditOutlined,
  UploadOutlined,
  DeleteOutlined,
  FilePdfFilled,
} from '@ant-design/icons';
import { FileType, FileDto, DeleteFileDto, storageApi } from 'api';
import { memo, useEffect, useState } from 'react';
import { UploadFileModal } from './UploadFileModal';
import { imgSrc } from 'utils';
import { useMutation } from '@tanstack/react-query';

type UploadFileProps = {
  fileType: FileType;
  value?: FileDto;
  onChange?: (file: FileDto | undefined) => void;
};

export const UploadFile = memo(({ fileType, value: existingFile, onChange }: UploadFileProps) => {
  const [file, setFile] = useState<FileDto| undefined>(()=> existingFile);
  const [editingOpen, setEditingOpen] = useState(false);
  const openModal = () => setEditingOpen(true);
  const deleteFile = useMutation({
    mutationFn: (id: DeleteFileDto['id']) =>
      storageApi.deleteFile({
        id,
      }),
  });

  useEffect(() => {
    onChange?.(file);
  }, [setFile, onChange, file])

  return (
    <>
      {!file ? (
        <Button icon={<UploadOutlined />} onClick={openModal}>
          {fileType === 'IMAGE' ? 'Dodaj zdjęcie' : 'Dodaj plik'}
        </Button>
      ) : (
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <EditOutlined key='edit' onClick={openModal} />,
            <DeleteOutlined key='remove' color='danger' onClick={()=> file?.id && deleteFile.mutate(file.id)} />,
          ]}
        >
          {(file?.url && fileType === "IMAGE") ? (
              <Image preview={false} width={250} src={imgSrc(file?.url)} alt={file?.id} />
          ) : (
            <FilePdfFilled />
          )}
        </Card>
      )}

      <Modal
        open={editingOpen}
        title={'Edytuj plik'}
        footer={null}
        onCancel={() => setEditingOpen(false)}
      >
        <UploadFileModal fileType={fileType} file={file} setFile={setFile} deleteFile={deleteFile} />
      </Modal>
    </>
  );
});
