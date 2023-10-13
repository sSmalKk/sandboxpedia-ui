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

  const iconStyle = {
    color: 'white',
    border: '1px solid transparent',
    borderRadius: '50%', // Bordas redondas
    transition: 'border-color 0.3s, background-color 0.3s, color 0.3s',
  };

  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      {/* Ícone de Notificações */}
      <Badge badgeContent={3} color="error" onClick={handleNotificationClick}>
        <NotificationsIcon
          className="icon"
          style={{
            ...iconStyle, // Aplicando estilo com bordas redondas
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'gray';
            e.currentTarget.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        />
      </Badge>
      {/* Ícone de Mensagens */}
      <Badge badgeContent={2} color="error" onClick={handleMessageClick}>
        <MessageIcon
          className="icon"
          style={{
            ...iconStyle, // Aplicando estilo com bordas redondas
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'gray';
            e.currentTarget.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        />
      </Badge>
      {/* Ícone de Perfil */}
      <Badge badgeContent={1} color="error" onClick={handleProfileClick}>
        <PersonIcon
          className="icon"
          style={{
            ...iconStyle, // Aplicando estilo com bordas redondas
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'gray';
            e.currentTarget.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        />
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
