import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import StudentList from '../StudentList';

const StudentDetails = ({ student }) => {
  const { register, handleSubmit } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    setIsEditing(false); // Set editing mode to false after submitting the form
  };

  return (
    <div className="bg-white  shadow-md rounded-lg overflow-hidden ">
      <div className="bg-blue-500 text-white py-4 px-6">
        Student Information
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Name:</td>
                <td className="border px-4 py-2">
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={student.name}
                      {...register('name')}
                      className="w-full border rounded px-3 py-2 outline-none"
                    />
                  ) : (
                    <span>{student.name}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Age:</td>
                <td className="border px-4 py-2">
                  {isEditing ? (
                    <input
                      type="number"
                      defaultValue={student.age}
                      {...register('age')}
                      className="w-full border rounded px-3 py-2 outline-none"
                    />
                  ) : (
                    <span>{student.age}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Grade:</td>
                <td className="border px-4 py-2">
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={student.grade}
                      {...register('grade')}
                      className="w-full border rounded px-3 py-2 outline-none"
                    />
                  ) : (
                    <span>{student.grade}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          {isEditing ? (
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

StudentDetails.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentDetails;
