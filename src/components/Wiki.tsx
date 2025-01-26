interface WikiProps {
  children: string;
}
export default ({ children }: WikiProps) => {
  let [label, wiki_page] = children.split('|');
  wiki_page ??= label;
  let url = `https://stardewvalleywiki.com/${encodeURIComponent(wiki_page)}`;
  return <a target="_blank" href={url}>{label}</a>;
}
