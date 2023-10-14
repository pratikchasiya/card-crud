import React, {Fragment, useContext, useRef, useState} from "react";
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import { CardContext } from "../App";

const FormComponent = (props) => {
  // const [obj, setobj] = useState({});
  // let [array, setarray] = useState([]);
  // let [count, setcount] = useState(1);
  // const [blankObj, setblankObj] = useState({});
  const fileRef = useRef();
  let value = useContext(CardContext);
  console.log(value)
  
  
  const changeData = async (e) => {
    if (e.target.name === "image") {
      console.log(e.target.files[0]);
      value.obj.image = await toBase64(e.target.files[0]);
    } else {
      value.obj[e.target.name] = e.target.value;
    }
    value.setobj({...value.obj});

    value.blankObj[e.target.name] = "";
    value.setblankObj({...value.blankObj});
    value.setobj({...value.obj});
    //   console.log(obj)
  };

  const save = (e) => {
    e.preventDefault();
   if(value.obj.id == undefined){
     value.obj.id = value.count;
     value.count++;
     value.setcount(value.count);
     value.array.push(value.obj);
   }
   else{
    let index = value.array.findIndex((x)=> x == value.obj.id)
    value.array.splice(index, 1, value.obj)
   }
    
  
   value.setarray([...value.array]);
    // props.getValue(array, count);
    value.setobj({...value.blankObj});
    fileRef.current.value = "";
    console.log(fileRef.current.value);
    console.log(value.array);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <Fragment>
      <div className="my-3 fs-3" >FormComponent</div>
      <div >
        <div className="container bg-secondary" style={{width:"700px"}}>
          <h3 className="text-white">FORM</h3>
          <Form> 
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="image" className="fs-4 text-white">
                    Image
                  </Label>
                  <input className="form-control"
                    id="image"
                    name="image"
                    placeholder="Add File"
                    type="file"
                    onChange={changeData}
                 ref={fileRef}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="title" className="fs-4 text-white">
                    Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter Title"
                    type="text"
                    value={value.obj.title || ""}
                    onChange={changeData}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="subtitle" className="fs-4 text-white">
                    Sub Title
                  </Label>
                  <Input
                    id="subtitle"
                    name="subtitle"
                    placeholder="Enter Sub Title"
                    type="text"
                    value={value.obj.subtitle || ""}
                    onChange={changeData}
                  />
                </FormGroup>
              </Col>

              <Col md={12}>
                <FormGroup>
                  <Label for="description" className="fs-4 text-white">
                    Description
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    placeholder="Enter Description"
                    type="textarea"
                    value={value.obj.description || ""}
                    onChange={changeData}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="button" className="fs-4 text-white">
                    Button
                  </Label>
                  <Input
                    id="button"
                    name="button"
                    //   placeholder="Enter Description"
                    type="text"
                    value={value.obj.button || ""}
                    onChange={changeData}
                  />
                </FormGroup>
              </Col>
            </Row>

            <div>
              <Button className="btn-success px-4 my-3 fs-4" onClick={save}>
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default FormComponent;
