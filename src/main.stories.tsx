import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SopherreRichEditor, SopherreRichEditorProps } from "./main";

export default {
  title: "Editor",
  component: SopherreRichEditor,
} as ComponentMeta<typeof SopherreRichEditor>;

export const Editor = (props: SopherreRichEditorProps) => (
  <SopherreRichEditor {...props} />
);

const Template: ComponentStory<typeof SopherreRichEditor> = (arg) => (
  <SopherreRichEditor {...arg} />
);

export const Basic = Template.bind({});
Basic.args = {};
