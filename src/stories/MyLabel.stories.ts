import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, MyLabelProps } from "../components/MyLabel";

const meta: Meta<MyLabelProps> = {
  title: "UI/Labels/MyLabel",
  tags: ["autodocs"],
  component: MyLabel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["normal", "h1", "h2", "h3"],
      control: { type: "inline-radio" },
    },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All caps label",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom color label",
    fontColor: "#5517ac",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom background label",
    fontColor: "#fff",
    backgroundColor: "#000",
  },
};
