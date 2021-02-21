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
              "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/4wander.png?alt=media&token=2244a3e2-cfd8-46e3-a400-75fb9806238d",
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
          name: "Wanderlust X Madrid",
          address: {
            street: "Calle Oslo 53",
            city: "Alcorcón",
            contry: "España",
          },
          phone: "+34 91 907 16 80",
          email: "xmadrid@wanderlust.com",
          lat: 40.3421154,
          lng: -3.8469779,
          openHours: [
            {
              days: [1, 2, 3, 4],
              openHour: "11:00",
              closeHour: "01:00",
            },
            {
              days: [5, 6, 0],
              openHour: "11:00",
              closeHour: "02:00",
            },
          ],
        },
        reverse: false,
      },
    },
  ],
};
