interface WikiProps {
  children: string;
}
export default function Wiki({ children }: WikiProps) {
  const [label, wiki_page] = children.split('|');
  const url_path = encodeURIComponent(wiki_page ?? label);
  const url = `https://stardewvalleywiki.com/${url_path}`;
  return <a target="_blank" href={url}>{label}</a>;
}
