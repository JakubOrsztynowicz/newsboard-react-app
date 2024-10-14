import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "/assets/defaultimg.png";

export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="mb-3 d-inline-block my-3 mx-3 px-2 py-2">
      <Card
        className="bg-dark text-light"
        style={{ minHeight: "400px", maxWidth: "345px" }}
      >
        <Card.Img
          style={{ height: "200px", width: "344px" }}
          variant="top"
          src={src ? src : image}
        />
        <Card.Body>
          <Card.Title>{title.slice(0, 50)}</Card.Title>
          <Card.Text>
            {description ? description.slice(0, 90) : "Latest News..."}
          </Card.Text>
          <Button href={url} ariant="primary">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsItem;
