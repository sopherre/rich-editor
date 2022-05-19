import * as React from "react";
import styled from "styled-components";

export interface SopherreRichEditorProps {
  value: string;
  onChange: (value: string) => void;
}
export const SopherreRichEditor: React.FC<SopherreRichEditorProps> = props => {
  const [html, setHtml] = React.useState("init");

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    const currentHtml = e.currentTarget.innerHTML;
    setHtml(currentHtml);
  };

  return (
    <Editor
      contentEditable
      onInput={onInput}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const Editor = styled("div")(() => ({}));
