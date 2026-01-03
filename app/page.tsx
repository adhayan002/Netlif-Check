export const metadata = {
  title: "Discover Our Products | Appscrip",
  description:
  "Explore a curated collection of premium products with customizable filters and recommendations.",
};

import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export const dynamic = "force-static";
export default async function HomePage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });
  if(!res.ok){
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      {/* PLP */}
      <section className="plp-container">
        <div className="plp-header">
          <div className="plp-left">
            <span>{products.length} ITEMS</span>
            <span className="hide-filter">HIDE FILTER</span>
          </div>

          <div className="sort-wrapper">
            <button className="sort-trigger">
              RECOMMENDED <span>⌄</span>
            </button>

            <ul className="sort-menu">
              <li className="active">✓ RECOMMENDED</li>
              <li>NEWEST FIRST</li>
              <li>POPULAR</li>
              <li>PRICE : HIGH TO LOW</li>
              <li>PRICE : LOW TO HIGH</li>
            </ul>
          </div>
        </div>

        <div className="plp-content">
          <Filters />

          <div className="products-grid">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
