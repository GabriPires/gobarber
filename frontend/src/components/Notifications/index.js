import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Notification } from './styles';

function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Notification unread>
          <p>Você possui um novo agendamento para amanhã</p>
          <time>há 2 dias atrás</time>
          <button type="button">Marcar como lida</button>
        </Notification>

        <Notification>
          <p>Você possui um novo agendamento para amanhã</p>
          <time>há 2 dias atrás</time>
          <button type="button">Marcar como lida</button>
        </Notification>

        <Notification>
          <p>Você possui um novo agendamento para amanhã</p>
          <time>há 2 dias atrás</time>
          <button type="button">Marcar como lida</button>
        </Notification>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
