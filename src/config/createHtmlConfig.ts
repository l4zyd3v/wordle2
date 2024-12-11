import { AddAttributeToHtmlType, AttributeType } from "../types/types";

function createHtmlUtils() {
  return {
    addAttributeToHtml: ({ element, attribute }: AddAttributeToHtmlType) => {
      attribute &&
        element.setAttribute(attribute.name, String(attribute.value));
    },
  };
}
export { createHtmlUtils };
