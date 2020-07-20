import React from 'react';

import { Container, RocketseatIcon, Dot, Retweeted, Body, Avatar, Content, Header, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time> 15 de jul</time>
          </Header>

          <Description>
            Foguete não tem ré
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              13
            </Status>
            <Status>
              <RetweetIcon />
              13
            </Status>
            <Status>
              <LikeIcon />
              13
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;