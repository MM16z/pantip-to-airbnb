import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';

export const MuiTypography = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <Typography
      {...props}
      sx={{ fontFamily: `'__Prompt_d0462b', '__Prompt_Fallback_d0462b'`, ...sx }}
    >
      {children}
    </Typography>
  );
};
