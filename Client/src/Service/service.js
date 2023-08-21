export const verify = async () => {
  let token = JSON.parse(localStorage.getItem("userToken"));

  if (!token) {
    return {
        Error: true,
        Data: null,
    }
  }
  const response = await fetch("http://localhost:3000/auth/verifyRole", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.Token}`,
    },
  });

  if (response.status !== 200) {
    return {
        Error: true,
        Data: null,
    }
  }
  
  const userData = await response.json();
  return {
    Error: false,
    Data: userData,
  }
};
