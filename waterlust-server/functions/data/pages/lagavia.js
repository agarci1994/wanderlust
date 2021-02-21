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
              "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/2wander.png?alt=media&token=76ac1953-fc04-4e91-a6c6-da420c5c9d3e",
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
          name: "Wanderlust La Gavia",
          address: {
            street: "Calle Adolfo Bioy Casares 2",
            city: "Madrid",
            contry: "España",
          },
          phone: "+34 674 36 28 86",
          email: "lagavia@wanderlust.com",
          lat: 40.3681599,
          lng: -3.59755355607975,
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
