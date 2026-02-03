import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const recipes = [
    {
      id: "bibimbap",
      title: "비빔밥",
      desc: "신선한 나물과 고소한 참기름의 조화",
      image: "/hero-food.png",
      time: "30분"
    },
    {
      id: "japchae",
      title: "잡채",
      desc: "쫄깃한 당면과 다채로운 야채의 만남",
      image: "/japchae.png",
      time: "40분"
    },
    {
      id: "tteokbokki",
      title: "떡볶이",
      desc: "매콤달콤 국민 간식의 정석",
      image: "/tteokbokki.png",
      time: "25분"
    },
    {
      id: "bulgogi",
      title: "불고기",
      desc: "달콤한 양념에 재운 부드러운 소고기",
      image: "/bulgogi.png",
      time: "35분"
    },
    {
      id: "kimchi-jjigae",
      title: "김치찌개",
      desc: "깊은 맛의 전통 한식 찌개",
      image: "/kimchi-stew.png",
      time: "30분"
    },
    {
      id: "banchan",
      title: "반찬 모음",
      desc: "다양한 밑반찬으로 건강한 한 끼",
      image: "/banchan.png",
      time: "다양"
    },
  ];

  const categories = [
    { name: "한식", icon: "🍚" },
    { name: "반찬", icon: "🥬" },
    { name: "국물요리", icon: "🍲" },
    { name: "면요리", icon: "🍜" },
    { name: "간식", icon: "🍡" },
    { name: "건강식", icon: "🥗" },
  ];

  const features = [
    { title: "신선한 재료", desc: "매일 아침 직접 공수하는 신선한 재료만 사용합니다", icon: "🌿" },
    { title: "전통 레시피", desc: "3대째 이어온 정통 한식 조리법을 고수합니다", icon: "📜" },
    { title: "건강한 조리", desc: "MSG 무첨가, 저염 조리로 건강을 생각합니다", icon: "💚" },
  ];

  return (
    <div className="bg-[#FDF8F3] text-[#3D3D3D] min-h-screen font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center fixed w-full bg-[#FDF8F3]/90 backdrop-blur-md z-50 border-b border-[#E8DFD5]">
        <Link href="/" className="text-2xl font-bold text-[#8B5A2B] tracking-tight">자연의맛</Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/recipes" className="hover:text-[#8B5A2B] transition-colors">레시피</Link>
          <Link href="/about" className="hover:text-[#8B5A2B] transition-colors">소개</Link>
          <Link href="/menu" className="hover:text-[#8B5A2B] transition-colors">메뉴</Link>
          <Link href="/contact" className="hover:text-[#8B5A2B] transition-colors">연락처</Link>
        </div>
        <button className="md:hidden text-2xl">☰</button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#8B5A2B] font-medium mb-4 tracking-wide">자연에서 식탁까지</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#3D3D3D]">
              정성을 담은<br />
              <span className="text-[#8B5A2B]">건강한 한 끼</span>
            </h1>
            <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
              신선한 재료와 전통 레시피로 만드는 건강한 한식.
              바쁜 일상 속에서도 제대로 된 한 끼를 즐겨보세요.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#8B5A2B] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6D4522] transition-colors shadow-lg">
                레시피 보기
              </button>
              <button className="border-2 border-[#8B5A2B] text-[#8B5A2B] px-8 py-4 rounded-full font-medium hover:bg-[#8B5A2B] hover:text-white transition-colors">
                더 알아보기
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/hero-food.png"
                alt="비빔밥"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm text-[#6B6B6B]">오늘의 추천</p>
              <p className="font-bold text-[#8B5A2B]">비빔밥</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className="w-20 h-20 bg-[#FDF8F3] rounded-full flex items-center justify-center text-3xl mb-3 group-hover:bg-[#8B5A2B] group-hover:scale-110 transition-all duration-300 shadow-md">
                  <span className="group-hover:scale-125 transition-transform">{cat.icon}</span>
                </div>
                <span className="text-sm font-medium text-[#6B6B6B] group-hover:text-[#8B5A2B] transition-colors">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Cards Grid */}
      <section id="recipes" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#8B5A2B] font-medium mb-2">RECIPES</p>
            <h2 className="text-3xl md:text-4xl font-bold">인기 레시피</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, idx) => (
              <Link key={idx} href={`/recipes/${recipe.id}`} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer block">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#8B5A2B]">
                    ⏱ {recipe.time}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                  <p className="text-[#6B6B6B]">{recipe.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section - Green Background */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#4A7C59] to-[#3D6B4A] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/ingredients.png"
                alt="신선한 재료"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>
          <div>
            <p className="text-[#A8D5BA] font-medium mb-4">FRESH INGREDIENTS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              최고의 재료만을<br />엄선합니다
            </h2>
            <p className="text-lg text-[#C5E1D0] mb-8 leading-relaxed">
              매일 아침 산지에서 직접 공수하는 신선한 채소와
              엄선된 재료들로 건강하고 맛있는 요리를 만듭니다.
            </p>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#C5E1D0]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story - Dark Section */}
      <section id="about" className="py-20 px-6 bg-[#2C1810] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C4A484] font-medium mb-4">OUR STORY</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            3대째 이어온<br />전통의 맛
          </h2>
          <p className="text-lg text-[#A89080] leading-relaxed mb-12 max-w-2xl mx-auto">
            1960년부터 시작된 우리의 이야기. 할머니에서 어머니로, 어머니에서 저에게로
            이어져 온 레시피와 정성. 변하지 않는 맛으로 여러분의 식탁을 함께합니다.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-[#C4A484] mb-2">60+</p>
              <p className="text-[#A89080]">년의 전통</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#C4A484] mb-2">100+</p>
              <p className="text-[#A89080]">레시피</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#C4A484] mb-2">50K+</p>
              <p className="text-[#A89080]">만족한 고객</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items - Circular Images */}
      <section id="menu" className="py-20 px-6 bg-[#FDF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#8B5A2B] font-medium mb-2">MENU</p>
            <h2 className="text-3xl md:text-4xl font-bold">오늘의 메뉴</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {recipes.slice(0, 5).map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white group-hover:border-[#8B5A2B] transition-colors mb-4 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-[#8B5A2B] font-medium">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-[#8B5A2B] to-[#6D4522] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            맛있는 레시피를<br />받아보세요
          </h2>
          <p className="text-lg text-[#E8D5C4] mb-8">
            매주 새로운 레시피와 요리 팁을 이메일로 보내드립니다.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-6 py-4 rounded-full text-[#3D3D3D] outline-none focus:ring-4 ring-white/30"
            />
            <button className="bg-white text-[#8B5A2B] px-8 py-4 rounded-full font-bold hover:bg-[#FDF8F3] transition-colors shadow-lg">
              구독하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#2C1810] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#C4A484] mb-4">자연의맛</h3>
              <p className="text-[#A89080] text-sm leading-relaxed">
                신선한 재료와 전통 레시피로<br />건강한 한식을 전합니다.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">메뉴</h4>
              <ul className="space-y-2 text-[#A89080] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">레시피</a></li>
                <li><a href="#" className="hover:text-white transition-colors">재료 소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">요리 팁</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">회사</h4>
              <ul className="space-y-2 text-[#A89080] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">연락처</a></li>
                <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">SNS</h4>
              <div className="flex gap-4 items-center">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/instagram-icon.png" alt="Instagram" width={32} height={32} className="rounded-lg" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/ch-icon.png" alt="Ch" width={32} height={32} className="rounded-lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#4A3428] pt-8 text-center text-[#A89080] text-sm">
            <p>© 2026 자연의맛. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
