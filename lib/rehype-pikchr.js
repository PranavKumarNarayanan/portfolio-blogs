import { visit } from 'unist-util-visit';
import { fromHtml } from 'hast-util-from-html';

export function rehypePikchr() {
  return async function (tree) {
    const loadPikchr = (await import('pikchr-js')).default;
    const pikchr = await loadPikchr();

    const nodes = [];

    visit(tree, 'element', (node, index, parent) => {
      if (
        node.tagName === 'pre' &&
        node.children?.[0]?.tagName === 'code' &&
        node.children[0].properties?.className?.includes('language-pikchr')
      ) {
        nodes.push({ node, index, parent });
      }
    });

    for (const { node, index, parent } of nodes) {
      const code = node.children[0].children[0]?.value || '';
      const svg = pikchr(code.trim());

      // Parse with explicit 'svg' space to preserve case-sensitive attributes (like viewBox)
      const parsed = fromHtml(svg, { space: 'svg', fragment: true });

      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['pikchr-diagram'] },
        children: parsed.children,
      };
    }
  };
}