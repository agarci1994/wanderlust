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
              "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/1wander.png?alt=media&token=ec45cbf2-9777-4e94-83b1-845762c3f2e4",
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
      name: "Double",
      props: {
        content: {
          first: "Nuestros restaurantes",
          title: "X Madrid",
          description: "Texto para breve descripción de wander X Madrid",
          link: {
            title: "Ver ubicación",
            slug: "/restaurante?a=xmadrid",
          },
        },
        image: {
          title: "Image Title",
          url:
            "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/4wander.png?alt=media&token=2244a3e2-cfd8-46e3-a400-75fb9806238d",
        },
        reverse: false,
      },
    },
    {
      name: "Double",
      props: {
        content: {
          title: "Parquesur",
          description:
            "Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam molestie tincidunt nec vitae diam.",
          link: {
            title: "Ver ubicación",
            slug: "/restaurante?a=parquesur",
          },
        },
        image: {
          title: "Image Title",
          url:
            "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/nueva.png?alt=media&token=7c977584-a50a-4120-a767-cbd428599795",
        },
        reverse: true,
      },
    },
    {
      name: "Double",
      props: {
        content: {
          title: "Madrid Río",
          description:
            "Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam molestie tincidunt nec vitae diam.",
          link: {
            title: "Ver ubicación",
            slug: "/restaurante?a=madridrio",
          },
        },
        image: {
          title: "Image Title",
          url:
            "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/5wander.png?alt=media&token=7a2e197f-e0ea-4c34-8143-a0b4b6e19432",
        },
        reverse: false,
      },
    },
    {
      name: "Double",
      props: {
        content: {
          title: "La Gavia",
          description:
            "Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam molestie tincidunt nec vitae diam.",
          link: {
            title: "Ver ubicación",
            slug: "/restaurante?a=lagavia",
          },
        },
        image: {
          title: "Image Title",
          url:
            "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/2wander.png?alt=media&token=76ac1953-fc04-4e91-a6c6-da420c5c9d3e",
        },
        reverse: true,
      },
    },
    {
      name: "Double",
      props: {
        content: {
          title: "Santo Domingo",
          description:
            "Praesent scelerisque mi ac bibendum tristique. Cras in magna a quam molestie tincidunt nec vitae diam.",
          link: {
            title: "Ver ubicación",
            slug: "/restaurante?a=santodomingo",
          },
        },
        image: {
          title: "Image Title",
          url:
            "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/santodomingo.png?alt=media&token=224a4982-1feb-4934-b28f-58117e99613c",
        },
        reverse: false,
      },
    },
    {
      name: "Menu",
      props: {
        title: "Nuestra carta",
        // categories: [1, 2, 3]
      },
    },
    {
      name: "ImageEdge",
      props: {
        content: {
          // rate: 4,
          title: "¿Quiénes somos?",
          description:
            "Nuestra pasión por viajar y la cerveza nos llevó en 2017 a abrir nuestro primer local en Madrid. Una experiencia totalmente nueva y diferenciada, un lugar innovador y divertido donde creamos experiencias a través de nuestra variedad de cerveza de grifo de diferentes países, sin olvidar una carta de comida estilo mediterráneo con múltiples opciones.",

          description2:
            "Wanderlust cautiva con su ambientación industrial y moderna simulando una fábrica de cerveza, un entorno que te lleva a viajar y conocer otros lugares.Seguimos creciendo con la misma filosofía: la cerveza y viajar siempre son sinónimos de felicidad.",
          // features: [
          //   {
          //     icon: 'desktop',
          //     title: 'Online Order',
          //     description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.'
          //   },
          //   {
          //     icon: 'heart',
          //     title: 'Perfect Taste',
          //     description: 'Vivamus volutpat leo dictum risus ullamcorper condimentum.'
          //   }
          // ]
        },
        image: {
          title: "Image",
          url:
            "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/image.png?alt=media&token=0d27acfe-a9e7-48b5-aaa1-299aaead624c",
        },
        reverse: false,
      },
    },
    {
      name: "Cta",
      props: {
        theme: "dark",
        bg: "dark",
        image: {
          title: "Video promocional Wanderlust",
          url:
            "https://firebasestorage.googleapis.com/v0/b/waterlust-349d4.appspot.com/o/croquetas.png?alt=media&token=14f06346-bb6a-41bc-a561-4491bbd1e0ba",
        },
        // title: 'Check our promo video!',
        // tagline: 'Book a table even right now or make an online order!',
        modalVideo: "https://www.youtube.com/embed/erlDtiBh3OI",
        // link: {
        //   title: 'Order now!',
        //   slug: '/menu-list-collapse'
        // }
      },
    },
  ],
  settings: {
    headerTransparent: true,
    hideHeaderLogo: false,
  },
};
