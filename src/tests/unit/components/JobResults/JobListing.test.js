import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

const renderJobListing = (job) =>
  render(JobListing, {
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
    props: {
      job,
    },
  });

describe("JobListing", () => {
  it("renders job's title", () => {
    const jobProps = { title: "Vue Developer" };
    renderJobListing(jobProps);
    expect(screen.getByText("Vue Developer")).toBeInTheDocument();
  });

  it("renders job's organization", () => {
    const jobProps = { organization: "VueJS.org" };
    renderJobListing(jobProps);
    expect(screen.getByText("VueJS.org")).toBeInTheDocument();
  });

  it("renders job's locations", () => {
    const jobProps = { locations: ["BGC Taguig"] };
    renderJobListing(jobProps);
    expect(screen.getByText("BGC Taguig")).toBeInTheDocument();
  });

  it("renders job's qualifications", () => {
    const jobProps = {
      minimumQualifications: ["At least 2 years experience in role"],
    };
    renderJobListing(jobProps);
    expect(
      screen.getByText("At least 2 years experience in role")
    ).toBeInTheDocument();
  });
});
