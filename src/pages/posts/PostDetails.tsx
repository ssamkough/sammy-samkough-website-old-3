import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Post = (props: any) => {
  const post = props.location.state;
  return (
    <Container>
      <br></br>
      <Row>
        <Col>
          <div className="entity-header-text">
            <h3>{post.title}</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="entity-text-wall">
            {post.content.split("\n").map((line: string, e: number) => (
              <p className="post-content-line" key={e}>
                {line.search(/https:\/\/[^\s]*/g) === -1 ? (
                  <span>{line}</span>
                ) : (
                  <a target="_blank" rel="noopener noreferrer" href={line}>
                    {line}
                  </a>
                )}
              </p>
            ))}
          </div>
          {post.helpers.length > 0 ? (
            <div>
              Thanks to{" "}
              {post.helpers &&
                post.helpers.map((helper: any) => {
                  return (
                    <span post-tag={helper} key={helper.toString()}>
                      {helper}
                      {", "}
                    </span>
                  );
                })}
              for reviewing drafts.
            </div>
          ) : (
            <div></div>
          )}

          <hr className="entity-details-divider" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            {post.tags &&
              post.tags.map((tag: any) => {
                return (
                  <span post-tag={tag} key={tag.toString()}>
                    {tag}{" "}
                  </span>
                );
              })}
          </div>
          <div>{post.date}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
