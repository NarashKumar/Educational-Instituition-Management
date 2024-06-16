import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { StudentContext } from './StudentProvider';
import StudentService from '../services/StudentService';
import { data } from 'autoprefixer';

const feeSchema = z.object({
  alottedFees: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Invalid amount'),
  paidFees: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Invalid amount'),
  balanceFees: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Invalid amount'),
  description: z.string().optional(),
});

const FeePayment = () => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(feeSchema),
  });
  const { state } = useContext(StudentContext);
  const { selectedStudent } = state;


  // Load fee details 

  const getFeeDetails = async () => {
    try {
      const response = await StudentService.getFeeDetails(selectedStudent.id);
      if(response.data){
        reset(response.data);
        setFeeExists(true);
      } 
      else {
        setFeeExists(false);
      }
    } catch (error) {
      console.error('Error fetching fee details:', error);
    }
  };

  useEffect(() => {
    if (selectedStudent) {
      // Load student fee payment details if available
      getFeeDetails();
    }
  }, [selectedStudent]);

  const updateFeeDetails = async (data) => {
    try {
      await StudentService.updateFeeDetails(selectedStudent.id, data);
      reset();
      closeDialogUpdate();
      alert('Fee details updated successfully');
      getFeeDetails();
    } catch (error) {
      console.log(error);
      alert('An error occurred while updating the fee details');
    }
  };

  const addFeeDetails = async (data) => {
    try {
      await StudentService.addFeeDetails(selectedStudent.id, data);
      reset();
      closeDialogUpdate();
      alert('Fee details added successfully');
      getFeeDetails();
    } catch (error) {
      console.log(error);
      alert('An error occurred while adding the fee details');
    }
  };

  const onSubmit = async (data) => {
    if (confirmed) {
      if (feeExists) {
        updateFeeDetails(data);
      } else {
        addFeeDetails(data);
      }
    }
    console.log(data);
  };

  


  //Dialog Box and menus
  const [feeExists, setFeeExists] = useState(false);
  const [showDialogUpdate, setShowDialogUpdate] = useState(false);
  const [showDialogDiscard, setShowDialogDiscard] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const openDialogUpdate = () => {
    setShowDialogUpdate(true);
  };

  const closeDialogUpdate = () => {
    setShowDialogUpdate(false);
  };

  const openDialogDiscard = () => {
    setShowDialogDiscard(true);
  };

  const closeDialogDiscard = () => {
    setShowDialogDiscard(false);
  };

  const confirmUpdate = () => {
    setConfirmed(true);
    handleSubmit(onSubmit);
  };

  const confirmDiscard = () => {
    setIsEditing(false);
    reset();
    closeDialogDiscard();
  };

 
  

  return (
    <div className="bg-white m-8 shadow-md rounded-lg overflow-hidden w-2/3 ms-44">
      <div className="flex justify-between items-center bg-blue-500 text-white py-4 px-6">
        Fee Payment
        <button
          onClick={() => setIsEditing(true)}
          className="mt-2 w-40 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 ms-96 rounded"
        >
          Edit
        </button>
      </div>
      <form className="ms-20 p-6 w-2/3" onSubmit={handleSubmit(onSubmit)}>
        <label className="block">
          <span className="text-gray-700">Alotted Fees:</span>
          <input
            type="text"
            {...register('alottedFees')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>
        {errors.alottedFees && <p className="text-red-500 py-2">{errors.alottedFees.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Paid Fees:</span>
          <input
            type="text"
            {...register('paidFees')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>
        {errors.paidFees && <p className="text-red-500 py-2">{errors.paidFees.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Balance Fees:</span>
          <input
            type="text"
            {...register('balanceFees')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>
        {errors.balanceFees && <p className="text-red-500 py-2">{errors.balanceFees.message}</p>}

        <label className="block mt-4">
          <span className="text-gray-700">Description:</span>
          <textarea
            {...register('description')}
            readOnly={!isEditing}
            className="mt-1 block w-full border rounded px-3 py-2 outline-none"
          />
        </label>
        {errors.description && <p className="text-red-500 py-2">{errors.description.message}</p>}

        {/* Dialog box for update */}
        {showDialogUpdate && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <p className="text-lg mb-4">Are you sure you want to update the fee payment details?</p>
              <div className="flex justify-center">
                <button onClick={confirmUpdate} className="bg-green-500 text-white px-4 py-2 rounded-md mr-4">Yes</button>
                <button onClick={closeDialogUpdate} className="bg-red-500 text-white px-4 py-2 rounded-md">No</button>
              </div>
            </div>
          </div>
        )}

        {/* Dialog box for discard */}
        {showDialogDiscard && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <p className="text-lg mb-4">Are you sure you want to discard the changes? The form will reset to its original values.</p>
              <div className="flex justify-center">
                <button onClick={confirmDiscard} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Yes</button>
                <button onClick={closeDialogDiscard} className="bg-green-500 text-white px-4 py-2 rounded-md">No</button>
              </div>
            </div>
          </div>
        )}

        {feeExists ? (
          <button
            className="mt-4 w-1/3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => {
              if (isValid) {
                openDialogUpdate();
              }
            }}
          >
            Update
          </button>
        ) : (
          <button
            className="mt-4 w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => {
              if (isValid) {
                openDialogUpdate();
              }
            }}
          >
            Add
          </button>
        )}

        
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

export default FeePayment;