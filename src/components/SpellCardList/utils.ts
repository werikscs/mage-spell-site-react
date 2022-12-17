import { light } from '../../styles/themes-style';

function calcDinamicWidth(width: number): number {
  if (width < light.sizes.maxMobileScreen) return width;

  const widthMinusSideMenu = width - Number(light.sizes.sideMenu.slice(0, -2));
  return widthMinusSideMenu;
}

function calcCollumsCount(width: number): number {
  const cardSize = 364;
  const dinamicWidth = calcDinamicWidth(width);
  const columnCount = Math.floor(dinamicWidth / cardSize) || 1;

  return columnCount;
}

export { calcCollumsCount, calcDinamicWidth };
