'use client';

import React from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';
import { PatientContainer } from './directory-parts/DirectoryTable';
<<<<<<< HEAD

=======
>>>>>>> cd07743dbac10dbaa8cc7ec5e93dfc51dce0625d
import AssessmentHeader from './assessment-parts/AssessmentHeader';
import PatientProfileCard from './assessment-parts/PatientProfileCard';
import AssessmentTable from './assessment-parts/AssessmentTable'; 
import { AssessmentRecord } from '../../../app/dashboard/clinical-history/page';

const useStyles = makeStyles({
<<<<<<< HEAD
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
=======
  container: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '24px', 
    width: '100%', 
    flexGrow: 1,
    paddingBottom: '24px'
>>>>>>> cd07743dbac10dbaa8cc7ec5e93dfc51dce0625d
  },
});

interface AssessmentListProps {
  patient: PatientContainer | null | undefined; 
  onBack: () => void;        
  onNewAnalysis: () => void;
  // Props baru dari API
  assessments: AssessmentRecord[];
  isLoading: boolean;
  error: string | null;
}

export default function AssessmentList({ patient, onBack, onNewAnalysis, assessments, isLoading, error }: AssessmentListProps) {
  const styles = useStyles();

<<<<<<< HEAD
=======
  if (!patient) return null;

>>>>>>> cd07743dbac10dbaa8cc7ec5e93dfc51dce0625d
  return (
    <div className={styles.container}>
      <AssessmentHeader onBack={onBack} />
<<<<<<< HEAD
      
      {/* Kartu Profil Pasien */}
      <PatientProfileCard patient={patient} />

      {/* Tabel Riwayat Analisis */}
      <AssessmentTable 
        patientId={patient?.id || '1'} 
=======
      <PatientProfileCard patient={patient} />
      <AssessmentTable 
        assessments={assessments} 
        isLoading={isLoading} 
        error={error} 
>>>>>>> cd07743dbac10dbaa8cc7ec5e93dfc51dce0625d
        onNewAnalysis={onNewAnalysis} 
      />
    </div>
  );
}
