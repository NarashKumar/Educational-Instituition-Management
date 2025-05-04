import React from 'react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StudentContext } from './StudentProvider';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import StudentService from '../services/StudentService';


const schema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\d{10}$/).refine(value => /^\d+$/.test(value), {
    message: "Phone number must contain only numbers"
  }),
  dob: z.string().min(1),
  age: z.string().min(1),
  gender: z.string().min(1),
  degree: z.string().min(1),
  course: z.string().min(1),
})

const PersonalDetails = () => {
  const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm({
    resolver: zodResolver(schema),
  });
  const {state} = useContext(StudentContext);
  const {selectedStudent} = state;

  //dialog box
  const [showDialogUpdate, setShowDialogUpdate] = useState(false);
  const [showDialogDiscard, setShowDialogDiscard] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const openDialogUpdate = () =>{
    setShowDialogUpdate(true);
  }

  const closeDialogUpdate = () =>{
    setShowDialogUpdate(false);
  }

  const openDialogDiscard = () =>{
    setShowDialogDiscard(true);

  }

  const closeDialogDiscard = () =>{
    setShowDialogDiscard(false);
  }


  const confirmUpdate= () => {
    setConfirmed(true);
    handleSubmit(onSubmit);
  };

  const confirmDiscard = () => {
    setIsEditing(false);
    reset();
    closeDialogDiscard();
  }

  //handle dob 
  const dob = selectedStudent.dob;
  const[day,month,year] = dob.split('/');

  const formattedDob = `${year}-${month}-${day}`;

const getStudentById = async () => {
  try {
    const response = await StudentService.getStudentById(selectedStudent.id);
    console.log(response.data);
    reset(response.data);
  } catch (error) {
    // Handle error
    console.error('Error fetching student:', error);
  }
}
  const onSubmit = async (data) => {
    if(confirmed){
      try {
        await StudentService.updateStudent(selectedStudent.id, data);
        reset();
        closeDialogUpdate();
        alert('Student updated successfully');
        getStudentById();
      } catch (error) {
        console.log(error);
        alert('An error occurred while updating the student');
      }
    }
    console.log(data); // Handle form submission
  };


  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="bg-white m-8 shadow-md  rounded-lg overflow-hidden w-2/3 ms-44">
      <div className=" flex justify-between items-center bg-blue-500 text-white py-4 px-6">
        Personal Details
      
       <button 
          onClick={() => setIsEditing(true)}
          className="mt-2 w-40 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 ms-96 rounded"
          >
            Edit
          </button>
          </div>
      <form className="ms-20 p-6 w-2/3 " onSubmit={handleSubmit(onSubmit)}>
        <label className="block">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            defaultValue={selectedStudent.name}
            {...register('name')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>

        {errors.name && <p className="text-red-500 py-2">{errors.name.message}</p>}
        
        <label className="block mt-4">
          <span className="text-gray-700">Address:</span>
          <input
            type="text"
            defaultValue={selectedStudent.address}
            {...register('address')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>
        {errors.address && <p className="text-red-500 py-2">{errors.address.message}</p>}
        <label className="block mt-4">
          <span className="text-gray-700">e-mail:</span>
          <input
            type="email"
            defaultValue={selectedStudent.email}
            {...register('email')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>

        {errors.email && <p className="text-red-500 py-2">{errors.email.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Phone Number:</span>
          <input
            type="text"
            defaultValue={selectedStudent.phoneNumber}
            {...register('phoneNumber')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>

        {errors.phoneNumber && <p className="text-red-500 py-2">{errors.phoneNumber.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Date of Birth:</span>
          <input
            type="date"
            defaultValue={formattedDob}
            {...register('dob')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>

        {errors.dob && <p className="text-red-500 py-2">{errors.dob.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Age:</span>
          <input
            type="number"
            defaultValue={selectedStudent.age}
            {...register('age')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>

        {errors.age && <p className="text-red-500 py-2">{errors.age.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Gender:</span>
          <input
            type="text"
            defaultValue={selectedStudent.gender}
            {...register('gender')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>

        {errors.gender && <p className="text-red-500 py-2">{errors.gender.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Degree:</span>
          <input
            type="text"
            defaultValue={selectedStudent.degree}
            {...register('degree')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>

        {errors.degree && <p className="text-red-500 py-2">{errors.degree.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Course:</span>
          <input
            type="text"
            defaultValue={selectedStudent.course}
            {...register('course')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>

        {errors.course && <p className="text-red-500 py-2">{errors.course.message}</p>}

         {/* Dialog box for update */}
         {showDialogUpdate && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-8 rounded-md shadow-lg">
                <p className="text-lg mb-4">Are you sure you want to Update the data?</p>
                <div className="flex justify-center">
                  <button onClick={confirmUpdate} className="bg-green-500 text-white px-4 py-2 rounded-md mr-4">Yes</button>
                  <button onClick={closeDialogUpdate} className="bg-red-500 text-white px-4 py-2 rounded-md">No</button>
                </div>
              </div>
            </div>
          )}

           {/* Dialog box for Discard */}
         {showDialogDiscard && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-8 rounded-md shadow-lg">
                <p className="text-lg mb-4">Are you sure you want to Discard the data?
                The data will Get reset to its old value and editing is disabled</p>
                <div className="flex justify-center">
                  <button onClick={confirmDiscard} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Yes</button>
                  <button onClick={closeDialogDiscard} className="bg-green-500 text-white px-4 py-2 rounded-md">No</button>
                </div>
              </div>
            </div>
          )}


        

       

        <button 
          className="mt-4 w-1/3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={() => {
            if(isValid){
              openDialogUpdate();
            }
          }}
          >
            Update
          </button>

        <button 
          type="button"
          onClick={() => {
            openDialogDiscard();
          }}
          className="mt-4 w-1/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 ms-8 rounded"
        >
          Discard
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
