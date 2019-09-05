/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import { Button, message, notification } from 'antd';
import { CommonSelect, CommonModal, CommonDrawer } from 'racc';
import { SubPageLayout } from 'src/components/page-layout';
interface Props {}
const HookPage: React.FC<Props> = props => {
  return (
    <div style={{ textAlign: 'center', height: 1000 }}>
      <h1 style={{ fontSize: 60 }}>
        Hello !<CommonSelect />
      </h1>
      <CommonModal>1</CommonModal>
      <CommonDrawer>1</CommonDrawer>
      <Button
        onClick={() => {
          message.success('11');
          notification.info({
            message: 'x'
          });
        }}
      >
        1
      </Button>
    </div>
  );
};
export default HookPage;
