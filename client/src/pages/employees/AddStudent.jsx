import React from 'react';
import PageTitle from '../../components/PageTitle';
import StudentForm from '../../components/StudentForm';

export default function AddStudent() {
  return (
    <div>
      <PageTitle title="Add Student" />
      {/* <img src="https://cdn-icons.flaticon.com/png/512/863/premium/863823.png?token=exp=1660472387~hmac=63873564de05bbe358c3eb6cbd5b8e73" alt="" height={100} width={100} className='my-2 mx-3'/> */}
      <StudentForm />
    </div>
  )
}
