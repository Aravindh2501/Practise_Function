import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto; /* Added margin for better spacing */
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1em;
  border: 2px solid #007bff;
  border-radius: 4px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskList = styled.div`
  width: 100%;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  background: #eae8e8;
  border-radius: 8px;
  margin-bottom: 10px;
  list-style: none;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  font-size: 0.9em;
  color: white;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const ToDo = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleAdd = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const handleRemove = (index) => {
        setTasks(tasks.filter((task, idx) => idx !== index));
    };

    return (
        <Container className='todo'>
            <InputContainer>
                <Input
                    type="text"
                    name="text"
                    placeholder='Enter the task to do'
                    onChange={handleChange}
                    value={input}
                />
                <AddButton onClick={handleAdd}>Add</AddButton>
            </InputContainer>
            <TaskList className="lift">
                <ul style={{ padding: "0px", margin: "0px" }}>
                    {tasks.map((task, idx) => (
                        <TaskItem key={idx}>
                            <p>{task}</p>
                            <RemoveButton onClick={() => handleRemove(idx)}>Remove</RemoveButton>
                        </TaskItem>
                    ))}
                </ul>
            </TaskList>
        </Container>
    );
};

export default ToDo;
