import React from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionTypes from "../actions/todo";

const TodoForm = ({
  title,
  setTitle,
  addItem,
  editItem,
  edit,
  error,
  setError,
}) => {
  // handle change

  const handleChange = (event) => {
    const title = event.target.value;
    // console.log(title);
    setTitle(title);
    if (title.length === 0) {
      setError("Please enter title");
    } else {
      setTitle(title);
    }
  };

  // handle Click
  const handleClick = (e) => {
    // if (title.length === 0) {
    //   setError("Please enter title");
    //   return;
    // }
    if (edit) {
      editItem();
    } else {
      addItem();
      e.preventDefault();
    }
  };
  return (
    <div className="container">
      <Form>
        <FormGroup style={{ display: "flex", flexDirection: "row" }}>
          <FormControl
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <Button onClick={handleClick}>{edit ? "Edit" : "Add"}</Button>
        </FormGroup>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    title: state.title,
    edit: state.edit,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    setError: (error) => dispatch(actionTypes.setError(error)),
    addItem: () => dispatch(actionTypes.addItem()),
    editItem: () => dispatch(actionTypes.editItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
