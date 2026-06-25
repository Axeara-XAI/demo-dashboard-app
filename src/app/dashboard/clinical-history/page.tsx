'use client';

import React, { useState } from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';

// Pastikan import ini mengarah ke file yang benar sesuai struktur folder barumu
import { 
  AssessmentList, 
  PatientDirectory,
  PatientContainer
} from '../../../components/sections/clinical-history-pages/clinical-history-pages';

const useStyles = makeStyles({
  pageContainer: {
    padding: '24px 32px 0px 32px', 
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 56px)', 
    backgroundColor: tokens.colorNeutralBackground1,
  }
});

// --- DATA DUMMY PASIEN ---
const DUMMY_PATIENTS: PatientContainer[] = [
  { id: '1', name: 'Siti Aminah', mrn: 'RM-2026-00142', dob: '12 Maret 1996 (30 Tahun)', lastVisit: '25 Juni 2026' },
  { id: '2', name: 'Rina Melati', mrn: 'RM-2026-00188', dob: '05 Agustus 1998 (27 Tahun)', lastVisit: '10 Mei 2026' },
  { id: '3', name: 'Dewi Lestari', mrn: 'RM-2026-00201', dob: '22 Januari 1994 (32 Tahun)', lastVisit: '01 Juni 2026' },
  { id: '4', name: 'Ayu Wandira', mrn: 'RM-2026-00215', dob: '17 November 1999 (26 Tahun)', lastVisit: '15 Juni 2026' },
];

export default function ClinicalHistoryPage() {
  const styles = useStyles();
  
  const [selectedPatient, setSelectedPatient] = useState<PatientContainer | null>(null);

  return (
    <div className={styles.pageContainer}>
      
      {/* Jika tidak ada pasien terpilih, tampilkan tabel direktori utama */}
      {!selectedPatient && (
        <PatientDirectory 
          patients={DUMMY_PATIENTS} 
          onSelectPatient={(patient) => setSelectedPatient(patient)} 
        />
      )}

      {/* Jika ada pasien terpilih, PANGGIL KOMPONEN BARU KITA DENGAN PROPS YANG BENAR */}
      {selectedPatient && (
        <AssessmentList 
          patient={selectedPatient}
          onBack={() => setSelectedPatient(null)}
          onNewAnalysis={() => alert('Fitur buat analisis baru siap dihubungkan!')}
        />
      )}

    </div>
  );
}