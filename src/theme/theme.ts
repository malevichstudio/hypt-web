import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/button.theme';
import { Checkbox } from './components/checkbox.theme';
import { Container } from './components/container.theme';
import { FormError } from './components/form-error.theme';
import { FormLabel } from './components/form-label.theme';
import { Input } from './components/input.theme';
import { Menu } from './components/menu.theme';
import { Modal } from './components/modal.theme';
import { PinInput } from './components/pin-input.theme';
import { Radio } from './components/radio.theme';
import { Switch } from './components/switch.theme';
import { Tabs } from './components/tabs.theme';
import { Text } from './components/text.theme';
import { Tooltip } from './components/tooltip.theme';
import { colors } from './foundations/colors.theme';
import { fontSizes } from './foundations/font-sizes.theme';
import { fonts } from './foundations/fonts.theme';
import { radii } from './foundations/radii.theme';
import { sizes } from './foundations/sizes.theme';
import { styles } from './styles.theme';

const overrides = {
  colors,
  fonts,
  fontSizes,
  radii,
  styles,
  sizes,
  components: {
    Button,
    Input,
    FormLabel,
    FormError,
    Checkbox,
    Modal,
    Container,
    Switch,
    PinInput,
    Radio,
    Tooltip,
    Tabs,
    Menu,
    Text,
  },
};

export default extendTheme(overrides);
