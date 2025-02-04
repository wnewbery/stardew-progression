const images = import.meta.glob('../assets/game_icons/**/*.png', { eager: true, query: '?url', import: 'default' });

function normalizeName(name: string) {
  return name
    .toLocaleLowerCase()
    .replaceAll(/['()]/g, '')
    .replaceAll('-', '_');
}

const iconMap = new Map(Object.keys(images).map(filename => {
  const match = filename.match(/\/([^/]+)\.png/);
  if (!match || !match[1]) throw new Error(`Unrecognised filename ${filename}.`);
  const name = normalizeName(match[1]);
  const path = images[filename] as string;

  return [name, path];
}));

export default function icon(name: string) {
  const file = normalizeName(name);
  const path = iconMap.get(file);
  if (!path) throw new Error(`Unknown icon ${name}`);
  return path;
}
export { iconMap };
