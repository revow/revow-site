interface MarkdownRendererProps {
  content: string;
}

function parseMarkdown(md: string): string {
  let html = md
    // Escape HTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Headings
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-text-primary mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-text-primary mt-10 mb-4 font-[family-name:var(--font-space-grotesk)]">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-text-primary mt-10 mb-4 font-[family-name:var(--font-space-grotesk)]">$1</h1>')
    // Bold + Italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li class="ml-4 pl-2 text-text-secondary leading-relaxed">$1</li>')
    // Wrap consecutive li in ul
    .replace(
      /(<li[^>]*>.*?<\/li>\n?)+/g,
      '<ul class="list-disc space-y-2 my-4">$&</ul>'
    )
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="my-8 border-border" />')
    // Paragraphs: wrap lines that aren't already HTML tags
    .replace(/^(?!<[a-z])((?!^\s*$).+)$/gm, (match) => {
      if (match.startsWith("<")) return match;
      return `<p class="text-text-secondary leading-relaxed mb-4">${match}</p>`;
    });

  // Clean up empty paragraphs
  html = html.replace(/<p[^>]*>\s*<\/p>/g, "");

  return html;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const html = parseMarkdown(content);
  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
