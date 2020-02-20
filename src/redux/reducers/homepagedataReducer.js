const INITIAL_STATE = {
  homepageData: [
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80",
      id: 1,
      linkUrl: ""
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=80",
      id: 2,
      linkUrl: ""
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      id: 3,
      linkUrl: ""
    },
    {
      title: "women",
      imageUrl:
        "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&auto=format&fit=crop&w=951&q=80",
      size: "large",
      id: 4,
      linkUrl: ""
    },
    {
      title: "men",
      imageUrl:
        "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      size: "large",
      id: 5,
      linkUrl: ""
    }
  ]
};


export const homepagedataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
