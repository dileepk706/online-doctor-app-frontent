import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import PatientHome from '../../pages/patient/PatientHomePage';
import PatientProtected from './PatientProtected';
import ListDoctor from '../../pages/patient/ListDoctors';
import LoginPage from '../../pages/patient/LoginPage';
import { useAppSelector } from '../../redux/hooks';
import BookDoctorSlot from '../../pages/patient/BookingPage';
import PaymentSuccess from '../../pages/patient/PaymentSuccess';
import PaymentCancel from '../../pages/patient/PaymentCancelled';
import AppointmentsPage from '../../pages/patient/AppointmentsPage';
import ProfilePage from '../../pages/patient/ProfilePage';
import VideoCall from '../../pages/patient/VideoCall';
import Sidebar from '../../components/patient/sideBar/SideBar';
import MyDoctor from '../../pages/patient/MyDoctor'

interface applicationType  {}
 
const PatientRouter:React.FC<applicationType>=()=> {

  const userToken= useAppSelector(state=>state?.user?.accessToken)
  
  return (
    <>
     <Sidebar />

     <Routes>
        {/* <Route path='/login' element={!userToken && <LoginPage />} /> */}
        <Route path='/' element={ <PatientHome />} />
        <Route path='/doctors' element={<ListDoctor />} />
        <Route path='/doctors/consulted' element={<PatientProtected>< MyDoctor/></PatientProtected>} />
        <Route path='/make-appointment/:id' element={ <BookDoctorSlot /> } /> 
        <Route path='/payment-success/:doctorId/:slotId/:fee' element={<PatientProtected><PaymentSuccess /></PatientProtected>} />
        <Route path='/payment-canceled' element={<PatientProtected><PaymentCancel /></PatientProtected>} />
        <Route path='/appointments/all' element={<PatientProtected><AppointmentsPage /></PatientProtected>} />
        <Route path='/profile' element={<PatientProtected>< ProfilePage/></PatientProtected>} />
        <Route path='/call/:role/:room/:doc/:user' element={<PatientProtected>< VideoCall/></PatientProtected>} />
      </Routes>
  </>
  ); 
}
export default PatientRouter;