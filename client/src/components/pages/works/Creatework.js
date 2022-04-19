import React, { useState, useEffect, useContext } from "react";
import Axios from 'axios'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import './createWork.css'
import Modal from "../../../Modal/Modal";
import CreateCom from '../company/Createcompany'

const Creatework = () => {
    function Todo({ todo, gotTodo, removeTodo, saveEdit, all }) {
        const [isEditing, setIsEditing] = useState(false);
        const [text, setText] = useState(todo.text);

        function invokeEditMode() {
            if (isEditing) {
                saveEdit(todo, text);
            }

            setIsEditing(!isEditing);
        }

        return (
            <div className="todo-card">
                {
                    isEditing
                        ? (
                            <input
                                type="text"
                                value={text}
                                readOnly={!isEditing}
                                onChange={(e) => setText(e.target.value)}
                            />
                        ) : (
                            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
                        )
                }
                <div>
                    <Button variant="outline-success" onClick={invokeEditMode}>{isEditing ? "Save" : "Edit"}</Button>{' '}
                    <Button variant="outline-danger" onClick={() => removeTodo(todo)}>✕</Button>
                </div>
            </div>
        );
    }

    function FormTodo({ addTodo }) {
        const [value, setValue] = React.useState("");

        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            addTodo(value);
            setValue("");
        };

        return (
            <Form onSubmit={handleSubmit} className="Form-creatework-section">
                <Form.Label><b>Add scope</b></Form.Label>
                <div className="creatework-add-scope-section">
                    <div className="center-t">
                        <Form.Group>
                            <Form.Control type="text" className="input creatework-scope-input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new scope" />
                        </Form.Group>
                        <Button className="creatework-addbutton" variant="primary mb-3" type="submit"> + </Button>
                    </div>

                </div>

            </Form>
        );
    }

    const [todos, setTodos] = React.useState([]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const removeTodo = (todo) => {
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
        setTodos([...todos]);
    };

    const saveEdit = (todo, text) => {
        todo.text = text;
        setTodos([...todos]);
    }

    const [show, setShow] = useState(false);
    const [workName, setworkName] = useState([]);
    const [startDate, setstartDate] = useState([]);
    const [endDate, setendDate] = useState([]);
    const [customerID, setcustomerID] = useState([]);
    const [producterID, setproducterID] = useState([]);
    const [workStatus, setworkStatus] = useState(['On process']);
    const [workNote, setworkNote] = useState(['']);
    const [company, setCompany] = useState([]);
    const [workID, setworkID] = useState([]);
    const [price, setprice] = useState(['']);

    useEffect(() => {

        Axios.get(`http://localhost:8000/company`, {
        }).then((response) => {
            setCompany(response.data);
        });
        Axios.get(`http://localhost:8000/lastwork`, {
        }).then((response) => {
            setworkID(response.data);
        });

    }, []);

    const submitWork = () => {
        todos.forEach((todo) => {
            Axios.post("http://localhost:8000/scope", {
                workID: workID[0].workID + 1,
                text: todo.text,
                price: price,
            }).then((response) => { })
        });
        Axios.post("http://localhost:8000/works", {
            workID: workID[0].workID + 1,
            workName: workName,
            startDate: startDate,
            endDate: endDate,
            customerID: customerID,
            producterID: producterID,
            workStatus: workStatus,
            workNote: workNote,
        }).then((response) => {
            alert('Work Created');
            window.location.replace('http://localhost:3000/works')
        })
    };


    return (
        <div className="Modal-site">
            <div className="ga body-worksite">
                <div className="site-comtainer">
                    <div className="creatework-upper" id="creatework-upper">
                        <div className="workname">
                            <p>Project Name</p>
                            <input onChange={(e) => { setworkName(e.target.value) }} placeholder="project name" ></input>
                        </div>
                        <div className="select-customer-creatework">
                            <p>Customer Name   </p>
                            <select class="dropdown" onChange={(e) => {
                                setcustomerID(e.target.value);
                                if (e.target.value == 'create') {
                                    setShow(true);
                                    e.target.value = 0;
                                }
                            }}>
                                <option value='0' disabled selected>
                                    โปรดเลือกบริษัท
                                </option>
                                {company.map((val, key) => {
                                    return (
                                        <option value={val.companyID}>
                                            {val.companyName}
                                        </option>
                                    );
                                })}
                                <option value={'create'}>Create 🏢</option>
                                <Modal title="Create Company" onClose={() => { setShow(false) }} show={show}>
                                    <CreateCom />
                                </Modal>
                            </select>
                        </div>
                        <div className="creatework-selectvender">
                            <p>Venders Name   </p>
                            <select class="dropdown" onChange={(e) => {
                                setproducterID(e.target.value);
                                if (e.target.value == 'create') {
                                    setShow(true);
                                    e.target.value = 0;
                                }
                            }}>
                                <option value='0' disabled selected>
                                    โปรดเลือกบริษัท
                                </option>
                                {company.map((val, key) => {
                                    return (
                                        <option value={val.companyID}>
                                            {val.companyName}
                                        </option>
                                    );
                                })}
                                <option value={'create'}>Create 🏢 </option>
                            </select>
                        </div>
                        <div className="creatework-datepicker">
                            <div className="creatework-datepicker-startdate">
                                Start Data&nbsp;
                                <input type="date" onChange={(e) => { setstartDate(e.target.value) }}></input>
                            </div>
                            <div className="creatework-datepicker-enddate">
                                Due Date&nbsp;&nbsp;
                                <input type="date" onChange={(e) => { setendDate(e.target.value) }}></input>
                            </div>
                        </div>
                        <div className="creatework-note">
                            <p>note :  </p>
                            <input onChange={(e) => { setworkNote(e.target.value) }}></input>
                        </div>
                    </div>
                    
                    <div className="creatework-lower">
                        <div className="creatework-scope">
                            <FormTodo addTodo={addTodo} />
                            <div className="separator"/>
                            <div>
                                {todos.map((todo, index) => (
                                    <Card>
                                        <Card.Body>
                                            <Todo
                                                key={index}
                                                index={index}
                                                todo={todo}
                                                saveEdit={saveEdit}
                                                removeTodo={removeTodo}
                                            />
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="separator"/>
                    <div className="cf-button">
                        <button onClick={() => { submitWork() }}> Confirm </button>
                    </div>
                </div>
            </div>
        </div>)
};

export default Creatework;