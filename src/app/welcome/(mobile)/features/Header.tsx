import { Logo, MobileNavBar } from '@openhub/ui';
import { memo } from 'react';

const Header = memo(() => <MobileNavBar center={<Logo type={'text'} />} />);

export default Header;
