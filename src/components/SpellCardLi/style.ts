import styled from 'styled-components';

interface IStyledLi {
  width: number;
}

const StyledLi = styled.li<IStyledLi>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-wrap: wrap;

  min-width: ${({ width }) => width};
  width: 100%;

  height: auto;

  padding: 16px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.secondary};

  box-shadow: 0 4px 4px ${({ theme }) => theme.colors.shadow};

  @media screen and (min-width: 700px) {
    width: calc((${({ width }) => width}px / 2) - 32px);
  }

  @media screen and (min-width: 1024px) {
    width: calc(
      (${({ width }) => width}px) - 32px -
        ${({ theme }) => theme.sizes.sideMenu}
    );

    flex: 1 0 360px;
  }

  .spell-header {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: ${({ theme }) => theme.colors.accent};

    .spell-name {
      font-weight: bold;
      font-size: 18px;
    }

    .spell-level {
      font-weight: medium;
      font-size: 13px;
    }
  }

  .spell-props {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 15px;

    color: ${({ theme }) => theme.colors.text};

    > span {
      font-weight: bold;

      > span {
        font-weight: normal;
        padding-left: 4px;
      }
    }
  }

  .spell-descriptions {
    font-size: 15px;
    font-weight: normal;

    text-align: justify;

    color: ${({ theme }) => theme.colors.text};

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .spell-extra-info {
    display: flex;
    flex-direction: column;

    .info-title {
      font-size: 15px;
      font-weight: bold;

      color: ${({ theme }) => theme.colors.text};
    }

    .main-description {
      font-size: 15px;
      font-weight: normal;

      text-align: justify;

      color: ${({ theme }) => theme.colors.text};

      display: block;

      margin-bottom: 8px;
    }
  }

  .spell-last-edited {
    color: ${({ theme }) => theme.colors.accent};

    font-size: 12px;
    font-weight: normal;

    font-style: italic;

    margin-top: auto;
  }

  .spell-footer {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.colors.accent};

    font-size: 12px;
    font-weight: normal;

    .author {
      margin-right: auto;
    }

    span {
      display: flex;
      align-items: center;
    }
  }
`;

export default StyledLi;
