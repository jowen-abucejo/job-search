import { render, screen } from "@testing-library/vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

const renderHeaderContainer = (config = {}) =>
  render(HeaderContainer, {
    ...config,
  });

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    renderHeaderContainer({ slots: { title: "<h2>Title</h2>" } });

    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("allows parent component to provide subtitle content", () => {
    renderHeaderContainer({ slots: { subTitle: "<h3>Subtitle</h3>" } });

    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });
});
