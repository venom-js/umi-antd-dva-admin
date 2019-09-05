/**
 * @name 主体main
 */
import React from 'react';
import { Layout } from 'antd';
import venomBasicConfig from 'src/venom.config';
import styles from '../index.less';
const { Content } = Layout;

const ContentNode: React.FC = props => {
  return (
    <div
      style={{
        paddingTop: venomBasicConfig.fixHeader ? venomBasicConfig.headerHeight : 0,
        background: venomBasicConfig.contentBg
      }}
      className="flex flex-1 of-x-hd of-y-at"
    >
      <Content
        className={
          venomBasicConfig.layout === 'header' &&
          venomBasicConfig.contentWidthMode === 'fixed'
            ? styles.wrap
            : 'flex'
        }
        style={{ flexDirection: 'column', }}
      >
        {props.children}
      </Content>
    </div>
  );
};

export default ContentNode;
