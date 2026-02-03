import Image from "next/image";
import Link from "next/link";

// 레시피 데이터 (실제로는 API나 DB에서 가져옴)
const recipes = [
    {
        id: "bibimbap",
        title: "비빔밥",
        desc: "신선한 나물과 고소한 참기름의 조화",
        fullDesc: "비빔밥은 밥 위에 여러 가지 나물, 고기, 계란 등을 올리고 고추장과 참기름을 넣어 비벼 먹는 한국의 대표적인 음식입니다. 영양소가 골고루 들어있어 건강한 한 끼 식사로 손색이 없습니다.",
        image: "/hero-food.png",
        time: "30분",
        servings: "2인분",
        difficulty: "중간",
        ingredients: [
            "밥 2공기",
            "시금치 100g",
            "콩나물 100g",
            "당근 1/2개",
            "표고버섯 3개",
            "소고기 100g",
            "계란 2개",
            "고추장 2큰술",
            "참기름 1큰술",
            "깨소금 약간"
        ],
        steps: [
            "시금치, 콩나물을 각각 데쳐서 간장, 참기름으로 무친다.",
            "당근과 표고버섯을 채 썰어 볶는다.",
            "소고기는 간장, 설탕, 다진 마늘로 양념해 볶는다.",
            "달걀은 프라이하여 준비한다.",
            "그릇에 밥을 담고 준비한 재료들을 보기 좋게 올린다.",
            "고추장과 참기름을 넣고 잘 비벼 먹는다."
        ]
    },
    {
        id: "japchae",
        title: "잡채",
        desc: "쫄깃한 당면과 다채로운 야채의 만남",
        fullDesc: "잡채는 당면에 여러 가지 채소와 고기를 함께 볶아 만드는 음식으로, 잔치나 명절에 빠지지 않는 음식입니다. 쫄깃한 당면과 다양한 야채가 어우러져 풍부한 맛과 식감을 제공합니다.",
        image: "/japchae.png",
        time: "40분",
        servings: "4인분",
        difficulty: "중간",
        ingredients: [
            "당면 200g",
            "시금치 100g",
            "당근 1개",
            "양파 1개",
            "표고버섯 5개",
            "소고기 150g",
            "간장 4큰술",
            "설탕 2큰술",
            "참기름 2큰술",
            "깨 약간"
        ],
        steps: [
            "당면을 삶아 물기를 빼고 참기름을 넣어 버무린다.",
            "시금치는 데쳐서 간장, 참기름으로 무친다.",
            "당근, 양파, 버섯을 채 썰어 각각 볶는다.",
            "소고기는 채 썰어 간장, 설탕으로 양념해 볶는다.",
            "모든 재료를 큰 볼에 넣고 간장, 설탕, 참기름으로 간한다.",
            "잘 섞어 그릇에 담고 깨를 뿌려 완성한다."
        ]
    },
    {
        id: "tteokbokki",
        title: "떡볶이",
        desc: "매콤달콤 국민 간식의 정석",
        fullDesc: "떡볶이는 가래떡을 고추장 양념에 볶아 만드는 한국의 대표적인 분식입니다. 매콤달콤한 맛이 특징이며, 어묵, 삶은 달걀 등을 함께 넣어 더욱 풍성하게 즐길 수 있습니다.",
        image: "/tteokbokki.png",
        time: "25분",
        servings: "2인분",
        difficulty: "쉬움",
        ingredients: [
            "떡볶이 떡 300g",
            "어묵 2장",
            "대파 1대",
            "삶은 달걀 2개",
            "고추장 2큰술",
            "고춧가루 1큰술",
            "설탕 1큰술",
            "간장 1큰술",
            "다진 마늘 1작은술",
            "물 2컵"
        ],
        steps: [
            "떡은 물에 담가 부드럽게 불린다.",
            "어묵은 먹기 좋은 크기로 자른다.",
            "냄비에 물, 고추장, 고춧가루, 설탕, 간장, 마늘을 넣어 양념장을 만든다.",
            "양념장이 끓으면 떡과 어묵을 넣고 중불에서 조린다.",
            "떡이 부드러워지면 대파를 넣고 한소끔 더 끓인다.",
            "삶은 달걀을 곁들여 완성한다."
        ]
    },
    {
        id: "bulgogi",
        title: "불고기",
        desc: "달콤한 양념에 재운 부드러운 소고기",
        fullDesc: "불고기는 얇게 저민 소고기를 간장 양념에 재워 구워 먹는 한국의 전통 요리입니다. 달콤하고 고소한 맛이 특징이며, 쌈채소와 함께 먹으면 더욱 맛있습니다.",
        image: "/bulgogi.png",
        time: "35분",
        servings: "3인분",
        difficulty: "쉬움",
        ingredients: [
            "소고기 불고기용 400g",
            "양파 1개",
            "대파 1대",
            "배 1/4개",
            "간장 4큰술",
            "설탕 2큰술",
            "다진 마늘 1큰술",
            "참기름 1큰술",
            "후춧가루 약간",
            "깨 약간"
        ],
        steps: [
            "배와 양파 반 개를 갈아 양념장을 만든다.",
            "간장, 설탕, 마늘, 참기름, 후춧가루를 섞어 양념을 완성한다.",
            "소고기에 양념을 넣고 30분간 재운다.",
            "나머지 양파와 대파는 채 썬다.",
            "팬에 기름을 두르고 재운 고기와 채소를 함께 볶는다.",
            "깨를 뿌려 완성하고 상추와 함께 낸다."
        ]
    },
    {
        id: "kimchi-jjigae",
        title: "김치찌개",
        desc: "깊은 맛의 전통 한식 찌개",
        fullDesc: "김치찌개는 잘 익은 김치와 돼지고기, 두부 등을 넣고 끓인 한국의 대표적인 찌개입니다. 칼칼하고 깊은 맛이 특징이며, 밥과 함께 먹으면 훌륭한 한 끼 식사가 됩니다.",
        image: "/kimchi-stew.png",
        time: "30분",
        servings: "2인분",
        difficulty: "쉬움",
        ingredients: [
            "신 김치 300g",
            "돼지고기 앞다리살 150g",
            "두부 1/2모",
            "대파 1대",
            "양파 1/2개",
            "고춧가루 1큰술",
            "다진 마늘 1큰술",
            "국간장 1큰술",
            "참기름 1큰술",
            "물 3컵"
        ],
        steps: [
            "돼지고기는 먹기 좋은 크기로 썬다.",
            "냄비에 참기름을 두르고 돼지고기를 볶는다.",
            "김치를 넣고 함께 볶다가 물을 붓는다.",
            "끓어오르면 고춧가루, 마늘, 국간장을 넣는다.",
            "두부와 양파를 넣고 10분간 더 끓인다.",
            "대파를 넣고 한소끔 끓여 완성한다."
        ]
    },
    {
        id: "banchan",
        title: "반찬 모음",
        desc: "다양한 밑반찬으로 건강한 한 끼",
        fullDesc: "한식의 꽃인 반찬은 메인 요리와 함께 즐기는 다양한 밑반찬입니다. 김치, 나물, 젓갈 등 다양한 종류가 있으며, 영양 균형을 맞추고 식사를 풍성하게 해줍니다.",
        image: "/banchan.png",
        time: "다양",
        servings: "다양",
        difficulty: "다양",
        ingredients: [
            "배추김치",
            "시금치 나물",
            "콩나물 무침",
            "오이무침",
            "계란말이",
            "두부조림",
            "멸치볶음",
            "감자조림"
        ],
        steps: [
            "각 반찬별로 재료를 준비한다.",
            "나물류는 데쳐서 양념에 무친다.",
            "볶음류는 팬에 기름을 두르고 볶는다.",
            "조림류는 양념장에 조린다.",
            "각 반찬을 예쁜 그릇에 담아 낸다.",
            "냉장 보관하며 2-3일간 맛있게 즐긴다."
        ]
    },
];

export function generateStaticParams() {
    return recipes.map((recipe) => ({
        id: recipe.id,
    }));
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) {
        return (
            <div className="min-h-screen bg-[#FDF8F3] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#8B5A2B] mb-4">레시피를 찾을 수 없습니다</h1>
                    <Link href="/" className="text-[#6B6B6B] hover:text-[#8B5A2B]">
                        ← 메인으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FDF8F3] text-[#3D3D3D] min-h-screen font-sans">
            {/* Navigation */}
            <nav className="p-6 flex justify-between items-center fixed w-full bg-[#FDF8F3]/90 backdrop-blur-md z-50 border-b border-[#E8DFD5]">
                <Link href="/" className="text-2xl font-bold text-[#8B5A2B] tracking-tight">자연의맛</Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <Link href="/#recipes" className="hover:text-[#8B5A2B] transition-colors">레시피</Link>
                    <Link href="/#about" className="hover:text-[#8B5A2B] transition-colors">소개</Link>
                    <Link href="/#menu" className="hover:text-[#8B5A2B] transition-colors">메뉴</Link>
                    <Link href="/#contact" className="hover:text-[#8B5A2B] transition-colors">연락처</Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="text-[#8B5A2B] hover:underline mb-6 inline-block">
                        ← 레시피 목록으로
                    </Link>

                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-8">
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="bg-[#8B5A2B] text-white px-4 py-2 rounded-full text-sm font-medium">
                            ⏱ {recipe.time}
                        </span>
                        <span className="bg-white text-[#8B5A2B] px-4 py-2 rounded-full text-sm font-medium border border-[#8B5A2B]">
                            👥 {recipe.servings}
                        </span>
                        <span className="bg-white text-[#8B5A2B] px-4 py-2 rounded-full text-sm font-medium border border-[#8B5A2B]">
                            📊 난이도: {recipe.difficulty}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
                    <p className="text-xl text-[#6B6B6B] leading-relaxed">{recipe.fullDesc}</p>
                </div>
            </section>

            {/* Ingredients & Steps */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
                    {/* Ingredients */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-32">
                            <h2 className="text-2xl font-bold mb-6 text-[#8B5A2B]">재료</h2>
                            <ul className="space-y-3">
                                {recipe.ingredients.map((ing, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-[#8B5A2B] rounded-full"></span>
                                        <span>{ing}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-8 text-[#8B5A2B]">만드는 법</h2>
                        <div className="space-y-6">
                            {recipe.steps.map((step, idx) => (
                                <div key={idx} className="flex gap-6 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8B5A2B] to-[#6D4522] text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {idx + 1}
                                    </div>
                                    <p className="text-lg leading-relaxed pt-2">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Recipes */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">다른 레시피도 살펴보세요</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {recipes.filter(r => r.id !== recipe.id).slice(0, 4).map((item) => (
                            <Link key={item.id} href={`/recipes/${item.id}`} className="group">
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="mt-3 font-bold text-center group-hover:text-[#8B5A2B] transition-colors">{item.title}</h3>
                            </Link>
                        ))}
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
