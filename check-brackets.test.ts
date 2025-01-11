import { describe, test, it, expect } from 'bun:test'
import { checkBrackets } from './check-brackets';
const balanced = [
  '()',
  '[]',
  '{}',
  '<>',
  '([])',
  '({})',
  '([]{})',
  '([]{}<>)',
  '<(<(<()>)>)>',
  '({[]})',
  '({[<>]})',
  '<({[(<({[<>]})>)]})>',
  '<><><><<<>>><<<>>><><><<<>>>',
  '<abcdfeghijk>',
]

const unbalanced = [
  '(',
  ')',
  '({}',
  '([]{})}',
  '({[<]})',
  '<><><><',
  '<({<[(<({[<>]})>)]})>',
  '<><><><<<>>><<<>>><><><<<>>>)',
  '""',
  '<abcdfsasdferbkasdfoij',
]

describe('checkBrackets', () => {
  test.each(balanced)('%p should return true', (str) => {
    expect(checkBrackets(str)).toBe(true);
  })

  test.each(unbalanced)('%p should return false', (str) => {
    expect(checkBrackets(str)).toBe(false);
  })

  it('handles large strings', () => {
    const str = '<'.repeat(10_000_000);
    expect(checkBrackets(str)).toBe(false);

    const str2 = '>'.repeat(10_000_000);
    expect(checkBrackets(str + str2)).toBe(true);
  })
});

