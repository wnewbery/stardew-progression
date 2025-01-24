export default function normaliseId(str: string) {
  return str.toLocaleLowerCase()
    .replaceAll(' ', '_')
    .replaceAll(/[\':()]/g, '');
}
