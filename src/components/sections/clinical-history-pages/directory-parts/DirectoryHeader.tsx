'use client';

import React from 'react';
import { makeStyles, tokens, Text, Link, Button } from '@fluentui/react-components';
import { ArrowLeft24Regular } from '@fluentui/react-icons';
import { useRouter } from 'next/navigation';

const useStyles = makeStyles({
  headerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px', 
    paddingBottom: '16px',
    marginBottom: '16px',
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
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
    gap: '12px',
    flexWrap: 'wrap',
  },
});

export default function DirectoryHeader() {
  const styles = useStyles();
  const router = useRouter();

  return (
    <div className={styles.headerSection}>
      <div className={styles.breadcrumb}>
        <Link href="/dashboard">Beranda</Link> <span>&gt;</span> <Text>Riwayat Klinis</Text>
      </div>
      
      <div className={styles.titleRow}>
        <Button
          appearance="subtle"
          icon={<ArrowLeft24Regular />}
          onClick={() => router.back()}
          aria-label="Kembali"
        />
        <Text size={900} weight="semibold" style={{ color: tokens.colorNeutralForeground1 }}>
          Riwayat Klinis
        </Text>
      </div>
    </div>
  );
}