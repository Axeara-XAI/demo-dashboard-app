'use client';

import React from 'react';
import { makeStyles, tokens, Card, Avatar, Text, Button, Input } from '@fluentui/react-components';
import { SearchRegular, PersonRegular, OpenRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  headerArea: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  searchBox: {
    minWidth: '300px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  metaText: {
    color: tokens.colorNeutralForeground3,
    fontSize: '13px',
  }
});

// Tipe data untuk daftar pasien
export interface PatientContainer {
  id: string;
  name: string;
  mrn: string;
  dob: string;
  lastVisit: string;
}

interface PatientDirectoryProps {
  patients: PatientContainer[];
  onSelectPatient: (patient: PatientContainer) => void;
}

export default function PatientDirectory({ patients, onSelectPatient }: PatientDirectoryProps) {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.headerArea}>
        <div>
          <Text size={600} weight="semibold" style={{ display: 'block' }}>Kontainer Data Pasien</Text>
          <Text size={300} style={{ color: tokens.colorNeutralForeground3 }}>
            Pilih pasien untuk melihat atau mencetak riwayat klinis lengkapnya.
          </Text>
        </div>
        <Input 
          className={styles.searchBox}
          placeholder="Cari nama atau No. RM..." 
          contentBefore={<SearchRegular />} 
        />
      </div>

      <div className={styles.grid}>
        {patients.map((patient) => (
          <Card key={patient.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <Avatar color="brand" icon={<PersonRegular />} size={48} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text weight="semibold" size={400}>{patient.name}</Text>
                <Text className={styles.metaText}>{patient.mrn}</Text>
              </div>
            </div>
            
            <div className={styles.cardBody}>
              <Text className={styles.metaText}>📅 Lahir: {patient.dob}</Text>
              <Text className={styles.metaText}>🏥 Kunjungan Terakhir: {patient.lastVisit}</Text>
            </div>

            <Button 
              appearance="primary" 
              icon={<OpenRegular />}
              onClick={() => onSelectPatient(patient)}
              style={{ marginTop: '8px' }}
            >
              Lihat Riwayat Klinis
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}