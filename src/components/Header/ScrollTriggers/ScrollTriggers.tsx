import React from 'react';
import { useScrollTrigger, Slide, AppBar, AppBarProps } from '@mui/material';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface ElevateOnScrollProps extends AppBarProps {
  children: React.ReactElement;
}

function ElevateOnScroll(props: ElevateOnScrollProps) {
  const { children, ...other } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    ...other,
  });
}

export { HideOnScroll, ElevateOnScroll };
