import { localProducts } from "./products";

const API = "/api";

export async function getProducts() {
  try {
    const res = await fetch(`${API}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (e) {
    console.warn("Backend unavailable. Falling back to local catalog.", e);
    return localProducts;
  }
}

export async function getProduct(id: string | undefined) {
  try {
    const res = await fetch(`${API}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return await res.json();
  } catch (e) {
    console.warn(`Backend unavailable. Finding product ${id} locally.`, e);
    const found = localProducts.find((p) => p.id === id);
    if (!found) throw new Error("Product not found");
    return found;
  }
}

export async function createOrder(data: any) {
  try {
    const res = await fetch(`${API}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create order");
    return await res.json();
  } catch (e) {
    console.warn("Backend unavailable. Simulating order storage locally.", e);
    return {
      id: "ORDER-" + Math.floor(Math.random() * 900000 + 100000),
      ...data,
      status: "confirmed",
      createdAt: new Date().toISOString()
    };
  }
}
