export default function () {
  const baseUrl = "https://api.ukrainehilfe-unna.de/items/";

  async function getDonations() {
    const res = await fetch(baseUrl + "spenden");
    const data = await res.json();
    return data.data.spendenstand;
  }

  async function getFeaturedEvent() {
    const res = await fetch(baseUrl + "Aktuelle_Aktion");
    const data = await res.json();

    return data.data;
  }

  async function getPostByTag(tag) {
    const res = await fetch(baseUrl + "aktuelles");
    const data = await res.json();

    return data.data.filter((article) => article.tags.includes(tag));
  }

  async function getPostById(id) {
    const res = await fetch(baseUrl + "articles/" + id);
    const data = await res.json();

    return data.data;
  }

  async function getAllPosts() {
    const res = await fetch(baseUrl + "articles");
    const data = await res.json();

    return data.data;
  }

  return {
    getDonations,
    getFeaturedEvent,
    getPostByTag,
    getPostById,
    getAllPosts,
  };
}
