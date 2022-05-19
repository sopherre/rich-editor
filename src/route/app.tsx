import * as React from "react";
import { SopherreRichEditor } from "../main";
import styled from "styled-components";

export const App: React.FC = () => {
  const [value, setValue] = React.useState("init value");

  return (
    <div>
      <div>title : Sopherre Rich Editor</div>
      <EditorWrapper>
        <SopherreRichEditor value={value} onChange={setValue} />
      </EditorWrapper>
      <div>{value}</div>
    </div>
  );
};

const EditorWrapper = styled("div")(() => ({
  backgroundColor: "gray",
  padding: 8
}));
