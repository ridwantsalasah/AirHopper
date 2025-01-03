export const getTickets = async (page, limit, continent) => {
  let params = {};
  if (page) {
    params.page = page;
  }
  if (limit) {
    params.limit = limit;
  }
  if (continent) {
    params["search[continent]"] = continent;
  }

  let url =
    `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}/tickets?` +
    new URLSearchParams(params);

  const response = await fetch(url, {
    method: "GET",
  });

  // get data
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }
  return result;
};

// get cities
export const getCities = async () => {
  let url = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}/cities`;

  const response = await fetch(url, {
    method: "GET",
  });

  // get data
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }
  return result?.data;
};

// get detail tickets data
export const getDetailTickets = async (id) => {
  let url = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}/tickets/${id}`;
  const response = await fetch(url, {
    method: "GET",
  });
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }
  return result;
};

export const getDiscounts = async () => {
  let url = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}/discounts`;

  const response = await fetch(url, {
    method: "GET",
  });

  // get data
  const result = await response.json();

  if (!result?.success) {
    throw new Error(result?.message);
  }
  return result?.data;
};
