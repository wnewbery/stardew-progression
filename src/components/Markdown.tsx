import { mdToHtml } from "../util/Markdown";

type Props = {
  html?: string;
  md?: string;
}


export default (props: Props) => {
  if (props.html) {
    return <div className="markdown" dangerouslySetInnerHTML={{__html: props.html}}></div>
  }
  else if (props.md) {
    return <div className="markdown" dangerouslySetInnerHTML={{__html: mdToHtml(props.md)}}></div>
  }
  else return <div>Missing markdown</div>;
};
