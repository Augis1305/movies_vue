let storage = {
  apiKey: "a80f05423b30ed9d18d929aa01fc2a03",
  sessionID: localStorage.getItem("session_id") || null,
  userID: localStorage.getItem("user_id") || null,
  pageTitlePostfix: " - " + document.title,
  listTypes: [
    {
      title: "Popular Movies",
      shortTitle: "Popular",
      query: "popular",
      type: "collection",
      isCategory: true
    }
  ],

  categories: {},
  backTitle: ""
};

storage.listTypes.forEach(function(listType) {
  storage.categories[listType.query] = listType.title;
});

export default storage;
