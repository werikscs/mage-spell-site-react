import styled from 'styled-components';

interface IStyle {
  isExpanded: boolean;
}

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};

  .visible {
    display: block;
  }

  .invisible {
    display: none;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;

  height: ${({ theme }) => theme.sizes.genericElementHeight};

  padding: 7px 12px;

  cursor: pointer;

  > span {
    color: ${({ theme }) => theme.colors.text};

    font-weight: 500;
    font-size: 14px;
  }
`;

export const StyledExpandableDiv = styled.div<IStyle>`
  display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
`;
