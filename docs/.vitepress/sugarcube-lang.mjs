// SugarCube 语法高亮语法(TextMate 格式),scope 与 theme/custom.css 一一对应
export default {
  name: 'sugarcube',
  displayName: 'SugarCube',
  scopeName: 'source.sugarcube',
  patterns: [
    { include: '#comment' },
    { include: '#string' },
    { include: '#macro' },
    { include: '#link' },
    { include: '#variable' }
  ],
  repository: {
    comment: {
      patterns: [
        { match: '/\\*[\\s\\S]*?\\*/', name: 'comment.block.sugarcube' },
        { match: '/%[\\s\\S]*?%/', name: 'comment.block.sugarcube' },
        { match: '<!--[\\s\\S]*?-->', name: 'comment.block.sugarcube' }
      ]
    },
    string: {
      match: '(?:"(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')',
      name: 'string.quoted.sugarcube'
    },
    macro: {
      match: '<<(/?)([^\\s>]+)',
      captures: {
        '2': { name: 'keyword.control.sugarcube' }
      }
    },
    link: {
      match: '\\[\\[[^\\]\\n]+\\]\\]',
      name: 'constant.other.link.sugarcube'
    },
    variable: {
      patterns: [
        { match: '\\$[A-Za-z_][A-Za-z0-9_]*', name: 'variable.other.story.sugarcube' },
        { match: '\\b_[A-Za-z][A-Za-z0-9_]*', name: 'variable.other.temp.sugarcube' }
      ]
    }
  }
}
