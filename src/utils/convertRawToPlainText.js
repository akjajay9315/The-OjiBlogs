import { convertFromRaw } from "draft-js";

export const convertRawToPlainText = (rawContent) => {
  try {
    const contentState = convertFromRaw(JSON.parse(rawContent));
    return contentState.getPlainText();
  } catch (error) {
    console.error("Error converting raw Draft.js content:", error);
    return ""; // Return empty string in case of an error
  }
};


