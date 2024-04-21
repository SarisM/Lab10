fetch("https://api.escuelajs.co/api/v1/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const container = document.getElementById("box-galery");
    data.forEach((item) => {
      if (
        item.images &&
        item.images.length > 0 &&
        typeof item.images[0] === "string" &&
        item.images[0].startsWith("https")
      ) {
        const boxImage = document.createElement("div");
        boxImage.classList.add("box-img");
        const img = document.createElement("img");
        img.classList.add("tipos-decafe");
        img.src = item.images[0];
        const a = document.createElement("a");
        a.classList.add("btn-img");
        a.href = "#";
        a.textContent = item.title;
        boxImage.appendChild(img);
        container.appendChild(boxImage);
        container.appendChild(a);
      }
    });
  })
  .catch((error) => {
    throw new Error(error);
  });
