import { BsFillCaretDownFill } from 'react-icons/bs';
import ReactSelect, { components } from 'react-select';

import arabicFlagIcon from '../../../../public/images/united-arab-emirates.svg';
import usaFlagIcon from '../../../../public/images/united-states.svg';
import { FormatOptionLabel } from '../../../components';
import { LOCALE_OPTIONS } from '../../../constants';
import { useLanguageSwitcher } from '../../../hooks';
import { pxToRem } from '../../../utils';

type OptionType = {
  value: string;
  label: string;
};

const customStyles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: (provided: any) => ({
    ...provided,
    width: pxToRem(160),
    backgroundColor: '#222222',
    borderRadius: '3px',
    height: pxToRem(46),
    border: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  singleValue: (provided: any) => ({
    ...provided,
    color: '#969696',
  }),
};

export const FooterLanguageSwitcher = () => {
  const { switchLanguage, locale } = useLanguageSwitcher();

  const handleChange = (option: OptionType | null) => {
    switchLanguage(option?.value);
  };

  return (
    <>
      <ReactSelect
        id='select-language-switcher'
        instanceId='select-language-switcher'
        defaultValue={{
          label: locale === 'en' ? 'English' : 'عربى',
          value: locale || 'en',
        }}
        onChange={handleChange}
        options={LOCALE_OPTIONS}
        menuPlacement='top'
        isSearchable={false}
        formatOptionLabel={(option) => (
          <FormatOptionLabel
            option={option}
            icon={option.value === 'en' ? usaFlagIcon : arabicFlagIcon}
          />
        )}
        components={{ DropdownIndicator }}
        styles={customStyles}
      />
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <BsFillCaretDownFill />
    </components.DropdownIndicator>
  );
};
