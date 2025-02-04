const images = import.meta.glob('../assets/game_icons/**/*.png', { eager: true, query: '?url', import: 'default' });

function normalizeName(name: string) {
  return name
    .toLocaleLowerCase()
    .replaceAll(/[\'\(\)]/g, '')
    .replaceAll('-', '_');
}

let iconMap = new Map(Object.keys(images).map(filename => {
  let match = filename.match(/\/([^\/]+)\.png/);
  if (!match || !match[1]) throw new Error(`Unrecognised filename ${filename}.`);
  let name = normalizeName(match[1]);
  let path = images[filename] as string;

  return [name, path];
}));

export default function icon(name: string) {
  let file = normalizeName(name);
  let path = iconMap.get(file);
  if (!path) throw new Error(`Unknown icon ${name}`);
  return path;
}
export { iconMap };
