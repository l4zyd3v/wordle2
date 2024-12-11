// createHtmlConfig.ts + ------------------------------

type AttributeType = {
  name: string;
  value: string | number | boolean;
};

type CreateHTMLType = {
  elementName: string;
  className: string;
  elementContent?: string;
  attribute?: AttributeType;
  secondAttribute?: AttributeType;
};

type AddAttributeToHtmlType = {
  element: HTMLElement;
  attribute: AttributeType;
};

// keyboardConfig.ts --------------------------------

type CreateRowOfButtonsTypes = {
  buttonValues: Array<string>;
  elementName: string | undefined;
  className: string;
};

type CharacterTilesUtilsTypes = {
  numberOfRows: number;
  numberOfChar: number;
};

// logic.ts -----------------------------------------

type AnswerType = string[];

export type {
  CreateHTMLType,
  CreateRowOfButtonsTypes,
  CharacterTilesUtilsTypes,
  AnswerType,
  AddAttributeToHtmlType,
  AttributeType,
};
