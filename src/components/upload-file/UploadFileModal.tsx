import { InboxOutlined } from '@ant-design/icons';
import { UseMutationResult } from '@tanstack/react-query';
import { Image, UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { baseApiPath, DeletedFileResponse, FileDto, FileType} from 'api';
import { imgSrc } from 'utils';

const { Dragger } = Upload;

type UploadFileProps = {
  fileType: FileType;
  file: FileDto| undefined
  setFile: React.Dispatch<React.SetStateAction<FileDto | undefined>>
  deleteFile: UseMutationResult<DeletedFileResponse, unknown, string, unknown>
};
export const UploadFileModal = ({ file, fileType, setFile, deleteFile }: UploadFileProps) => {
  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    action: `${baseApiPath}/store/file?type=${fileType}`,
    showUploadList: true,
    maxCount: 1,
    onChange(info) {
      const { status, response } = info.file;
      if (status === 'done') {
        message.success('Plik wrzucony pomyślnie');
        setFile(response?.data?.file);
      } else if (status === 'error') {
        message.error('Nie udało się wrzucić pliku');
      }
    },
    onRemove() {
      file?.id && deleteFile.mutate(file.id);
    },
  };

  return (
    <>
      <Dragger {...uploadProps}>
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>
          Kliknij tutaj lub przeciągnij plik file który chcesz wrzucić.
        </p>
        <p className='ant-upload-hint'>
          Możesz wrzucić tylko jeden pliku typu
          {fileType === FileType.Image ? ' zdjęcie' : ' pdf'}
        </p>
      </Dragger>

      {(file?.url && fileType === "IMAGE") && <Image width={450} src={imgSrc(file.url)} style={{marginTop: 20}}/>}
    </>
  );
};
