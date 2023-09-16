import jualbelismall from './images/jualbeli-small.png'
import chatsmall from './images/chat-small.png'
import customsmall from './images/custom-small.png'
import safesmall from './images/safe-small.png'
import jualbelibig from './images/jualbeli-big.png'
import chatbig from './images/chat-big.png'
import custombig from './images/custom-big.png'
import safebig from './images/safe-big.png'
import bakground1 from './images/background1.png'

const Fitur = () => {
    return (
        <div className="Fitur">
            <div className="h-[3867px] relative bg-teal-950">
    <img className="w-full h-[3243px] left-0 top-0 absolute" src={bakground1} />
    <div className="left-[127px] top-[111px] absolute flex-col justify-center items-center gap-[203px] inline-flex">
        <div className="flex-col justify-start items-center gap-[100px] flex">
            <div className="flex-col justify-start items-center gap-[19px] flex">
                <div className="text-slate-200 text-[64px] font-bold font-['Inter']">Berbagai Fitur Menarik</div>
                <div className="w-[810px] text-center text-slate-200 text-2xl font-normal font-['Inter']">Kami menyediakan berbagai fitur yang Anda butuhkan.</div>
            </div>
            <div className="justify-start items-end gap-[39px] inline-flex">
                <img className="w-[267px] h-[294px]" src={jualbelismall} />
                <img className="w-[267px] h-[294px]" src={chatsmall} />
                <img className="w-[267px] h-[294px]" src={customsmall} />
                <img className="w-[267px] h-[294px]" src={safesmall} />
            </div>
        </div>
        <div className="flex-col justify-start items-start gap-[147px] flex">
            <div className="justify-start items-center gap-[108px] inline-flex">
                <div className="flex-col justify-start items-center gap-[45px] inline-flex">
                    <div className="w-[440.70px] h-28 text-slate-200 text-5xl font-bold font-['Inter'] leading-[56px]">Transaksi Sesama Pengguna</div>
                    <div className="w-[453.72px] h-[72px] text-slate-200 text-lg font-normal font-['Inter'] leading-normal">Seken memungkinkan Anda untuk melakukan penjualan, pembelian, serta barter pakaian dengan mudah dan nyaman.</div>
                    <div className="px-4 py-2 bg-yellow-400 rounded-3xl shadow justify-start items-center gap-2 inline-flex">
                        <div className="text-teal-950 text-base font-medium font-['Inter'] leading-normal">Pelajari lebih lanjut</div>
                        <div className="w-[18px] text-center text-teal-950 text-lg font-normal font-['Inter'] leading-normal">→</div>
                    </div>
                </div>
                <img className="w-[558px] h-[544px]" src={jualbelibig} />
            </div>
            <div className="w-[1119.72px] h-[544px] relative">
                <div className="w-[453.72px] h-[310px] left-[666px] top-[111px] absolute flex-col justify-start items-center gap-[55px] inline-flex">
                    <div className="w-[440.70px] h-28 text-slate-200 text-5xl font-bold font-['Inter'] leading-[56px]">Bercakap Sesama Pengguna</div>
                    <div className="w-[453.72px] h-12 text-slate-200 text-lg font-normal font-['Inter'] leading-normal">Kami menyediakan ruang obrolan untuk mempermudah transaksi Anda tanpa berpindah aplikasi.</div>
                    <div className="px-4 py-2 bg-yellow-400 rounded-3xl shadow justify-start items-center gap-2 inline-flex">
                        <div className="text-teal-950 text-base font-medium font-['Inter'] leading-normal">Pelajari lebih lanjut</div>
                        <div className="w-[18px] text-center text-teal-950 text-lg font-normal font-['Inter'] leading-normal">→</div>
                    </div>
                </div>
                <img className="w-[558px] h-[544px] left-0 top-0 absolute" src={chatbig} />
            </div>
            <div />
            <div className="justify-start items-center gap-[100px] inline-flex">
                <div className="flex-col justify-start items-center gap-[47px] inline-flex">
                    <div className="w-[470px] h-28 text-slate-200 text-5xl font-bold font-['Inter'] leading-[56px]">Kustomisasi Halaman Eksplorasi</div>
                    <div className="w-[453.72px] h-[72px] text-slate-200 text-lg font-normal font-['Inter'] leading-normal">Kami akan mengkustomisasi halaman eksplorasi Anda sesuai dengan kebutuhan dan riwayat pencarian.</div>
                    <div className="px-4 py-2 bg-yellow-400 rounded-3xl shadow justify-start items-center gap-2 inline-flex">
                        <div className="text-teal-950 text-base font-medium font-['Inter'] leading-normal">Pelajari lebih lanjut</div>
                        <div className="w-[18px] text-center text-teal-950 text-lg font-normal font-['Inter'] leading-normal">→</div>
                    </div>
                </div>
                <img className="w-[558px] h-[544px]" src={custombig} />
            </div>
            <div className="w-[1123.72px] h-[544px] relative">
                <img className="w-[558px] h-[544px] left-0 top-0 absolute" src={safebig} />
                <div className="w-[453.72px] h-[312px] left-[670px] top-[120px] absolute flex-col justify-start items-center gap-14 inline-flex">
                    <div className="w-[440.70px] h-28 text-slate-200 text-5xl font-bold font-['Inter'] leading-[56px]">Keamanan Transaksi</div>
                    <div className="w-[453.72px] h-12 text-slate-200 text-lg font-normal font-['Inter'] leading-normal">Seken menjamin keamanan bertransaksi melalui fitur pemberian ulasan serta pengajuan laporan.</div>
                    <div className="px-4 py-2 bg-yellow-400 rounded-3xl shadow justify-start items-center gap-2 inline-flex">
                        <div className="text-teal-950 text-base font-medium font-['Inter'] leading-normal">Pelajari lebih lanjut</div>
                        <div className="w-[18px] text-center text-teal-950 text-lg font-normal font-['Inter'] leading-normal">→</div>
                    </div>
                </div>
            </div>
            <div />
        </div>
    </div>
</div>
        </div>
    );
}
 
export default Fitur;