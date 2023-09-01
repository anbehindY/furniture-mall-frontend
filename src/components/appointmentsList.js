import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from '../store/appointmentSlice'; // Replace with the actual import path

function AppointmentsList() {
  const appointments = useSelector((state) => state.appointments);
    const error = useSelector((state) => state.appointments.error);
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch user appointments when the component mounts
    dispatch(fetchAppointments());
  }, [dispatch]);
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

