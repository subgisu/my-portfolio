import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        id: "bibimbap",
        title: "비빔밥",
        desc: "신선한 나물과 고소한 참기름의 조화",
        image: "/hero-food.png",
        price: "12,000원",
        tags: ["인기", "추천"]
    },
    {
        id: "japchae",
        title: "잡채",
        desc: "쫄깃한 당면과 다채로운 야채의 만남",
        image: "/japchae.png",
        price: "15,000원",
        tags: ["잔치"]
    },
    {
        id: "tteokbokki",
        title: "떡볶이",
        desc: "매콤달콤 국민 간식의 정석",
        image: "/tteokbokki.png",
        price: "8,000원",
        tags: ["인기", "매운맛"]
    },
    {
        id: "bulgogi",
        title: "불고기",
        desc: "달콤한 양념에 재운 부드러운 소고기",
        image: "/bulgogi.png",
        price: "18,000원",
        tags: ["추천"]
    },
    {
        id: "kimchi-jjigae",
        title: "김치찌개",
        desc: "깊은 맛의 전통 한식 찌개",
        image: "/kimchi-stew.png",
        price: "9,000원",
        tags: ["인기"]
    },
    {
        id: "banchan",
        title: "반찬 세트",
        desc: "다양한 밑반찬으로 건강한 한 끼",
        image: "/banchan.png",
        price: "6,000원",
        tags: ["사이드"]
    },
];

const setMenus = [
    {
        title: "한상 차림",
        desc: "비빔밥 + 국 + 반찬 5종",
        price: "18,000원",
        popular: true
    },
    {
        title: "불고기 정식",
        desc: "불고기 + 밥 + 국 + 반찬 5종",
        price: "22,000원",
        popular: false
    },
    {
        title: "찌개 백반",
        desc: "김치찌개 + 밥 + 반찬 5종",
        price: "12,000원",
        popular: true
    },
];

export default function MenuPage() {
    return (
        <div className="bg-[#FDF8F3] text-[#3D3D3D] min-h-screen font-sans">
            {/* Navigation */}
            <nav className="p-6 flex justify-between items-center fixed w-full bg-[#FDF8F3]/90 backdrop-blur-md z-50 border-b border-[#E8DFD5]">
                <Link href="/" className="text-2xl font-bold text-[#8B5A2B] tracking-tight">자연의맛</Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <Link href="/recipes" className="hover:text-[#8B5A2B] transition-colors">레시피</Link>
                    <Link href="/about" className="hover:text-[#8B5A2B] transition-colors">소개</Link>
                    <Link href="/menu" className="text-[#8B5A2B] font-bold">메뉴</Link>
                    <Link href="/contact" className="hover:text-[#8B5A2B] transition-colors">연락처</Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-[#8B5A2B] font-medium mb-4">MENU</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">전체 메뉴</h1>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
                        신선한 재료로 정성껏 준비한 메뉴들을 만나보세요.
                    </p>
                </div>
            </section>

            {/* Set Menus */}
            <section className="px-6 pb-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">🍽 세트 메뉴</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {setMenus.map((menu, idx) => (
                            <div
                                key={idx}
                                className={`p-8 rounded-3xl border-2 ${menu.popular ? 'border-[#8B5A2B] bg-white shadow-xl' : 'border-[#E8DFD5] bg-white/50'} hover:shadow-lg transition-shadow relative`}
                            >
                                {menu.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B5A2B] text-white px-4 py-1 rounded-full text-sm font-medium">
                                        인기
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2">{menu.title}</h3>
                                <p className="text-[#6B6B6B] mb-4">{menu.desc}</p>
                                <p className="text-2xl font-bold text-[#8B5A2B]">{menu.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Single Items */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">🥢 단품 메뉴</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex"
                            >
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between flex-1">
                                    <div>
                                        <div className="flex gap-2 mb-1">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="text-xs bg-[#FDF8F3] text-[#8B5A2B] px-2 py-0.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="font-bold mb-1">{item.title}</h3>
                                        <p className="text-sm text-[#6B6B6B] line-clamp-1">{item.desc}</p>
                                    </div>
                                    <p className="text-lg font-bold text-[#8B5A2B]">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notice */}
            <section className="px-6 pb-20">
                <div className="max-w-2xl mx-auto bg-[#8B5A2B]/10 rounded-2xl p-8 text-center">
                    <p className="text-[#8B5A2B] font-medium mb-2">📢 안내</p>
                    <p className="text-[#6B6B6B]">
                        모든 메뉴는 신선한 재료로 당일 조리됩니다.<br />
                        알레르기가 있으신 분은 미리 말씀해주세요.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-gradient-to-r from-[#8B5A2B] to-[#6D4522] text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">레시피를 직접 만들어보세요!</h2>
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
