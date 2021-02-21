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
              "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/5wander.png?alt=media&token=7a2e197f-e0ea-4c34-8143-a0b4b6e19432",
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
          name: "Wanderlust Madrid Río",
          address: {
            street: "Avenida del Manzanares 210",
            city: "Madrid",
            contry: "España",
          },
          phone: "+34 918 26 80 64",
          email: "madridrio@wanderlust.com",
          lat: 40.3858569,
          lng: -3.6938187,
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
