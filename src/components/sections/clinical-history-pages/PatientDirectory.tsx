'use client';

import React from 'react';
import { 
  makeStyles, 
  tokens, 
  Table, 
  TableHeader, 
  TableRow, 
  TableHeaderCell, 
  TableBody, 
  TableCell,
  Avatar, 
  Text, 
  Button, 
  Input,
  Link
} from '@fluentui/react-components';
import { 
  SearchRegular, 
  PersonRegular, 
  ArrowRightRegular,
  AddRegular,
  DeleteRegular,
  ArrowClockwiseRegular,
  DocumentArrowDownRegular,
  FilterRegular,
  DismissRegular,
  PlayRegular,
  BookQuestionMarkRegular,
  ChevronLeftRegular,
  ChevronRightRegular,
  HeartPulseRegular // <-- IKON BARU DITAMBAHKAN DI SINI
} from '@fluentui/react-icons';

// ============================================================================
// STYLES DEFINITION
// ============================================================================
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1, // KUNCI: Membuat komponen ini mengisi sisa layar ke bawah
  },
  // --- HEADER STYLES ---
  headerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px', 
  },
  breadcrumb: {
    color: tokens.colorNeutralForeground3,
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  // --- COMMAND BAR STYLES ---
  commandBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginTop: '16px',
    paddingBottom: '8px',
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    flexWrap: 'wrap',
  },
  blueIcon: {
    color: tokens.colorBrandForeground1,
  },
  divider: {
    width: '1px',
    height: '16px',
    backgroundColor: tokens.colorNeutralStroke2,
    margin: '0 8px',
  },
  // --- FILTER STYLES ---
  filterArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 0 8px 0',
    flexWrap: 'wrap',
  },
  filterInput: {
    minWidth: '240px',
  },
  activeFilterBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: tokens.colorNeutralBackground1,
    padding: '2px 10px',
    borderRadius: '16px',
    fontSize: '13px',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  boldText: {
    fontWeight: '600',
  },
  // --- TABLE STYLES ---
  tableContainer: {
    overflowX: 'auto',
    marginTop: '4px',
  },
  patientNameCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  interactiveRow: {
    cursor: 'pointer',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    }
  },
  statusBadge: {
    backgroundColor: tokens.colorPaletteGreenBackground1,
    color: tokens.colorPaletteGreenForeground1,
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
  },
  // --- FOOTER STYLES ---
  footerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto', // Mendorong otomatis footer ke ujung bawah
    padding: '16px 0px 16px 0px', // Memberikan ruang di dalam footer itu sendiri
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`, 
    flexWrap: 'wrap',
    gap: '16px',
  },
  footerRightGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  quickActionsFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  paginationGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }
});

// ============================================================================
// INTERFACE
// ============================================================================
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

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function PatientDirectory({ patients, onSelectPatient }: PatientDirectoryProps) {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      
      {/* 1. TITLE & BREADCRUMB AREA */}
      <div className={styles.headerSection}>
        <div className={styles.breadcrumb}>
          <Link href="/dashboard">Beranda</Link> <span>&gt;</span> <Text>Riwayat Klinis</Text>
        </div>
        
        <div className={styles.titleRow}>
          <Text size={900} weight="semibold" style={{ color: tokens.colorBrandForeground1 }}>
            Riwayat Klinis
          </Text>
        </div>
        
        <Text size={300} style={{ color: tokens.colorNeutralForeground3 }}>
          Sistem Manajemen Rekam Medis
        </Text>
      </div>

      {/* 2. COMMAND BAR */}
      <div className={styles.commandBar}>
        <Button appearance="transparent" icon={<AddRegular className={styles.blueIcon} />}>Buat Baru</Button>
        <Button appearance="transparent" icon={<DeleteRegular className={styles.blueIcon} />}>Hapus</Button>
        <div className={styles.divider} />
        <Button appearance="transparent" icon={<ArrowClockwiseRegular className={styles.blueIcon} />}>Refresh</Button>
        <Button appearance="transparent" icon={<DocumentArrowDownRegular className={styles.blueIcon} />}>Ekspor ke CSV</Button>
        <div className={styles.divider} />
        <Button appearance="transparent" icon={<PlayRegular className={styles.blueIcon} />}>Mulai Analisis</Button>
      </div>

      {/* 3. FILTER BAR */}
      <div className={styles.filterArea}>
        <Input 
          className={styles.filterInput}
          placeholder="Cari sumber daya, pasien, dan No. RM..." 
          contentBefore={<SearchRegular />} 
        />
        
        <div className={styles.activeFilterBadge}>
          <Text>Status Kehamilan <span className={styles.boldText}>sama dengan</span> Aktif</Text>
          <Button icon={<DismissRegular />} appearance="transparent" size="small" style={{ minWidth: 'auto', padding: '2px' }} />
        </div>
        <div className={styles.activeFilterBadge}>
          <Text>Risiko FGR <span className={styles.boldText}>sama dengan</span> Semua</Text>
          <Button icon={<DismissRegular />} appearance="transparent" size="small" style={{ minWidth: 'auto', padding: '2px' }} />
        </div>

        <Button appearance="subtle" icon={<AddRegular className={styles.blueIcon} />}>Tambahkan filter</Button>
      </div>

      {/* 4. DATA GRID / TABLE */}
      <div className={styles.tableContainer}>
        <Table aria-label="Daftar Pasien" style={{ minWidth: '800px' }}>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Nama Pasien</TableHeaderCell>
              <TableHeaderCell>No. Rekam Medis</TableHeaderCell>
              <TableHeaderCell>Tanggal Lahir</TableHeaderCell>
              <TableHeaderCell>Kunjungan Terakhir</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Aksi</TableHeaderCell>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {patients.map((patient) => (
              <TableRow 
                key={patient.id} 
                className={styles.interactiveRow}
                onClick={() => onSelectPatient(patient)}
              >
                <TableCell>
                  <div className={styles.patientNameCell}>
                    <Avatar color="brand" icon={<PersonRegular />} name={patient.name} size={32} />
                    <Text weight="semibold">{patient.name}</Text>
                  </div>
                </TableCell>
                <TableCell>{patient.mrn}</TableCell>
                <TableCell>{patient.dob}</TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
                <TableCell>
                  <span className={styles.statusBadge}>Aktif</span>
                </TableCell>
                <TableCell>
                  <Button 
                    appearance="subtle" 
                    icon={<ArrowRightRegular />} 
                    iconPosition="after"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPatient(patient);
                    }}
                  >
                    Buka
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* 5. FOOTER */}
      <div className={styles.footerSection}>
        <Text size={200} style={{ color: tokens.colorNeutralForeground3 }}>
          Menampilkan 1 - {patients.length} dari {patients.length} data.
        </Text>

        <div className={styles.footerRightGroup}>
          <div className={styles.quickActionsFooter}>
            <Button appearance="transparent" size="small" icon={<BookQuestionMarkRegular />}>
              Panduan Manajemen
            </Button>
            {/* IKON HEART PULSE DITAMBAHKAN PADA TOMBOL INI */}
            <Button appearance="transparent" size="small" icon={<HeartPulseRegular />}>
              Diagnosis Performa Sistem
            </Button>
          </div>

          {patients.length > 20 && <div className={styles.divider} />}

          {patients.length > 20 && (
            <div className={styles.paginationGroup}>
              <Button appearance="subtle" size="small" icon={<ChevronLeftRegular />} disabled>
                Sebel.
              </Button>
              <Text size={200} weight="semibold" style={{ padding: '0 8px' }}>1</Text>
              <Button appearance="subtle" size="small" icon={<ChevronRightRegular />} iconPosition="after">
                Selanj.
              </Button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}