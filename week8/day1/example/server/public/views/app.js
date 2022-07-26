const button = document.getElementById("button");

const createRestaurant = async () => {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const reviewScore = document.getElementById("review").value;
  const restaurantCreate = {
    name,
    address,
    reviewScore,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const send = await fetch(
    "http://localhost:3001/restaurants/create_restaurant",
    {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(restaurantCreate),
    }
  );
  const json = await send.json();
};
button.onclick = createRestaurant;