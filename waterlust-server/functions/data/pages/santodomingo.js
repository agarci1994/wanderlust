module.exports = {
  pageTitle: null,
  sections: [
    {
      name: "HeroSimple",
      props: {
        media: {
          type: "image",
          source: {
            title: "Photo",
            url:
              "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/santodomingo.png?alt=media&token=224a4982-1feb-4934-b28f-58117e99613c",
          },
        },
        title: " ",
        // tagline: 'and use it with your next order!',
        // link: {
        //   title: 'Check our menu',
        //   slug: '/menu-list-navigation'
        // }
      },
    },
    {
      name: "Location",
      props: {
        location: {
          name: "Wanderlust Santo Domingo",
          address: {
            street: "Calle de Silva, 2",
            city: "Madrid",
            contry: "España",
          },
          phone: "+34 910 57 28 22",
          email: "santodomingo@wanderlust.com",
          lat: 40.4205398,
          lng: -3.7079866,
          openHours: [
            {
              days: [1, 2, 3, 4],
              openHour: "10:00",
              closeHour: "00:00",
            },
            {
              days: [5, 6],
              openHour: "10:00",
              closeHour: "01:00",
            },
            {
              days: [0],
              openHour: "10:00",
              closeHour: "00:00",
            },
          ],
        },
        reverse: false,
      },
    },
  ],
};
