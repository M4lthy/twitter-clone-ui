import React from 'react';

import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Senior Coelho</h1>
        <h2>@ozzicl13</h2>

        <p>
          Técnico em Tecnologia da Informação em <a href="https://ufam.edu.br">@ufam</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Manaus, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 01 de julho de 1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>13</strong>
          </span>
          <span>
            <strong>13 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;