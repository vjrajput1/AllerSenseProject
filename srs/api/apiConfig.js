const API_BASE_URL = "http://your-backend-url/api";

export const scanProduct = async (barcode) => {
  try {
    const response = await fetch(`${API_BASE_URL}/scan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ barcode }),
    });
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
