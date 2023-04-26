import {
    HomeContainer,
    HomeTitle,
    TextContainer,
    Text,
    TextSpan,
  } from './Home.styled';

const Home = () => {
    return (
      <HomeContainer>
        <HomeTitle>Welcome to Phonebook application!</HomeTitle>
  
        <TextContainer>
          <Text>
            If you have already registered, than you should{' '}
            <TextSpan>authorize</TextSpan>. If you don't have your account, you
            should firstly <TextSpan>register</TextSpan>.
          </Text>
        </TextContainer>
      </HomeContainer>
    );
  };

export default Home;