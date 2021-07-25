import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { connect } from "react-redux";
import * as actionTypes from "../actions/todo";
const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});
const TodoList = ({
  todoList = [],
  setTitle,
  setItem,
  setEdit,
  deleteItem,
}) => {
  const [toDos, setToDos] = useState([]);
  const classes = useStyles();
  let fetchtodos = JSON.parse(localStorage.getItem("reduxState"));

  let todos = fetchtodos.todo.items;

  useEffect(() => {
    // console.log(todos);
  }, []);
  const handleEdit = (item) => {
    setTitle(item.value);

    setEdit();
    setItem(item);
  };

  const handleDelete = (item) => {
    setItem(item);
    deleteItem();
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      {/* {todos.map((data, index) => (
        <h2>{data.value}</h2>
      ))} */}
      <Container className={classes.container} maxWidth="md">
        {!todoList.length ? (
          <Typography variant="h6" color="error">
            No Data to display
          </Typography>
        ) : (
          <List>
            {todoList.map((data, index) => {
              return (
                <ListItem key={data.id} button>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>

                  <ListItemText primary={data.value} />
                  <ListItemSecondaryAction>
                    {/* <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleEdit(data)}
                    >
                      <EditIcon />
                    </IconButton> */}
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(data)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
    setItem: (item) => dispatch(actionTypes.setItem(item)),
    deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
    setEdit: () => dispatch(actionTypes.setEdit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
