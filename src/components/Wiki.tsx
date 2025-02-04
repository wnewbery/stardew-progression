interface WikiProps {
  children: string;
}
export default function Wiki({ children }: WikiProps) {
  let [label, wiki_page] = children.split('|');
  wiki_page ??= label;
  const url = `https://stardewvalleywiki.com/${encodeURIComponent(wiki_page)}`;
  return <a target="_blank" href={url}>{label}</a>;
}
