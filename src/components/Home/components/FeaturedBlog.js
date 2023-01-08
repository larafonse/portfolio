import React from "react";
import Card from 'react-bootstrap/Card';

export const FeatureBlog = (props) => {
    return (<div className="container">
        <Card>
            <Card.Title>Feature Blog Post</Card.Title>
            <Card.Title>{props.blog.title}</Card.Title>
            <Card.Body>{props.blog.body}</Card.Body>
        </Card>
    </div>
    )
}