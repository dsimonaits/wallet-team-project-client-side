import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';
import '@fontsource/public-sans';

const ThemeSwitcher = ({ themeToggler }) => {
  return (
    <Switch
      onChange={themeToggler}
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: <DarkMode />,
        },
      }}
      sx={{
        '--Switch-thumbSize': '28px',
      }}
    />
  );
};

export default ThemeSwitcher;
