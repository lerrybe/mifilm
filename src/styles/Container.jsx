import styled from '@emotion/styled';

const Container = styled.div`
  box-sizing: border-box;
  color: white;
  font-family: 'DungGeunMo';

  @keyframes fadein {
    from { 
      opacity: 0; 
    }
    to { 
      opacity: 1; 
    }
  }
  animation: fadein 2s;
`;

export default Container;
