import { Mark } from 'tiptap'
import { toggleMark } from 'tiptap-commands'

export default class Span21 extends Mark {

  get name() {
    return 'span21'
  }

  get schema() {
    return {
      attrs: {
        class: {
          default: 'colored-bg',
        },
      },
      parseDOM: [
        {
          tag: 'span[class]',
        },
      ],
      toDOM: node => ['span', node.attrs],
    }
  }

  keys({ type }) {
    return {
      'Mod-u': toggleMark(type),
    }
  }

  commands({ type }) {
    return () => toggleMark(type)
  }

}
