import * as React from "react";

export interface SopherreRichEditorProps {
  label: string;
}
export const SopherreRichEditor: React.FC<SopherreRichEditorProps> = (
  props
) => {
  return <div>SopherreRichEditor Test {props.label}</div>;
};
