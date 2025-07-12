import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #1a73e8;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #5f6368;
`;

const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: #1a73e8;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1557b0;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <StyledLink to="/">Back to Home</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;
