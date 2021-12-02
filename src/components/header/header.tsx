import { Flex, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

import { IS_XL_WIDTH } from '../../constants';
import { useAppBannerContext } from '../../context';
import { useAuth } from '../../hooks';
import { HeaderCalendar } from './header-calendar/header-calendar';
import { HeaderCart } from './header-cart';
import { HeaderLogo } from './header-logo';
import { HeaderNavigation } from './header-navigation/header-navigation';
import { HeaderNotifications } from './header-notifications/header-notifications';
import { HeaderSearch } from './header-search/header-search';
import { HeaderUser } from './header-user/header-user';
import { styles } from './styles';

type Props = {
  position?: 'static' | 'fixed' | 'absolute';
};

export const Header = ({ position = 'fixed' }: Props) => {
  const { isAuth } = useAuth();
  const { isAppBannerVisible } = useAppBannerContext();
  const [isXlWidth] = useMediaQuery(IS_XL_WIDTH);

  const [currentPosition, setCurrentPosition] = React.useState<
    'static' | 'fixed' | 'absolute'
  >(isAppBannerVisible ? 'absolute' : position);

  const handleScroll = React.useCallback(() => {
    if (window.pageYOffset >= 100) {
      setCurrentPosition(position);
    } else {
      setCurrentPosition('absolute');
    }
  }, [position]);

  React.useEffect(() => {
    if (isAppBannerVisible && position === 'fixed') {
      document.addEventListener('scroll', handleScroll);
    } else {
      if (currentPosition !== position) {
        setCurrentPosition(position);
      }
      document.removeEventListener('scroll', handleScroll);
    }
  }, [position, isAppBannerVisible, handleScroll, currentPosition]);

  return (
    <Flex as='header' sx={styles.wrapper(currentPosition)}>
      <HeaderLogo />
      <HeaderSearch />
      {isXlWidth ? (
        <>
          <HeaderCalendar />
          {/* <HeaderChat /> */}
        </>
      ) : null}
      {isXlWidth ? <HeaderNavigation /> : null}
      {isAuth || localStorage.getItem('customer') ? <HeaderCart /> : null}
      {isAuth ? <HeaderNotifications /> : null}
      {isXlWidth ? <HeaderUser /> : <HeaderNavigation />}
    </Flex>
  );
};
