import React, { Component } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionFirst from "./components/section-1";
import SectionSecond from "./components/section-2";
import SectionThird from "./components/section-3";
import SectionFor from "./components/section-4";
import SectionFive from "./components/section-5";
import SectionSix from "./components/section-6";
import SectionSeven from "./components/section-7";
import SectionEight from "./components/section-8";
import SectionNine from "./components/section-9";
import SectionTen from "./components/section-10";
import SectionEleven from "./components/section-11";
import ScrollTop from "../scroll-top";

import "./main.css";

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="section-1">
          <Container>
            <SectionFirst />
          </Container>
        </div>
        <div className="section-2">
          <SectionSecond />
        </div>
        <div className="section-3">
          <Container>
            <SectionThird />
          </Container>
        </div>
        <div className="section-4">
          <Container>
            <SectionFor />
          </Container>
        </div>
        <div className="section-5">
          <Container>
            <SectionFive />
          </Container>
        </div>
        <div className="section-6">
          <Container>
            <SectionSix />
          </Container>
        </div>
        <div className="section-7">
          <SectionSeven />
        </div>
        <div className="section-8">
          <Container>
            <SectionEight />
          </Container>
        </div>
        <div className="section-9">
          <Container>
            <SectionNine />
          </Container>
        </div>
        <div className="section-10">
          <Container>
            <SectionTen />
          </Container>
        </div>
        <div className="section-11">
          <Container>
            <SectionEleven />
          </Container>
          <ScrollTop />
        </div>
      </main>
    );
  }
}
