import { Link, Route, Routes } from "react-router-dom";

const Page = ({ title }: { title: string }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-sm opacity-80">Placeholder page.</p>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <nav className="flex gap-4 p-4 border-b">
        <Link to="/" className="underline">
          Home
        </Link>
        <Link to="/catalog" className="underline">
          Catalog
        </Link>
        <Link to="/cart" className="underline">
          Cart
        </Link>
        <Link to="/checkout" className="underline">
          Checkout
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/catalog" element={<Page title="Catalog" />} />
        <Route path="/product/:id" element={<Page title="Product" />} />
        <Route path="/cart" element={<Page title="Cart" />} />
        <Route path="/checkout" element={<Page title="Checkout" />} />
      </Routes>
    </div>
  );
};
