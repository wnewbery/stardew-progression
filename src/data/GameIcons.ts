const images = require.context('../assets/game_icons', false, /\.png$/);

let iconMap = new Map(images.keys().map(filename => {
  let match = filename.match(/\/([^\/]+)\.png/);
  if (!match || !match[1]) throw new Error(`Unrecognised filename ${filename}.`);
  let name = match[1].toLocaleLowerCase().replaceAll('\'', '');
  let path = images(filename).default as string;

  return [name, path];
}));

export default function icon(name: string) {
  let file = name.toLocaleLowerCase().replaceAll(':', '');
  let path = iconMap.get(file);
  if (!path) throw new Error(`Unknown icon ${name}`);
  return path;
}
export {iconMap};
