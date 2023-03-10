import { render, screen } from "@testing-library/vue";
import axios from "axios";

import SpotLight from "@/components/Hero/SpotLight.vue";
import { RouterLinkStub } from "@vue/test-utils";
import type { Mock } from "vitest";

vi.mock("axios");

const axiosGetMock = axios.get as Mock;

describe("SpotLight", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [{ title: "SpotLight 1" }],
    });
  });

  it("renders spotlight items", async () => {
    render(SpotLight, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      slots: {
        default: `<template #default='slotProps'><h2>{{slotProps.spotlight.title}}</h2></template>`,
      },
    });
    const spotLightTitle = await screen.findByText("SpotLight 1");
    expect(spotLightTitle).toBeInTheDocument();
  });
});
