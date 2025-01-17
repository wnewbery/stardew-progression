import Showdown from "showdown";

Showdown.extension('links-new-tab', function() {
  return [{
    type: 'html',
    regex: /(<a [^>]+?)(>.*<\/a>)/g,
    replace: '$1 target="_blank"$2'
  }];
});

const converter = new Showdown.Converter({
  extensions: ['links-new-tab']
});

export function mdToHtml(md: string) {
  return converter.makeHtml(md);
}
