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
              "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/nueva.png?alt=media&token=7c977584-a50a-4120-a767-cbd428599795",
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
          name: "Wanderlust Parquesur",
          address: {
            street: "Avenida Gran Bretaña S/N",
            city: "Madrid",
            contry: "España",
          },
          phone: "+34 914 49 85 57",
          email: "parquesur@wanderlust.com",
          lat: 40.3376952,
          lng: -3.7371533,
          openHours: [
            {
              days: [1, 2, 3],
              openHour: "12:00",
              closeHour: "00:00",
            },
            {
              days: [4],
              openHour: "12:00",
              closeHour: "01:00",
            },
            {
              days: [5, 6],
              openHour: "12:00",
              closeHour: "1:30",
            },
            {
              days: [0],
              openHour: "12:00",
              closeHour: "00:00",
            },
          ],
        },
        reverse: false,
      },
    },
  ],
};
