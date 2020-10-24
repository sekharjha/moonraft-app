import React from "react";
import "../styles.css";
import Base from "./Base";
import CarouselComponent from "../component/Slider/carousel";
import Features from '../Container/feature'
import ProjectCards from '../Container/Projects'
import BottomCarousel from "../component/Slider/bottomCarousel";
import Phases from "../Container/Phases"
import Card from "../component/creativity/Card"
export default function Home() {

  return (
    <Base title="Home Page">
     <CarouselComponent></CarouselComponent>
     <Features></Features>
      <ProjectCards></ProjectCards>
      
      <Phases></Phases>
      <Card></Card>
      <BottomCarousel></BottomCarousel>
    </Base>
  );
}
