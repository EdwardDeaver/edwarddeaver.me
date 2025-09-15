// Generate paragraph from markdown
export const generateParagraph = (text: string) => {
  return text.split('\n\n').map(para => `<p>${para}</p>`);
};