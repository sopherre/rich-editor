import * as React from "react";
import styled from "styled-components";

export interface SopherreRichEditorProps {
  value: string;
}
export const SopherreRichEditor: React.FC<SopherreRichEditorProps> = props => {
  const [value, setValue] = React.useState("");

  return <Editor contentEditable={true} placeholder="test" />;
};

const Editor = styled("div")(() => ({}));
