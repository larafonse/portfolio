import React from "react";
import { NavBar } from "../NavBar";
import { FeatureBlog } from "./components/FeaturedBlog";
export const Home = (props) => {
    return (
        <>
            <NavBar />
            <FeatureBlog blog={props.blogs[0]} />
        </>
    )
}