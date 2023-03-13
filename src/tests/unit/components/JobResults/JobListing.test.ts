import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";
import type { Job } from "@/api/types";

const renderJobListing = (job: Job) =>
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
  const createJob = (job: Partial<Job> = {}) => ({
    id: 1,
    title: "Angular Developer",
    organization: "Vue and Me",
    degree: "Master's",
    jobType: "Intern",
    locations: ["Lisbon"],
    minimumQualifications: [
      "Mesh granular deliverables, engineer enterprise convergence",
    ],
    preferredQualifications: [
      "Mesh wireless metrics, syndicate innovative markets",
    ],
    description: ["Away someone forget effect wait land."],
    dateAdded: "2021-07-04",
    ...job,
  });
  it("renders job's title", () => {
    const jobProps = { title: "Vue Developer" };
    renderJobListing(createJob(jobProps));
    expect(screen.getByText("Vue Developer")).toBeInTheDocument();
  });

  it("renders job's organization", () => {
    const jobProps = { organization: "VueJS.org" };
    renderJobListing(createJob(jobProps));
    expect(screen.getByText("VueJS.org")).toBeInTheDocument();
  });

  it("renders job's locations", () => {
    const jobProps = { locations: ["BGC Taguig"] };
    renderJobListing(createJob(jobProps));
    expect(screen.getByText("BGC Taguig")).toBeInTheDocument();
  });

  it("renders job's qualifications", () => {
    const jobProps = {
      minimumQualifications: ["At least 2 years experience in role"],
    };
    renderJobListing(createJob(jobProps));
    expect(
      screen.getByText("At least 2 years experience in role")
    ).toBeInTheDocument();
  });
});
