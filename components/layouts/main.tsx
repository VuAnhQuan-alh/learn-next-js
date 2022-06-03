import Head from 'next/head'
import { LayoutProps } from '@models'
// import Link from 'next/link'
import React, { useState, MouseEvent } from 'react'
import { AppBar, Button, Avatar, Box, Container, Toolbar, Tooltip, Typography, Menu, MenuItem, IconButton } from '@mui/material'
import Image from 'next/image'
import URL_LOGO from './../../access/images/logo-next.png'

const TextLogoStyled = {
  ml: 2,
  display: {
    xs: 'none',
    md: 'flex'
  },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none'
}

const PAGES = ['Products', 'Pricing', 'Blog']
const SETTINGS = ['Profile', 'Account', 'Dashboard', 'Logout']

const MainLayout = ({ children }: LayoutProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  return (
    <section>
      <Head>
        <title>Next Js tutorial</title>
      </Head>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Image src={URL_LOGO} alt="logo picture" width={56} height={42} layout="fixed" />
            <Typography variant='h4' noWrap component="a" href="/" sx={TextLogoStyled}>Next Js</Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {PAGES.map((page) => (
                <Button key={page} onClick={() => { }} sx={{ my: 2, color: 'white', display: 'block' }}>{page}</Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Account user">
                <IconButton onClick={(event: MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                  <Avatar alt="avatar user" src="https://joeschmoe.io/api/v1/random" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                {SETTINGS.map((setting) => (
                  <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                    <Typography textAlign={'center'}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl">{children}</Container>
    </section>
  )
}

export default MainLayout
