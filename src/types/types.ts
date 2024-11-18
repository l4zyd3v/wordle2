type CreateHTMLType = {
  elementName: string | undefined;
  className: string;
  elementContent?: string;
};

type CreateRowOfButtonsTypes = {
  buttonValues: Array<string>;
  elementName: string | undefined;
  className: string;
};

export type { CreateHTMLType, CreateRowOfButtonsTypes };
