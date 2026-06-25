'use client';

import React, { useState } from 'react';
import { makeStyles, tokens, Button } from '@fluentui/react-components';
import { ArrowLeftRegular } from '@fluentui/react-icons';
import { 
  HistoryHeader, 
  AssessmentList, 
  AssessmentRecord,
  PatientDirectory,
  PatientContainer
} from '../../../components/sections/clinical-history-pages/clinical-history-pages';

const useStyles = makeStyles({
  pageContainer: {
    // PERBAIKAN: Padding bawah di-set ke 0px agar footer bisa mentok ke dasar layar
    // Format: Atas (24px) | Kanan (32px) | Bawah (0px) | Kiri (32px)
    padding: '24px 32px 0px 32px', 
    width: '100%',
    boxSizing: 'border-box',
    
    // PERBAIKAN FLEXBOX: Mengubah container menjadi flex agar komponen anak bisa "melar"
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 56px)', // Mengurangi estimasi tinggi Navbar
    
    backgroundColor: tokens.colorNeutralBackground1,
  },
  backButton: {
    marginBottom: '24px',
  }
});

// --- DATA DUMMY ---
const DUMMY_PATIENTS: PatientContainer[] = [
  { id: '1', name: 'Siti Aminah', mrn: 'RM-2026-00142', dob: '12 Maret 1996 (30 Tahun)', lastVisit: '25 Juni 2026' },
  { id: '2', name: 'Rina Melati', mrn: 'RM-2026-00188', dob: '05 Agustus 1998 (27 Tahun)', lastVisit: '10 Mei 2026' },
  { id: '3', name: 'Dewi Lestari', mrn: 'RM-2026-00201', dob: '22 Januari 1994 (32 Tahun)', lastVisit: '01 Juni 2026' },
  { id: '4', name: 'Ayu Wandira', mrn: 'RM-2026-00215', dob: '17 November 1999 (26 Tahun)', lastVisit: '15 Juni 2026' },
];

const DUMMY_HISTORY: AssessmentRecord[] = [
  {
    id: 2,
    date: '25 Juni 2026',
    probability: 65.5,
    riskLabel: 'FGR',
    narrative: 'Berdasarkan analisis model AI, pasien memiliki risiko tinggi (65.5%) mengalami Fetal Growth Restriction (FGR). Faktor utama yang berkontribusi adalah riwayat tekanan darah (Hipertensi Gestasional) dan pertambahan berat badan ibu yang kurang optimal di trimester ini. Disarankan pemantauan USG Doppler secara intensif.',
  },
  {
    id: 1,
    date: '10 April 2026',
    probability: 22.1,
    riskLabel: 'Non-FGR',
    narrative: 'Kondisi janin dan ibu dalam batas normal. Probabilitas FGR sangat rendah (22.1%). Faktor pelindung terdeteksi dari tingkat kadar Hemoglobin yang stabil (12.4 g/dL) serta frekuensi kunjungan prenatal yang teratur. Lanjutkan asupan nutrisi seperti biasa.',
  }
];

export default function ClinicalHistoryPage() {
  const styles = useStyles();
  
  const [selectedPatient, setSelectedPatient] = useState<PatientContainer | null>(null);

  return (
    <div className={styles.pageContainer}>
      
      {!selectedPatient && (
        <PatientDirectory 
          patients={DUMMY_PATIENTS} 
          onSelectPatient={(patient) => setSelectedPatient(patient)} 
        />
      )}

      {selectedPatient && (
        <>
          <Button 
            appearance="subtle" 
            icon={<ArrowLeftRegular />} 
            onClick={() => setSelectedPatient(null)}
            className={styles.backButton}
          >
            Kembali ke Daftar Pasien
          </Button>

          <HistoryHeader patient={selectedPatient} />
          
          <AssessmentList assessments={DUMMY_HISTORY} />
        </>
      )}

    </div>
  );
}