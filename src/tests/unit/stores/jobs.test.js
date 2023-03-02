import { createPinia, setActivePinia } from "pinia";
import { useJobsStore } from "@/stores/jobs";

import axios from "axios";

vi.mock("axios");

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores list of jobs", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});

describe("actions", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("FETCH_JOBS", () => {
    it("makes an API request and stores received jobs", async () => {
      axios.get.mockResolvedValue({
        data: ["Job1"],
      });
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(["Job1"]);
    });
  });
});
