export default function ProductCard({ product }: any) {
  return (
    <div className="product-card">
      <div className="image-box">
        <img src={product.image} alt={product.title} />
        {product.id % 4 === 0 && (
          <span className="badge">OUT OF STOCK</span>
        )}
      </div>

      <h3>PRODUCT NAME</h3>

      <div className="product-meta">
        <span>Sign in or Create an account to see pricing</span>
        <span className="wishlist">♡</span>
      </div>
    </div>
  );
}
