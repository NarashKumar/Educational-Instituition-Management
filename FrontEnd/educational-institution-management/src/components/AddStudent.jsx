import { useState } from 'react';
import { useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

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

const AddStudent = () => {
  const { register, handleSubmit, reset, formState: { errors, isValid} } = useForm({
      resolver: zodResolver(schema),
    }
  );

  // const clearForm = () => {
  //   return {
  //     id: "",
  //     name: "",
  //     address: "",
  //     email: "",
  //     phoneNumber: "",
  //     dob: "",
  //     age: "",
  //     gender: "",
  //     degree: "",
  //     course: "",
  //   };
  // };

  // const [student, setStudent] = useState(clearForm());
  const [showDialog, setShowDialog] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (confirmed) {
      try {
        await StudentService.addStudent(data);
        reset(); // Reset the form after successful submission
        setShowDialog(false); // Close the dialog box
        alert('Student added successfully');
        navigate('/studentlist');
      } catch (error) {
        console.log(error);
        alert('An error occurred while adding the student');
      }
    } else {
      setShowDialog(true); // Open the dialog box for confirmation
    }
  };

  const confirmAction = () => {
    setConfirmed(true);
    handleSubmit(onSubmit);
  };

  const openDialog = () => {
    setShowDialog(true);
  }

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add Student</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="items-center justify-center h-14 w-full">
            <label className="block text-gray-600 text-sm font-normal mt-4"> 
              Name: 
            </label>
            <input  
            {...register("name")}
              type="text" 
              placeholder="Name" 
              //  required 
              className="w-96 h-10 border mt-2 px-2 py-2" 
            />
            
          </div>
          {errors.name && <p className="text-red-500 py-2 rounded">{errors.name.message}</p>}
          <div className="items-center justify-center h-14 w-full">
            <label className="block text-gray-600 text-sm font-normal mt-4"> 
             Address: 
            </label>
            <input 
             {...register("address")}
              type="text" 
              placeholder="Address" 
              // required 
              className="w-96 h-10 border mt-2 px-2 py-2" 
            />
          </div>
          {errors.address && <p className="text-red-500 py-2">{errors.address.message}</p>}

          <div className="items-center justify-center h-14 w-full">
    <label className="block text-gray-600 text-sm font-normal mt-4"> 
     Email: 
    </label>
    <input 
      {...register("email")}
      type="email" 
      placeholder="Email" 
      // required 
      className="w-96 h-10 border mt-2 px-2 py-2" 
    />
</div>
{errors.email && <p className="text-red-500 py-2">{errors.email.message}</p>}

<div className="items-center justify-center h-14 w-full">
    <label className="block text-gray-600 text-sm font-normal mt-4"> 
     Phone Number: 
    </label>
    <input 
      {...register("phoneNumber")}
      type="text"
      placeholder="Phone Number" 
      // required 
      className="w-96 h-10 border mt-2 px-2 py-2" 
    />
</div>
{errors.phoneNumber && <p className="text-red-500 py-2">{errors.phoneNumber.message}</p>}
<div className="items-center justify-center h-14 w-full">
    <label className="block text-gray-600 text-sm font-normal mt-4"> 
     Date of Birth: 
    </label>
    <input 
    {...register("dob")}
      type="date"  
      placeholder="Date of Birth" 
      // required 
      className="w-96 h-10 border mt-2 px-2 py-2" 
    />
  
</div>
{errors.dob && <p className="text-red-500 py-2">{errors.dob.message}</p>}
<div className="items-center justify-center h-14 w-full">
    <label className="block text-gray-600 text-sm font-normal mt-4"> 
     Age: 
    </label>
    <input 
       {...register("age")}
      type="text" 
      placeholder="Age" 
      // required 
      className="w-96 h-10 border mt-2 px-2 py-2" 
    />
   
</div>
{errors.age && <p className="text-red-500 py-2">{errors.age.message}</p>}
<div className="items-center justify-center h-14 w-full">
    <label className="block text-gray-600 text-sm font-normal mt-4"> 
     Gender: 
    </label>
    <input 
      {...register("gender")}
      type="text" 
      placeholder="Gender" 
      // required 
      className="w-96 h-10 border mt-2 px-2 py-2" 
   
    />
</div>

{errors.gender && <p className="text-red-500 py-2">{errors.gender.message}</p>}

<div className="items-center justify-center h-14 w-full">
    <label className="block text-gray-600 text-sm font-normal mt-4"> 
     Degree: 
    </label>
    <input 
    {...register("degree")}
      type="text" 
      placeholder="Degree" 
      // required 
      className="w-96 h-10 border mt-2 px-2 py-2" 
    />
   
</div>

{errors.degree && <p className="text-red-500 py-2">{errors.degree.message}</p>}

<div className="items-center justify-center h-14 w-full">
    <label className="block text-gray-600 text-sm font-normal mt-4"> 
     Course: 
    </label>
    <input 
     {...register("course")}
      type="text" 
      name="course"  
      placeholder="Course" 
      // required 
      className="w-96 h-10 border mt-2 px-2 py-2" 
    />
   
</div>
{errors.course && <p className="text-red-500 py-2">{errors.course.message}</p>}

          {/* Dialog box */}
          {showDialog && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-8 rounded-md shadow-lg">
                <p className="text-lg mb-4">Are you sure you want to add the data?</p>
                <div className="flex justify-center">
                  <button onClick={confirmAction} className="bg-green-500 text-white px-4 py-2 rounded-md mr-4">Yes</button>
                  <button onClick={closeDialog} className="bg-red-500 text-white px-4 py-2 rounded-md">No</button>
                </div>
              </div>
            </div>
          )}

          <div className=" mt-6 items-center justify-center h-14 w-full flex">
            <button type="submit"
              onClick={() => {
                if(isValid){
                  openDialog();
                }
               }}
              className="w-40 text-white bg-green-500 hover:bg-green-700 font-semibold rounded mr-6 px-2 py-2"
              
            >
              Save
            </button>
            <button 
              type="button" 
              onClick={() => { 
                reset(); 
              }} 
              className="w-40 text-white bg-red-500 hover:bg-red-700 font-semibold rounded px-2 py-2"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
