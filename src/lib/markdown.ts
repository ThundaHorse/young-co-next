/**
 * Simple markdown parser for blog posts
 * Converts basic markdown syntax to HTML
 */

export function parseMarkdown(content: string): string {
  return (
    content
      // Headers
      .replace(
        /^### (.*$)/gm,
        '<h3 class="text-xl font-medium text-gray-700 mt-5 mb-2">$1</h3>'
      )
      .replace(
        /^## (.*$)/gm,
        '<h2 class="text-2xl font-semibold text-gray-800 mt-6 mb-3">$1</h2>'
      )
      .replace(
        /^# (.*$)/gm,
        '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">$1</h1>'
      )

      // Bold and italic
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-gray-900">$1</strong>'
      )
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')

      // Code blocks
      .replace(
        /```([\s\S]*?)```/g,
        '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm"><code>$1</code></pre>'
      )
      .replace(
        /`([^`]+)`/g,
        '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>'
      )

      // Links
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>'
      )

      // Lists (simple implementation)
      .replace(
        /^- (.*$)/gm,
        '<li class="text-gray-700 leading-relaxed ml-4">• $1</li>'
      )
      .replace(
        /^(\d+)\. (.*$)/gm,
        '<li class="text-gray-700 leading-relaxed ml-4">$1. $2</li>'
      )

      // Paragraphs (split by double newlines)
      .split('\n\n')
      .map((paragraph) => {
        // Skip if already wrapped in HTML tags
        if (paragraph.startsWith('<')) {
          return paragraph;
        }
        // Wrap paragraphs
        return `<p class="mb-4 text-gray-700 leading-relaxed">${paragraph}</p>`;
      })
      .join('\n\n')

      // Clean up extra line breaks
      .replace(/\n/g, '<br />')
      .replace(/<br \/><br \/>/g, '<br />')

      // Wrap consecutive list items in ul tags
      .replace(
        /(<li class="text-gray-700 leading-relaxed ml-4">• .*?<\/li>(\s*<br \/>\s*<li class="text-gray-700 leading-relaxed ml-4">• .*?<\/li>)*)/g,
        '<ul class="list-none mb-4 space-y-1">$1</ul>'
      )

      // Clean up any remaining issues
      .replace(/<br \/>\s*<\/li>/g, '</li>')
      .replace(
        /<li class="text-gray-700 leading-relaxed ml-4">• /g,
        '<li class="text-gray-700 leading-relaxed ml-4">• '
      )
      .replace(/<\/li>\s*<br \/>/g, '</li>')
  );
}

export function extractExcerpt(
  content: string,
  maxLength: number = 200
): string {
  // Remove markdown formatting and HTML tags
  const plainText = content
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/- /g, '')
    .replace(/\n+/g, ' ')
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + '...';
}
