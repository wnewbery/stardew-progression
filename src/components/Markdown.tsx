type MarkdownProps = {
  html: string
}
export default ({ html }: MarkdownProps) => {
  return <div className="markdown" dangerouslySetInnerHTML={{__html: html}}></div>
};