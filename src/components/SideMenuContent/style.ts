import styled from 'styled-components';

type SectionProps = {
  width: number;
  height: number;
};

const StyledSection = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: ${({ theme }) => theme.sizes.sideMenu};
  height: calc(
    ${({ height }) => height}px - ${({ theme }) => theme.sizes.headerHeight}
  );

  padding: 16px;

  box-shadow: -2px 5px 5px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.secondary};

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  .divider:last-of-type {
    margin-top: auto;
  }
`;

export default StyledSection;
