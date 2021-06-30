import { setBlockType } from 'tiptap-commands'
import Node from 'tiptap/src/Utils/Node'

export default class Paragraph extends Node {

  get name() {
    return 'paragraph'
  }

  get schema() {
    return {
      content: 'inline*',
      group: 'block',
      draggable: false,
      parseDOM: [{
        tag: 'div',
      }],
      toDOM: () => ['div', 0],
    }
  }

  commands({ type }) {
    return () => setBlockType(type)
  }

}