import React from 'react';
import { Typography } from 'antd';
import { useSessionTime } from './useSessionTime';

export const SessionTime = () => {
  const sessionTime = useSessionTime();

  return (
    <div style={{ marginRight: '40px' }}>
      <Typography.Text type='warning'>
        Czas twojej sesji: {sessionTime}
      </Typography.Text>
    </div>
  );
};
