import React, {Fragment, useContext} from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import {CardContext} from "../App";

const CardComponent = () => {
  const value = useContext(CardContext);

  const deleteUser = (id) => {
    let index = value.array.findIndex((x) => x.id == id);
    value.array.splice(index, 1);
    value.setarray([...value.array]);
  };

  const editUser = (id) => {
    console.log(id);
    value.obj = value.array.find((x) => x.id == id);
    value.setobj({...value.obj});
  };

  return (
    <Fragment>
      <div className="mt-4 fs-3">CardComponent</div>
      <div className="container">
        <div className="row">
          {value.array?.map((x, i) => {
            return (
              <div className="col-4" key={i}>
                <Card
                  style={{
                    width: "18rem",
                    marginBottom: "15px",
                  }}
                >
                  <img
                    style={{height: "200px"}}
                    alt="Sample"
                    // src="https://picsum.photos/300/200"
                    src={x.image}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{x.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {x.subtitle}
                    </CardSubtitle>
                    <CardText>{x.description}</CardText>
                    <Button>{x.button}</Button>
                  </CardBody>

                  <div>
                    <button
                      className="me-2 btn btn-warning my-4"
                      onClick={() => {
                        editUser(x.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger my-4"
                      onClick={() => {
                        deleteUser(x.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default CardComponent;
