import TextInput from "../../components/Shared/TextInput.vue";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

describe("TextInput", () => {
  it("communicates that user enter character", async () => {
    const { emitted } = render(TextInput, { props: { modelValue: "" } });
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "SOFTWARE");

    const messages = emitted()["update:modelValue"];
    expect(messages).toEqual([
      ["S"],
      ["SO"],
      ["SOF"],
      ["SOFT"],
      ["SOFTW"],
      ["SOFTWA"],
      ["SOFTWAR"],
      ["SOFTWARE"],
    ]);
  });
});
