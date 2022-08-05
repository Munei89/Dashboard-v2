import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import Button from '../Button';
import ArrowDown from 'app/assets/svgs/ArrowDown';
import { useInjectReducer } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from 'app/pages/slice';
import { selectAppState } from 'app/pages/selectors';
import { useDispatch, useSelector } from 'react-redux';

export function LanguageSwitch() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const isProfileMenuOpen = Boolean(anchorEl);

  const { language } = useSelector(selectAppState);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  }, [language, i18n]);

  return (
    <>
      <Button
        id="lang-button"
        aria-controls={isProfileMenuOpen ? 'lang-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isProfileMenuOpen ? 'true' : undefined}
        onClick={handleOpen}
        variant="text"
        sx={{
          marginTop: '-16px',
          fontSize: '14px',
        }}
        disableTouchRipple
        disableRipple
        endIcon={<ArrowDown />}
      >
        {language}
      </Button>

      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={isProfileMenuOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lang-button',
        }}
        sx={{
          boxShadow: '0px',
        }}
      >
        <MenuItem
          onClick={() => {
            dispatch(actions.setLanguage('en'));
            handleClose();
          }}
        >
          EN
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(actions.setLanguage('fr'));
            handleClose();
          }}
        >
          FR
        </MenuItem>
      </Menu>
    </>
  );
}
