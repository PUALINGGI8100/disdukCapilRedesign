const FungsiDisdukCapil = ({activeBtn})=>{
   return (
     <>
       <p className={`${activeBtn === 0 ? "block" : "hidden"}`}>
         Dinas Kependudukan dan Pencatatan Sipil mempunyai tugas melaksanakan
         urusan administrasi kependudukan di bidang Kependudukan dan Pencatatan
         Sipil berdasarkan Azas Otonomi dan Tugas Pembantuan.
       </p>
       <span className={`w-full ${activeBtn === 1 ? "block" : "hidden"}`}>
         <ul className="px-5 flex flex-col gap-1">
           <li>Penyusunan program dan anggaran</li>
           <li>
             Pengelolaan keuangan, perlengkapan, urusan tata usaha, rumah tangga
             dan barang milik negara, urusan aparatur sipil negara
           </li>
           <li>
             Penyusunan perencanaan pelayanan pendaftaran penduduk, pelayanan
             pencatatan sipil, pengelolaan informasi administrasi kependudukan,
             kerja sama administrasi kependudukan, pemanfaatan data dan dokumen
             kependudukan serta inovasi pelayanan administrasi kependudukan
           </li>
           <li>
             Perumusan kebijakan teknis pelayanan pendaftaran penduduk,
             pelayanan pencatatan sipil, pengelolaan informasi administrasi
             kependudukan, kerja sama administrasi kependudukan, pemanfaatan
             data dan dokumen kependudukan serta inovasi pelayanan administrasi
             kependudukan
           </li>
           <li>Pelaksanaan pelayanan pendaftaran penduduk</li>
           <li>Pelaksanaan pelayanan pencatatan sipil</li>
           <li>Pelaksanaanpengelolaan informasi administrasi kependudukan</li>
           <li>Pelaksanaan kerja sama administrasi kependudukan</li>
           <li>Pelaksanaanpemanfaatan data dan dokumen kependudukan</li>
           <li>Pelaksanaan inovasi pelayanan administrasi kependudukan</li>
           <li>
             Pelaksanaan kegiatan penatausahaan dinas kependudukan dan
             pencatatan sipil
           </li>
           <li>
             Pelaksanaan, koordinasi, pengendalian dan pemberian bimbingan
             teknis bidangadministrasi kependudukan
           </li>
           <li>
             Pelaksanaan pemantauan, evaluasi dan pelaporanbidang administrasi
             kependudukan
           </li>
           <li>
             Pelaksanaan tugas lain yang sesuai dengan ketentuan peraturan
             perundang-undangan
           </li>
         </ul>
       </span>
     </>
   );
}

export default FungsiDisdukCapil;