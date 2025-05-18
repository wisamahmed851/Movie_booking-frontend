import { Base_url } from "./config";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${Base_url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};
