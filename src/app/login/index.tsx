'use client';

import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import {Input, Button} from 'antd'

const Showcase = memo(() => (
  <Flexbox
    flex={1}
    justify={'center'}
    style={{ height: '100%', position: 'relative', width: '100%' }}
  >
       <Input placeholder='用户名' />
       <Input placeholder='密码' />
       <Button type='primary'>登陆</Button>

  </Flexbox>
));

export default Showcase;
