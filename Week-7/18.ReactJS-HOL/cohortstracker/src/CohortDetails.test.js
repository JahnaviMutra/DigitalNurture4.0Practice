import React from "react";
import { mount, shallow } from "enzyme";
import CohortDetails from "./CohortDetails";
import { CohortsData } from "./Cohort";

describe("Cohort Details Component", () => {
  
  test("should create the component", () => {
    const wrapper = shallow(<CohortDetails cohort={CohortsData[0]} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should initialize the props", () => {
    const cohort = CohortsData[0];
    const wrapper = mount(<CohortDetails cohort={cohort} />);
    expect(wrapper.props().cohort).toEqual(cohort);
  });

  test("should display cohort code in h3", () => {
    const cohort = CohortsData[0];
    const wrapper = mount(<CohortDetails cohort={cohort} />);
    const h3Text = wrapper.find("h3").text();
    expect(h3Text).toContain(cohort.cohortCode);
    expect(h3Text).toContain(cohort.technology);
  });

  test("should always render same html", () => {
    const cohort = CohortsData[0];
    const wrapper = shallow(<CohortDetails cohort={cohort} />);
    expect(wrapper).toMatchSnapshot();
  });
});
