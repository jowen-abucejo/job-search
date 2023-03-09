import { createPinia, setActivePinia } from "pinia";
import axios from "axios";
import type { Mock } from "vitest";

import { useDegreesStore } from "@/stores/degrees";

vi.mock("axios");
const axiosGetMock = axios.get as Mock;

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores all degrees that jobs may require", () => {
    const store = useDegreesStore();
    expect(store.degrees).toEqual([]);
  });
});

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("FETCH_DEGREES", () => {
    it("makes an API call and store degrees", async () => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            id: 1,
            degree: "Degree 1",
          },
        ],
      });

      const store = useDegreesStore();
      await store.FETCH_DEGREES();

      expect(store.degrees).toEqual([
        {
          id: 1,
          degree: "Degree 1",
        },
      ]);
    });
  });
});

describe("getters", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("UNIQUE_DEGREES", () => {
    it("finds unique degrees from collection of degrees", async () => {
      const store = useDegreesStore();
      store.degrees = [
        {
          id: 1,
          degree: "Degree 1",
        },
        {
          id: 2,
          degree: "Degree 2",
        },
      ];

      const result = store.UNIQUE_DEGREES;
      expect(store.degrees).toEqual([
        {
          id: 1,
          degree: "Degree 1",
        },
        {
          id: 2,
          degree: "Degree 2",
        },
      ]);
    });
  });
});
