import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="bg-[#FDF8F3] text-[#3D3D3D] min-h-screen font-sans">
            {/* Navigation */}
            <nav className="p-6 flex justify-between items-center fixed w-full bg-[#FDF8F3]/90 backdrop-blur-md z-50 border-b border-[#E8DFD5]">
                <Link href="/" className="text-2xl font-bold text-[#8B5A2B] tracking-tight">자연의맛</Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <Link href="/recipes" className="hover:text-[#8B5A2B] transition-colors">레시피</Link>
                    <Link href="/about" className="hover:text-[#8B5A2B] transition-colors">소개</Link>
                    <Link href="/menu" className="hover:text-[#8B5A2B] transition-colors">메뉴</Link>
                    <Link href="/contact" className="text-[#8B5A2B] font-bold">연락처</Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#8B5A2B] font-medium mb-4">CONTACT</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">연락하기</h1>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
                        궁금한 점이 있으신가요? 언제든지 연락주세요!
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="px-6 pb-20">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">문의하기</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">이름</label>
                                <input
                                    type="text"
                                    placeholder="이름을 입력하세요"
                                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">이메일</label>
                                <input
                                    type="email"
                                    placeholder="이메일을 입력하세요"
                                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">문의 유형</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all bg-white">
                                    <option>레시피 문의</option>
                                    <option>메뉴 문의</option>
                                    <option>협업 제안</option>
                                    <option>기타</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">메시지</label>
                                <textarea
                                    rows={5}
                                    placeholder="문의 내용을 입력하세요"
                                    className="w-full px-4 py-3 rounded-xl border border-[#E8DFD5] focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#8B5A2B] text-white py-4 rounded-xl font-bold hover:bg-[#6D4522] transition-colors shadow-lg"
                            >
                                문의 보내기
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#FDF8F3] rounded-full flex items-center justify-center text-xl">
                                        📍
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">주소</h3>
                                        <p className="text-[#6B6B6B]">서울시 강남구 테헤란로 123<br />자연의맛 빌딩 5층</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#FDF8F3] rounded-full flex items-center justify-center text-xl">
                                        📞
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">전화</h3>
                                        <p className="text-[#6B6B6B]">02-1234-5678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#FDF8F3] rounded-full flex items-center justify-center text-xl">
                                        ✉️
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">이메일</h3>
                                        <p className="text-[#6B6B6B]">contact@jayeoneuimat.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#FDF8F3] rounded-full flex items-center justify-center text-xl">
                                        🕐
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">영업시간</h3>
                                        <p className="text-[#6B6B6B]">평일 10:00 - 22:00<br />주말 11:00 - 21:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-[#2C1810] rounded-3xl p-8 text-white">
                            <h2 className="text-xl font-bold mb-6">SNS에서 만나요</h2>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-colors">
                                    📷
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-colors">
                                    📺
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-colors">
                                    💬
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-colors">
                                    📘
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="px-6 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#E8DFD5] rounded-3xl h-80 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-4xl mb-4">🗺️</p>
                            <p className="text-[#8B5A2B] font-medium">지도 영역</p>
                            <p className="text-sm text-[#6B6B6B]">Google Maps 또는 Kakao Map 연동 예정</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#2C1810] text-white text-center">
                <p className="text-[#A89080] text-sm">© 2026 자연의맛. All rights reserved.</p>
            </footer>
        </div>
    );
}
