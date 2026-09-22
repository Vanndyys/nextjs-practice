import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.wrap}>
      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.kicker}>Curriculum Vitae</p>
        <h1 className={styles.name}>Revan Adytama Nugraha</h1>
        <p className={styles.tagline}>  
          Lulusan SMA yang komunikatif dan siap bekerja dalam sistem ship —
          cepat belajar dan terbiasa beradaptasi di lingkungan kerja baru.
        </p>

        <ul className={styles.contactRow}>
          <li>Batam, Kepulauan Riau</li>
          <li>
            <a href="tel:+6289537010872">+62 895-3701-10872</a>
          </li>
          <li>
            <a href="mailto:revanadytamanugraha13@gmail.com">
              revanadytamanugraha13@gmail.com
            </a>
          </li>
        </ul>

        <div className={styles.ctaRow}>
          <a
            className={styles.ctaPrimary}
            href="mailto:revanadytamanugraha13@gmail.com"
          >
            Kirim email
          </a>
          <a className={styles.ctaSecondary} href="/cv-revan-adytama-nugraha.pdf" download>
            Unduh CV
          </a>
        </div>
      </section>

      {/* About */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tentang saya</h2>
        <p className={styles.about}>
          Saya lulusan SMA Kurikulum Merdeka dengan pengalaman dalam
          pelayanan pelanggan dan kerja tim, terbentuk melalui kegiatan
          Projek Penguatan Profil Pelajar Pancasila (P5). Saya terbiasa
          bekerja dalam kelompok, cepat mempelajari hal baru, dan siap
          menyesuaikan diri dengan ritme kerja di lingkungan yang belum saya
          kenal — termasuk sistem kerja ship.
        </p>
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pendidikan</h2>
        <div className={styles.entry}>
          <div className={styles.entryHead}>
            <span className={styles.entryTitle}>SMAN 20 Batam</span>
            <span className={styles.entryDate}>2022 – 2025</span>
          </div>
          <p className={styles.entrySub}>
            Kurikulum Merdeka · Peminatan Bahasa Inggris Tingkat Lanjut
          </p>
          <span className={styles.stat}>Nilai rata-rata 92,27</span>
        </div>
      </section>

      {/* Experience */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pengalaman</h2>
        <div className={styles.entry}>
          <div className={styles.entryHead}>
            <span className={styles.entryTitle}>
              Proyek Sekolah &amp; Kerja Kelompok
            </span>
            <span className={styles.entryDate}>2022 – 2025</span>
          </div>
          <ul className={styles.entryList}>
            <li>
              Membuat dan mengedit dokumen menggunakan Microsoft Word untuk
              tugas sekolah
            </li>
            <li>
              Menyusun dan mempresentasikan materi menggunakan Microsoft
              PowerPoint
            </li>
            <li>Aktif bekerja sama dalam tim untuk menyelesaikan tugas tepat waktu</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Keterampilan</h2>
        <ul className={styles.skillGrid}>
          <li>Pengoperasian Microsoft Word</li>
          <li>Pengoperasian Microsoft Excel</li>
          <li>Pengoperasian Microsoft PowerPoint</li>
          <li>Kemampuan komunikasi yang baik</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerNote}>
          Terbuka untuk peluang kerja baru — silakan hubungi lewat email atau
          telepon di atas.
        </p>
        <a
          className={styles.footerLink}
          href="mailto:revanadytamanugraha13@gmail.com"
        >
          revanadytamanugraha13@gmail.com
        </a>
      </footer>
    </main>
  );
}