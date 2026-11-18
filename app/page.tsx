
export default function Home() {
  const categories = [
    "Elektronik",
    "Moda",
    "Ev & Yaşam",
    "Anne & Bebek",
    "Kozmetik",
    "Spor",
    "Market",
    "Ayakkabı",
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#142b45]">
      <div className="bg-[#102c49] px-4 py-2 text-center text-sm text-white">
        SHOPIGO | Türkiye'nin yeni nesil alışveriş platformu
      </div>

      <header className="bg-white px-5 py-5 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-black tracking-tight text-[#102c49]">
            SHOPI<span className="text-teal-500">GO.</span>
          </h1>
          <div className="flex gap-3 text-sm">
            <button className="rounded-xl border px-4 py-3">
              Giriş Yap
            </button>
            <button className="rounded-xl bg-[#102c49] px-4 py-3 text-white">
              Üye Ol
            </button>
          </div>
        </div>
      </header>

      <nav className="border-b bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-6 text-sm font-semibold">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#102c49] to-[#087e86] p-8 text-white md:p-16">
          <p className="mb-4 font-semibold tracking-widest text-teal-200">
            YENİ NESİL ALIŞVERİŞ
          </p>
          <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
            Aradığın her şey, Shopigo'da.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-blue-100">
            Binlerce ürün, güvenilir mağazalar ve avantajlı alışveriş.
          </p>
          <button className="mt-8 rounded-xl bg-white px-7 py-4 font-bold text-[#102c49]">
            Alışverişe Başla
          </button>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-black">
          Popüler Kategoriler
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-3 text-3xl">
                {["📱", "👕", "🏠", "🍼", "💄", "⚽", "🛒", "👟"][index]}
              </div>
              <p className="font-bold">{category}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-black">Shopigo'ya Katıl!</h2>
          <p className="mt-3 text-slate-500">
            Mağazanı aç, ürünlerini Türkiye'nin her yerine ulaştır.
          </p>
          <button className="mt-6 rounded-xl bg-teal-600 px-8 py-4 font-bold text-white">
            Satıcı Ol
          </button>
        </div>
      </section>

      <footer className="bg-[#102c49] px-5 py-10 text-center text-white">
        <h2 className="text-2xl font-black">
          SHOPI<span className="text-teal-400">GO.</span>
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          © 2026 Shopigo. Tüm hakları saklıdır.
        </p>
      </footer>
    </main>
  );
}
