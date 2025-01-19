interface WikiProps {
  children: string;
}
export default ({ children }: WikiProps) => {
  let url = `https://stardewvalleywiki.com/${encodeURIComponent(children)}`;
  return <a target="_blank" href={url}>{children}</a>;
}
