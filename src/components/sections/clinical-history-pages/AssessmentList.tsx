'use client';

import React from 'react';
import { makeStyles } from '@fluentui/react-components';
import { PatientContainer } from './directory-parts/DirectoryTable';

// 1. Kita import ketiga potongan halaman Profil Pasien
import AssessmentHeader from './assessment-parts/AssessmentHeader';
import PatientProfileCard from './assessment-parts/PatientProfileCard';
import AssessmentTable from './assessment-parts/AssessmentTable'; 

const useStyles = makeStyles({
  container: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '24px', 
    width: '100%', 
    flexGrow: 1,
    paddingBottom: '24px'
  },
});

interface AssessmentListProps {
  patient: PatientContainer | null | undefined; 
  onBack: () => void;        
  onNewAnalysis: () => void; 
}

export default function AssessmentList({ patient, onBack, onNewAnalysis }: AssessmentListProps) {
  const styles = useStyles();

  // Jika tidak ada data pasien yang diklik, jangan tampilkan apa-apa
  if (!patient) return null;

  return (
    <div className={styles.container}>
      {/* Tombol "Kembali ke Daftar Pasien" */}
      <AssessmentHeader onBack={onBack} />
      
      {/* Kartu Profil (Siti Aminah, No RM, dll) */}
      <PatientProfileCard patient={patient} />

      {/* Tabel Data Dummy Pemeriksaan */}
      <AssessmentTable patientId={patient.id} onNewAnalysis={onNewAnalysis} />
    </div>
  );
}