// utils.ts
type CreateHTMLType = {
  elementName: string | undefined;
  className: string;
  elementContent?: string;
  attribute?: {
    name: string;
    value: number;
  };
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

// LOL LOL LOL
// omg life is a lie
// TYPINGF!!!!!!
// ---------------------------------------------------
// ---------------------------------------------------

// logic.ts
type AnswerType = string[];

export type {
  CreateHTMLType,
  CreateRowOfButtonsTypes,
  CharacterTilesUtilsTypes,
  AnswerType,
};
