import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const InitialIntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  animation: 'fade-in' 2s ease-out both;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const InitialIntroImg = styled.img`
  object-fit: contain;
  height: 100vh;
  width: 100vw;
`;

function InitialIntro() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2300);
  });

  return (
    <InitialIntroContainer>
      <InitialIntroImg
        src='Images/team_logo.jpg'
        alt='애플리케이션을 제작한 팀의 로고 이미지'
      />
    </InitialIntroContainer>
  );
}

export default InitialIntro;
