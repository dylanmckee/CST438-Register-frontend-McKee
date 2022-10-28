import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// properties addStudent is required, function called when Add clicked.
// class AddStudent extends Component {
//       constructor(props) {
//       super(props);
//       this.state = {open:false,student:{name:'',email:'',status_code:0 } };

//     };
    const AddStudent = (props) => {
        const [open, setOpen] = useState(false);
        const [student, setStudent] = useState({name:'',email:''});
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event) => {
      setStudent({...student, [event.target.name]: event.target.value});
      console.log("New value: " , event.target.value);
      console.log("eventtarget name: ", event.target.name)
    }

  // Save student and close modal form
    const handleAdd = () => {
       props.addStudent(student);
       console.log("Saved student: ", student.name, student.email);
       handleClose();
    }

 
      return (
          <div>
            <Button variant="outlined" color="primary" id="AddStudent" style={{margin: 10}} onClick={handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Name" name="name"  onChange={handleChange}  /> 
                  <p></p>
                  <TextField autoFocus fullWidth label="Email" name="email"  onChange={handleChange}  /> 

                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={handleClose}>Cancel</Button>
                  <Button id="Add" color="primary" onClick={handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      );

// required property:  addStudent is a function to call to perform the Add action
// AddStudent.propTypes = {
//   addStudent : PropTypes.func.isRequired
// }
    };
export default AddStudent;