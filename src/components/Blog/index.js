import React from "react";
import { BlogPost } from './components'
import { NavBar } from "../NavBar";

const blogs = [{
    title: 'My 2023 Goals',
    body: 'Here are are my goals'
}]

export const Blog = (props) => {
    return (
        <>
            <NavBar />Blog
            <BlogPost blog={props.blogs[0]} />
        </>
    )
}