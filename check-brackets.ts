export function checkBrackets(str: string) {
  const stack: string[] = [];
  const openBrackets = ['<', '(', '[', '{'];
  const closeBrackets = ['>', ')', ']', '}'];
  let hasBrackets = false

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openBrackets.includes(char)) {
      stack.push(char);
      hasBrackets = true
    } else if (closeBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      const lastOpenBracket = stack.pop();
      if (lastOpenBracket && openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)) {
        return false;
      }
    }
  }

  return hasBrackets && stack.length === 0;
}
