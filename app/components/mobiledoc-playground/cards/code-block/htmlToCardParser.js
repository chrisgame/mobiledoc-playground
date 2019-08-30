export default function preToCardParser(node, builder, { addSection, nodeFinished }) {
  if (node.nodeType !== 1 || node.tagName !== 'PRE') {
    return;
  }

  let payload = {
    codeBlockContent: _buildCodeBlockPayload(node.textContent),
  }

  let cardSection = builder.createCardSection('mobiledoc-playground/cards/code-block/card', payload);

  addSection(cardSection);

  nodeFinished();
}

function _buildCodeBlockPayload(textContent) {
  return {
    'version': '0.3.1',
    'atoms': [],
    'cards': [],
    'markups': [],
    'sections': [
      [
        1,
        'p',
        [
          [
            0,
            [],
            0,
            textContent,
          ],
        ],
      ],
    ],
  }
}
