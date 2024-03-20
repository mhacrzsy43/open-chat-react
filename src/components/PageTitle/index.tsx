import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · OpenChat` : 'OpenChat';
  }, [title]);

  return null;
});

export default PageTitle;
