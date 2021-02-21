module.exports = () => {
  const moment = require("moment");

  let deliveryTimes = [];

  for (let i = 1; i < 13; i++) {
    const now = moment();
    deliveryTimes.push(
      moment(now)
        .add(15 - (now.minute() % 15), "minutes")
        .add(i * 15, "minutes")
        .format("HH:mm")
    );
  }

  return {
    address: {
      street: "St John 21/52",
      city: "Carcow",
      contry: "Poland",
    },
    phone: "+48 432 543 666",
    email: "hello@example.com",
    currency: "USD",
    currencySymbol: "$",
    deliveryAreas: [
      {
        zipCode: "30-002",
        city: "Carcow - Old Town",
        deliveryCost: 9,
      },
      {
        zipCode: "30-007",
        city: "Carcow - Center",
        deliveryCost: 5.5,
      },
    ],
    deliveryTimeOptions: deliveryTimes,
    isOpen: true,
    minimumCartValue: 20,
    openHours: [
      {
        days: [0],
        openHour: "12:00",
        closeHour: "22:00",
      },
      {
        days: [1, 2, 3, 4, 5],
        openHour: "8:00",
        closeHour: "20:00",
      },
      {
        days: [6],
        openHour: "12:00",
        closeHour: "24:00",
      },
    ],
    socialMedia: [
      {
        type: "facebook",
        url: "http://facebook.com/GrupoWanderlustMadrid",
      },
      // {
      //   type: 'google',
      //   url: '#'
      // },
      // {
      //   type: 'twitter',
      //   url: '#'
      // },
      {
        type: "instagram",
        url: "http://instagram.com/wanderlustmadrid",
      },
      // {
      //   type: 'linkedin',
      //   url: '#'
      // }
    ],
    menuDefaultView: "/menu-list-navigation",
    navigation: [
      {
        name: "¿Quiénes somos?",
        path: "#about",
        // children: [
        //   // {
        //   //   name: 'Home Basic',
        //   //   path: '/index?theme=1'
        //   // },
        //   // {
        //   //   name: 'Home Video',
        //   //   path: '/index-video?theme=2'
        //   // },
        //   // {
        //   //   name: 'Home Slider',
        //   //   path: '/index-slider?theme=3'
        //   // },
        //   {
        //     name: 'Home Burgers',
        //     path: '/index-burgers'
        //   }
        // ]
      },
      {
        name: "Restaurantes",
        path: "#restaurante",
        // children: [
        //   {
        //     name: 'About',
        //     path: '/about'
        //   },
        //   {
        //     name: 'Services',
        //     path: '/services'
        //   },
        //   {
        //     name: 'Gallery',
        //     path: '/gallery'
        //   },
        //   {
        //     name: 'Reviews',
        //     path: '/reviews'
        //   }
        // ]
      },
      {
        name: "Carta",
        path: "#menu",
        // children: [
        //   {
        //     name: 'List',
        //     path: '#',
        //     children: [
        //       {
        //         name: 'Navigation',
        //         path: '/menu-list-navigation'
        //       },
        //       {
        //         name: 'Collapse',
        //         path: '/menu-list-collapse'
        //       }
        //     ]
        //   },
        //   {
        //     name: 'Grid',
        //     path: null,
        //     children: [
        //       {
        //         name: 'Navigation',
        //         path: '/menu-grid-navigation'
        //       },
        //       {
        //         name: 'Collapse',
        //         path: '/menu-grid-collapse'
        //       }
        //     ]
        //   }
        // ]
      },
      // {
      //   name: 'Offers',
      //   path: '/offers'
      // },
      {
        name: "Contacto",
        path: "#contacto",
      },
      // {
      //   name: 'Other',
      //   path: null,
      //   dropdownImage: {
      //     title: 'Image Title',
      //     url: 'https://assets.suelo.pl/soup/img/photos/dropdown-more.jpg'
      //   },
      //   children: [
      //     {
      //       name: 'FAQ',
      //       path: '/faq'
      //     },
      //     {
      //       name: 'Blog',
      //       path: '/blog'
      //     },
      //     {
      //       name: 'Terms & Conditions',
      //       path: '/terms'
      //     },
      //     {
      //       name: 'Documentation',
      //       path: '/docs/',
      //       target: '_blank'
      //     }
      //   ]
      // }
    ],
    name: "Wanderlust",
    meta: {
      title: "Wanderlust - Cerveceria",
      shortTitle: "Wanderlust",
      description:
        "Nuestra pasión por viajar y la cerveza nos llevó abrir nuestro primer local en Madrid. Nuestra variedad de cerveza de grifo de diferentes países, sin olvidar una carta de comida estilo mediterráneo con múltiples opciones.",
      keywords: "Cerveza, Restaurante, Wanderlust, Madrid, Amigos, Tomar",
    },
  };
};
