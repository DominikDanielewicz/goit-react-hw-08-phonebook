import { useAuth } from 'hooks';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <Typography
      variant="body1"
      noWrap
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontWeight: 400,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      Welcome, {user.name}
    </Typography>
  );
};
