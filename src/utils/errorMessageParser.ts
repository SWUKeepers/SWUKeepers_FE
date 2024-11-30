export const extractErrorMessageFromString = (inputString: string): string => {
  try {
    const parsedInput = JSON.parse(inputString);
    const errorString = parsedInput.error;

    const normalizedString = errorString.replace(/'/g, '"');

    const match = normalizedString.match(/string="(.*?)"/);
    return match ? match[1] : 'Error message not found';
  } catch (error) {
    console.error(error);
    return 'Invalid error format';
  }
};
