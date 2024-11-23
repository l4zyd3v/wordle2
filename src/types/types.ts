// utils.ts
type CreateHTMLType = {
  elementName: string | undefined;
  className: string;
  elementContent?: string;
};

// keyboardConfig.ts
type CreateRowOfButtonsTypes = {
  buttonValues: Array<string>;
  elementName: string | undefined;
  className: string;
};

// keyboardConfig.ts
type CharacterTilesUtilsTypes = {
  numberOfRows: number;
  numberOfChar: number;
};

export type {
  CreateHTMLType,
  CreateRowOfButtonsTypes,
  CharacterTilesUtilsTypes,
};
