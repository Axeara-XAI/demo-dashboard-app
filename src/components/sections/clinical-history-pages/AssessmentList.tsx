'use client';

import React from 'react';
import { makeStyles, tokens, Button, Text, Card, CardHeader, CardPreview, Badge } from '@fluentui/react-components';
import { DocumentArrowDownRegular, CalendarLtrRegular, BeakerRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  card: {
    padding: '16px',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    paddingBottom: '12px',
    marginBottom: '12px'
  },
  dateWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '600',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '24px',
  },
  resultBox: {
    backgroundColor: tokens.colorNeutralBackground2,
    padding: '16px',
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  probabilityText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  narrativeText: {
    color: tokens.colorNeutralForeground2,
    lineHeight: '1.5',
    textAlign: 'justify'
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: `1px dashed ${tokens.colorNeutralStroke2}`,
  }
});

// Tipe data disesuaikan dengan struktur ERD
export interface AssessmentRecord {
  id: number;
  date: string;
  probability: number;
  riskLabel: string;
  narrative: string;
}

interface AssessmentListProps {
  assessments: AssessmentRecord[];
}

export default function AssessmentList({ assessments }: AssessmentListProps) {
  const styles = useStyles();

  const handleExportSession = (id: number, date: string) => {
    // TODO: Implementasi logika eksport PDF per sesi (ambil data berdasarkan ID)
    alert(`Mengunduh Laporan Analisis untuk tanggal ${date}...`);
  };

  return (
    <div className={styles.listContainer}>
      <Text size={500} weight="semibold" style={{ marginBottom: '8px' }}>Histori Pemeriksaan Kehamilan</Text>
      
      {assessments.map((record) => (
        <Card key={record.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.dateWrapper}>
              <CalendarLtrRegular />
              <Text>{record.date}</Text>
            </div>
            <Badge 
              color={record.riskLabel === 'FGR' ? 'danger' : 'success'}
              appearance="filled"
            >
              Status: {record.riskLabel}
            </Badge>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.resultBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BeakerRegular />
                <Text weight="semibold">Probabilitas FGR</Text>
              </div>
              <Text 
                className={styles.probabilityText}
                style={{ color: record.probability >= 50 ? tokens.colorPaletteRedForeground1 : tokens.colorPaletteGreenForeground1 }}
              >
                {record.probability}%
              </Text>
            </div>
            
            <div>
              <Text weight="semibold" style={{ display: 'block', marginBottom: '8px' }}>Kesimpulan Klinis AI:</Text>
              <Text className={styles.narrativeText}>
                {record.narrative}
              </Text>
            </div>
          </div>

          <div className={styles.actionArea}>
            <Button 
              appearance="outline" 
              icon={<DocumentArrowDownRegular />}
              onClick={() => handleExportSession(record.id, record.date)}
            >
              Unduh Laporan Medis (PDF)
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}