import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTable } from 'react-table';
import StudentService from '../services/StudentService';
import { StudentContext } from './StudentProvider';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const{dispatch} = useContext(StudentContext);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);


  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await StudentService.getStudents();
      console.log(response);
      setStudents(response.data);
      dispatch({ type: 'SET_STUDENTS', payload: response.data });
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
  
    fetchStudents();
  }, []);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    try {
      await StudentService.deleteStudent(deleteId);
      setStudents(students.filter((student) => student.id !== deleteId));
      setShowDeleteDialog(false);
      alert('Student deleted successfully');
    } catch (error) {
      // Handle error
      console.error('Error deleting student:', error);
      alert('An error occurred while deleting the student');
    }
  }

  const Cell = ({row}) => (
    <>
      {/* <NavLink to='/personal-details' state={{ student: JSON.stringify(students[0])}} > */}
        <button onClick={()=> {
        dispatch({ type: 'SET_SELECTED_STUDENT', payload: row.original });
          console.log(row.original);
          navigate('/personal-details', { state: { student: row.original } });
          }
        } 
          type="button" className=" bg-blue-500 text-black hover:bg-blue-600  bg-transparent border border-blue-500 hover:border-blue-600 rounded-md px-3 py-1 mr-2">
          View
        </button>
      {/* </NavLink> */}
      <button className=" bg-red-500 text-black hover:bg-red-600  bg-transparent border border-blue-500 hover:border-red-600 rounded-md px-3 py-1 mr-2"
        onClick={() => handleDeleteClick(row.original.id)}
      >
        Delete
      </button>
    </>
  );

  Cell.propTypes = {
    row: PropTypes.object.isRequired, // Validate row as an object
  };

  

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        
      },
      {
        Header: 'Name',
        accessor: 'name',
    
      },
      // {
      //   Header: 'Address',
      //   accessor: 'address',
      // },
      // {
      //   Header: 'Email',
      //   accessor: 'email',
      // },
      {
        Header: 'Phone Number',
        accessor: 'phoneNumber',
      },
      {
        Header: 'Date of Birth',
        accessor: 'dob',
      },
      // {
      //   Header: 'Age',
      //   accessor: 'age',
      // },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Degree',
        accessor: 'degree',
      },
      {
        Header: 'Course',
        accessor: 'course',
      },
      {
        Header: 'Actions',
        Cell: Cell, 
      },
    ],
    []
    
  );

  


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: students });

  

  return (
    
    <>
      {/* <PersonalDetails students={students} /> */}
      <div className="container mx-auto my-8">
        <div className="h-12">
          <NavLink to="/addstudent">
            <button className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"> Add Student</button>
          </NavLink>
        </div>
        <div className="flex shadow border-b">
          <div className="overflow-scroll">
            <table {...getTableProps()} className="w-full lg:w-3/4 xl:w-4/5">
              <thead className="bg-gray-50">
                {headerGroups.map(headerGroup => (
                  <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th key={column.id} className="text-left font-medium text-stone-950 uppercase tracking-wider py-2 px-3" {...column.getHeaderProps()} >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white">
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr key={row.id} {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td key={cell.column.id} className="text-left py-2 px-3 whitespace-nowrap" {...cell.getCellProps()} >
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Dialogbox */}
      {showDeleteDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-8 rounded-md shadow-lg">
          <p className="text-lg mb-4">Are you sure you want to delete this student?</p>
          <div className="flex justify-center">
            <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Yes</button>
            <button onClick={() => setShowDeleteDialog(false)} className="bg-green-500 text-white px-4 py-2 rounded-md">No</button>
          </div>
        </div>
      </div>
      )}
    </>
  );
};


export default StudentList;
