import Image from "next/image";
import Link from "next/link";

const recipes = [
    {
        id: "bibimbap",
        title: "비빔밥",
        desc: "신선한 나물과 고소한 참기름의 조화",
        image: "/hero-food.png",
        time: "30분",
        difficulty: "중간",
        category: "밥"
    },
    {
        id: "japchae",
        title: "잡채",
        desc: "쫄깃한 당면과 다채로운 야채의 만남",
        image: "/japchae.png",
        time: "40분",
        difficulty: "중간",
        category: "면"
    },
    {
        id: "tteokbokki",
        title: "떡볶이",
        desc: "매콤달콤 국민 간식의 정석",
        image: "/tteokbokki.png",
        time: "25분",
        difficulty: "쉬움",
        category: "분식"
    },
    {
        id: "bulgogi",
        title: "불고기",
        desc: "달콤한 양념에 재운 부드러운 소고기",
        image: "/bulgogi.png",
        time: "35분",
        difficulty: "쉬움",
        category: "고기"
    },
    {
        id: "kimchi-jjigae",
        title: "김치찌개",
        desc: "깊은 맛의 전통 한식 찌개",
        image: "/kimchi-stew.png",
        time: "30분",
        difficulty: "쉬움",
        category: "국물"
    },
    {
        id: "banchan",
        title: "반찬 모음",
        desc: "다양한 밑반찬으로 건강한 한 끼",
        image: "/banchan.png",
        time: "다양",
        difficulty: "다양",
        category: "반찬"
    },
];

export default function RecipesPage() {
    return (
        <div className="bg-[#FDF8F3] text-[#3D3D3D] min-h-screen font-sans">
            {/* Navigation */}
            <nav className="p-6 flex justify-between items-center fixed w-full bg-[#FDF8F3]/90 backdrop-blur-md z-50 border-b border-[#E8DFD5]">
                <Link href="/" className="text-2xl font-bold text-[#8B5A2B] tracking-tight">자연의맛</Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <Link href="/recipes" className="text-[#8B5A2B] font-bold">레시피</Link>
                    <Link href="/about" className="hover:text-[#8B5A2B] transition-colors">소개</Link>
                    <Link href="/menu" className="hover:text-[#8B5A2B] transition-colors">메뉴</Link>
                    <Link href="/contact" className="hover:text-[#8B5A2B] transition-colors">연락처</Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-[#8B5A2B] font-medium mb-4">RECIPES</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">전체 레시피</h1>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
                        정성을 담아 준비한 전통 한식 레시피를 만나보세요.
                        신선한 재료와 3대째 이어온 비법으로 건강한 한 끼를 선사합니다.
                    </p>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="px-6 pb-12">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
                    {["전체", "밥", "면", "국물", "고기", "반찬", "분식"].map((cat) => (
                        <button
                            key={cat}
                            className="px-6 py-2 rounded-full border border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-colors font-medium"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Recipe Grid */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <Link
                            key={recipe.id}
                            href={`/recipes/${recipe.id}`}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-[#8B5A2B] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {recipe.category}
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#8B5A2B]">
                                    ⏱ {recipe.time}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold group-hover:text-[#8B5A2B] transition-colors">{recipe.title}</h3>
                                    <span className="text-sm text-[#6B6B6B] bg-[#FDF8F3] px-2 py-1 rounded">{recipe.difficulty}</span>
                                </div>
                                <p className="text-[#6B6B6B]">{recipe.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-[#2C1810] text-white text-center">
                <p className="text-[#A89080] text-sm">© 2026 자연의맛. All rights reserved.</p>
            </footer>
        </div>
    );
}
