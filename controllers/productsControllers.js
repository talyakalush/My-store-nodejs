import axios from "axios";

const API_KEY = "25540812-faf2b76d586c1787d2dd02736";
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=`;

async function getAllProductsController(req, res) {
  const { page = 1, category = "" } = req.query;
  const perPage = 9;

  try {
    const response = await axios.get(
      `${BASE_URL}${encodeURIComponent(category)}`,
      {
        params: {
          page,
          per_page: perPage,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Pixabay:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
}

async function getImageByIdController(req, res) {
  const { id } = req.params;

  try {
    const response = await axios.get(`${BASE_URL}&id=${id}`);

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching image by id:", error);
    res.status(500).json({ message: "Error fetching image" });
  }
}

async function fetchDataController(req, res) {
  const { sortField = "id" } = req.params;
  const { category = "" } = req.query;

  try {
    const response = await axios.get(
      `${BASE_URL}${encodeURIComponent(category)}`
    );

    if (response.data.hits && Array.isArray(response.data.hits)) {
      const sortedImages = response.data.hits.sort(
        (a, b) => a[sortField] - b[sortField]
      );
      res.json(sortedImages);
    } else {
      res
        .status(500)
        .json({ message: "Data is not in expected format or empty" });
    }
  } catch (error) {
    console.error("Error fetching and sorting images:", error);
    res.status(500).json({ message: "Error fetching and sorting images" });
  }
}

async function fetchDataLikesController(req, res) {
  const { sortField = "likes" } = req.params;

  const { page = 1, category = "" } = req.query;
  const perPage = 9;

  try {
    const response = await axios.get(
      `${BASE_URL}${encodeURIComponent(category)}`,
      {
        params: {
          page,
          per_page: perPage,
        },
      }
    );

    if (response.data.hits && Array.isArray(response.data.hits)) {
      const sortedImages = response.data.hits.sort(
        (a, b) => a[sortField] - b[sortField]
      );
      res.json(sortedImages);
    } else {
      res
        .status(500)
        .json({ message: "Data is not in expected format or empty" });
    }
  } catch (error) {
    console.error("Error fetching and sorting images:", error);
    res.status(500).json({ message: "Error fetching and sorting images" });
  }
}

export {
  getAllProductsController,
  getImageByIdController,
  fetchDataController,
  fetchDataLikesController,
};
