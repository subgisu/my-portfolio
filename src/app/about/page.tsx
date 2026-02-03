import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const milestones = [
        { year: "1960", title: "시작", desc: "할머니의 작은 식당에서 시작된 이야기" },
        { year: "1985", title: "전수", desc: "어머니에게 전해진 비법 레시피" },
        { year: "2010", title: "확장", desc: "온라인으로 레시피 공유 시작" },
        { year: "2026", title: "현재", desc: "디지털 플랫폼으로 전통의 맛을 전파" },
    ];

    const values = [
        { icon: "🌿", title: "신선함", desc: "매일 아침 산지에서 직접 공수하는 신선한 재료만 사용합니다." },
        { icon: "❤️", title: "정성", desc: "한 그릇 한 그릇에 정성을 담아 요리합니다." },
        { icon: "📜", title: "전통", desc: "3대째 이어온 정통 한식 조리법을 고수합니다." },
        { icon: "💚", title: "건강", desc: "MSG 무첨가, 저염 조리로 건강을 생각합니다." },
    ];

    return (
        <div className="bg-[#FDF8F3] text-[#3D3D3D] min-h-screen font-sans">
            {/* Navigation */}
            <nav className="p-6 flex justify-between items-center fixed w-full bg-[#FDF8F3]/90 backdrop-blur-md z-50 border-b border-[#E8DFD5]">
                <Link href="/" className="text-2xl font-bold text-[#8B5A2B] tracking-tight">자연의맛</Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <Link href="/recipes" className="hover:text-[#8B5A2B] transition-colors">레시피</Link>
                    <Link href="/about" className="text-[#8B5A2B] font-bold">소개</Link>
                    <Link href="/menu" className="hover:text-[#8B5A2B] transition-colors">메뉴</Link>
                    <Link href="/contact" className="hover:text-[#8B5A2B] transition-colors">연락처</Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#FDF8F3] to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#8B5A2B] font-medium mb-4">ABOUT US</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        3대째 이어온<br />
                        <span className="text-[#8B5A2B]">전통의 맛</span>
                    </h1>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                        1960년 할머니의 작은 식당에서 시작된 우리의 이야기는
                        세대를 거쳐 지금까지 이어져 왔습니다. 변하지 않는 맛과 정성으로
                        여러분의 식탁을 함께합니다.
                    </p>
                </div>
            </section>

            {/* Story Image */}
            <section className="px-6 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/ingredients.png"
                            alt="신선한 재료"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-sm opacity-80 mb-2">Since 1960</p>
                            <h3 className="text-3xl font-bold">자연에서 식탁까지</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#8B5A2B] font-medium mb-2">OUR VALUES</p>
                        <h2 className="text-3xl md:text-4xl font-bold">우리의 가치</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((item, idx) => (
                            <div key={idx} className="text-center p-8 rounded-3xl bg-[#FDF8F3] hover:shadow-lg transition-shadow">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-[#6B6B6B]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 px-6 bg-[#2C1810] text-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#C4A484] font-medium mb-2">OUR HISTORY</p>
                        <h2 className="text-3xl md:text-4xl font-bold">우리의 역사</h2>
                    </div>
                    <div className="space-y-8">
                        {milestones.map((item, idx) => (
                            <div key={idx} className="flex gap-8 items-start">
                                <div className="flex-shrink-0 w-20 text-right">
                                    <span className="text-2xl font-bold text-[#C4A484]">{item.year}</span>
                                </div>
                                <div className="flex-shrink-0 w-4 h-4 bg-[#C4A484] rounded-full mt-2 relative">
                                    {idx < milestones.length - 1 && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-[#C4A484]/30" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-[#A89080]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-5xl font-bold text-[#8B5A2B] mb-2">60+</p>
                        <p className="text-[#6B6B6B]">년의 전통</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold text-[#8B5A2B] mb-2">100+</p>
                        <p className="text-[#6B6B6B]">레시피</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold text-[#8B5A2B] mb-2">50K+</p>
                        <p className="text-[#6B6B6B]">만족한 고객</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold text-[#8B5A2B] mb-2">3</p>
                        <p className="text-[#6B6B6B]">세대</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-[#8B5A2B] text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">우리의 레시피를 직접 만나보세요</h2>
                <Link
                    href="/recipes"
                    className="inline-block bg-white text-[#8B5A2B] px-8 py-4 rounded-full font-bold hover:bg-[#FDF8F3] transition-colors shadow-lg"
                >
                    레시피 보러가기 →
                </Link>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#2C1810] text-white text-center">
                <p className="text-[#A89080] text-sm">© 2026 자연의맛. All rights reserved.</p>
            </footer>
        </div>
    );
}
