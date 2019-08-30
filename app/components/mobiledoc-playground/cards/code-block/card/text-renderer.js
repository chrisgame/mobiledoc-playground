import Renderer from 'mobiledoc-text-renderer';

export default {
  name: 'mobiledoc-playground/cards/code-block/card',
  type: 'text',
  render({ payload }) {
    let renderer = new Renderer();
    let { result: rendered } = renderer.render(payload.codeBlockContent);

    return rendered;
  }
}
