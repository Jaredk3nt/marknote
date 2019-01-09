import { useState, useEffect } from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

function generateMd(content) {
  return remark().use(reactRenderer).processSync(content).contents;
}

function MarkdownRenderer({ src }) {
  const [md, setMd] = useState(null);
  useEffect(() => {
    setMd(generateMd(src));
  }, [src]);

  return md;
}

export default MarkdownRenderer;