export function idPart(value: string | number): string {
  return String(value).replace(
    /[^A-Za-z0-9-]/gu,
    (character) => `_${(character.codePointAt(0) as number).toString(16)}_`,
  );
}
