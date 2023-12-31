import React, { useEffect, useState } from 'react'
import { getPatients } from '../../../services/doctor/slots'
import { Appointment, UserType } from '../../../types/Models'
import { checkDocterAuth, removeDuplicates } from '../../../utils/chekAuth'
 
import { useNavigate } from 'react-router-dom'
import UserTable from './UserTable'

const UserListWrapper = () => {

  const navigate=useNavigate()
  const [patients, setPatients] = useState<UserType[] | null>(null)
  

  useEffect(() => {

    handleGetPateints()
  }, [])
  const handleGetPateints = async () => {
    try {

      const appointments: Appointment[] = await getPatients()
      const users = appointments?.map(e => e.user)
      const uniqPatient=removeDuplicates(users)
      setPatients(uniqPatient)
    } catch (error: any) {
      checkDocterAuth(error)
      // setApiError(error?.response?.data?.message)
      console.log('error : ', error?.response?.status);
    }
  }



  console.log(patients);

  return (
    <>
    
        <UserTable patients={patients} handleGetPateints={handleGetPateints} />
        <nav className=' flex justify-center items-center my-[20px] ' aria-label="Page navigation example ">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
        </nav>
      
    </>
  )
}

export default UserListWrapper
