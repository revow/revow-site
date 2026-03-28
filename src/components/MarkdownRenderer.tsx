interface MarkdownRendererProps {
  content: string;
}

function parseMarkdown(md: string): string {
  // Split into blocks by double newline
  const blocks = md.split(/\n\n+/);
  const htmlBlocks: string[] = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Horizontal rule
    if (/^---+$/.test(trimmed)) {
      htmlBlocks.push('<hr class="my-8 border-border" />');
      continue;
    }

    // Headings
    const h1 = trimmed.match(/^# (.+)$/);
    if (h1) {
      htmlBlocks.push(`<h1 class="text-3xl font-bold text-text-primary mt-10 mb-4 font-[family-name:var(--font-space-grotesk)]">${inlineFormat(h1[1])}</h1>`);
      continue;
    }
    const h2 = trimmed.match(/^## (.+)$/);
    if (h2) {
      htmlBlocks.push(`<h2 class="text-2xl font-bold text-text-primary mt-10 mb-4 font-[family-name:var(--font-space-grotesk)]">${inlineFormat(h2[1])}</h2>`);
      continue;
    }
    const h3 = trimmed.match(/^### (.+)$/);
    if (h3) {
      htmlBlocks.push(`<h3 class="text-xl font-bold text-text-primary mt-8 mb-3">${inlineFormat(h3[1])}</h3>`);
      continue;
    }

    // Unordered list (lines starting with -)
    const lines = trimmed.split("\n");
    if (lines.every((l) => /^- /.test(l.trim()))) {
      const items = lines
        .map((l) => l.trim().replace(/^- /, ""))
        .map((l) => `<li class="ml-4 pl-2 text-text-secondary leading-relaxed">${inlineFormat(l)}</li>`)
        .join("\n");
      htmlBlocks.push(`<ul class="list-disc space-y-2 my-4">${items}</ul>`);
      continue;
    }

    // Table
    if (trimmed.includes("|") && lines.length >= 2 && /\|[-:]+\|/.test(lines[1] || "")) {
      const headerCells = lines[0].split("|").filter(Boolean).map((c) => c.trim());
      const rows = lines.slice(2).filter((l) => l.includes("|"));
      let table = '<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">';
      table += "<thead><tr>";
      for (const cell of headerCells) {
        table += `<th class="text-left p-3 border-b-2 border-border font-semibold text-text-primary">${inlineFormat(cell)}</th>`;
      }
      table += "</tr></thead><tbody>";
      for (const row of rows) {
        const cells = row.split("|").filter(Boolean).map((c) => c.trim());
        table += "<tr>";
        for (const cell of cells) {
          table += `<td class="p-3 border-b border-border text-text-secondary">${inlineFormat(cell)}</td>`;
        }
        table += "</tr>";
      }
      table += "</tbody></table></div>";
      htmlBlocks.push(table);
      continue;
    }

    // Default: paragraph (may be multi-line)
    const text = lines.map((l) => inlineFormat(l.trim())).join("<br />");
    htmlBlocks.push(`<p class="text-text-secondary leading-relaxed mb-4">${text}</p>`);
  }

  return htmlBlocks.join("\n");
}

function inlineFormat(text: string): string {
  return (
    text
      // Escape HTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // Bold + Italic
      .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
      // Bold
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
  );
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
