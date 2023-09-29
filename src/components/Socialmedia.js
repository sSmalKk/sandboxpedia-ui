import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

function Socialmedia() {
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
  const [messageAnchorEl, setMessageAnchorEl] = React.useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleMessageClick = (event) => {
    setMessageAnchorEl(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setNotificationAnchorEl(null);
    setMessageAnchorEl(null);
    setProfileAnchorEl(null);
  };

  return (
    <div className="d-flex justify-content-between">
      {/* Ícone de Notificações */}
      <Badge badgeContent={3} color="error" onClick={handleNotificationClick}>
        <NotificationsIcon />
      </Badge>
      {/* Ícone de Mensagens */}
      <Badge badgeContent={2} color="error" onClick={handleMessageClick}>
        <MessageIcon />
      </Badge>
      {/* Ícone de Perfil */}
      <Badge badgeContent={1} color="error" onClick={handleProfileClick}>
        <PersonIcon />
      </Badge>

      {/* Popover de Notificações */}
      <Popover
        open={Boolean(notificationAnchorEl)}
        anchorEl={notificationAnchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography>Conteúdo de Notificações</Typography>
      </Popover>

      {/* Popover de Mensagens */}
      <Popover
        open={Boolean(messageAnchorEl)}
        anchorEl={messageAnchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography>Conteúdo de Mensagens</Typography>
      </Popover>

      {/* Popover de Perfil */}
      <Popover
        open={Boolean(profileAnchorEl)}
        anchorEl={profileAnchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography>Conteúdo do Perfil</Typography>
      </Popover>
    </div>
  );
}

export default Socialmedia;
