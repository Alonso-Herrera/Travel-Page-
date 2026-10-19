"use strict";

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Reveals page sections when they enter the viewport while respecting the
// reduced-motion preference and older browsers without IntersectionObserver.
function initializeRevealAnimations() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (revealElements.length === 0) return;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

initializeRevealAnimations();

// Shared destination content keeps the carousel and destination stories aligned.
const countries = [
  {
    id: "japan",
    name: "Japón",
    description:
      "Una calle iluminada al anochecer, el silencio de un santuario y montañas que aparecen entre las nubes. Japón siempre tiene otro paisaje que descubrir.",
    cultureTitle: "Tradición en cada gesto",
    cultureCopy:
      "En Kioto, los rituales, la arquitectura y las celebraciones de barrio conviven con la vida contemporánea. Estas escenas muestran una cultura que encuentra significado en la hospitalidad, el cuidado de los detalles y el paso de las estaciones.",
    cultureCards: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Tea_ceremony_in_Kyoto.jpg/960px-Tea_ceremony_in_Kyoto.jpg",
        alt: "Preparación de una ceremonia del té en Kioto",
        title: "La ceremonia del té",
        text: "El chanoyu transforma la preparación y el servicio del té en un acto de hospitalidad. La calma, los utensilios y cada gesto invitan a prestar atención al momento compartido.",
        attribution: {
          artist: "Olivier Lejade",
          source: "https://commons.wikimedia.org/wiki/File:Tea_ceremony_in_Kyoto.jpg",
          license: "CC BY-SA 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Gion-matsuri_in_Kyoto%3B_July_2010_%2804%29.jpg/960px-Gion-matsuri_in_Kyoto%3B_July_2010_%2804%29.jpg",
        alt: "Celebración del festival Gion Matsuri en Kioto",
        title: "Gion Matsuri",
        text: "Cada verano, el festival reúne procesiones, carrozas y vecindarios enteros. Es una celebración que conserva vínculos comunitarios y una tradición con siglos de historia.",
        attribution: {
          artist: "nekonomania",
          source: "https://commons.wikimedia.org/wiki/File:Gion-matsuri_in_Kyoto;_July_2010_(04).jpg",
          license: "CC BY 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Gion_street_%28house%29.jpg/960px-Gion_street_%28house%29.jpg",
        alt: "Casa machiya tradicional en una calle del barrio Gion",
        title: "Las casas machiya",
        text: "Las casas de madera de Gion recuerdan la historia comercial de Kioto. Sus fachadas estrechas y celosías forman parte de un paisaje urbano donde tradición y vida diaria se encuentran.",
        attribution: {
          artist: "Ari Helminen",
          source: "https://commons.wikimedia.org/wiki/File:Gion_street_(house).jpg",
          license: "CC BY 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
        }
      }
    ],
    landscapes: [
      {
        src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2200&q=90",
        alt: "Calle histórica de Kyoto, Japón, al caer la tarde",
        caption: "Calles de Kyoto"
      },
      {
        src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1300&q=88",
        alt: "Monte Fuji en el paisaje de Japón",
        caption: "A los pies del Fuji"
      },
      {
        src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1300&q=88",
        alt: "Santuario y arquitectura tradicional japonesa",
        caption: "Un camino entre santuarios"
      }
    ]
  },
  {
    id: "norway",
    name: "Noruega",
    description:
      "Picos que se alzan sobre el mar, pequeños pueblos junto al fiordo y nubes que envuelven las montañas. Noruega invita a seguir la luz.",
    cultureTitle: "Una cultura junto al mar",
    cultureCopy:
      "En las islas Lofoten, el mar ha dado forma a la economía, la arquitectura y las costumbres locales. La pesca, los pueblos costeros y la vida al aire libre forman parte de una identidad profundamente conectada con el paisaje.",
    cultureCards: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Rorbu_from_Kuholmen_in_Skrova_in_Lofoten_now_at_Bod%C3%B8sj%C3%B8en_friluftsmuseum.jpg/960px-Rorbu_from_Kuholmen_in_Skrova_in_Lofoten_now_at_Bod%C3%B8sj%C3%B8en_friluftsmuseum.jpg",
        alt: "Rorbu, cabaña de pescadores tradicional de las islas Lofoten",
        title: "Las rorbuer",
        text: "Estas cabañas rojas servían de alojamiento estacional a quienes salían a pescar. Su presencia en los puertos recuerda cómo las comunidades se organizaron alrededor del trabajo en el mar.",
        attribution: {
          artist: "Frankemann",
          source: "https://commons.wikimedia.org/wiki/File:Rorbu_from_Kuholmen_in_Skrova_in_Lofoten_now_at_Bod%C3%B8sj%C3%B8en_friluftsmuseum.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Codfish_Drying_Flake%2C_%C3%85_i_Lofoten_20150608_1.jpg/960px-Codfish_Drying_Flake%2C_%C3%85_i_Lofoten_20150608_1.jpg",
        alt: "Cabezas de bacalao secándose en bastidores de madera en Lofoten",
        title: "El bacalao de Lofoten",
        text: "El secado del bacalao al aire frío es una práctica tradicional de conservación y una actividad que ha conectado a las islas con otras regiones durante generaciones.",
        attribution: {
          artist: "DXR",
          source: "https://commons.wikimedia.org/wiki/File:Codfish_Drying_Flake,_%C3%85_i_Lofoten_20150608_1.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/A_Late_evening_view_to_Austnesfjorden_at_Sildpollnes_Church%2C_Austv%C3%A5g%C3%B8ya%2C_Lofoten%2C_Norway%2C_2015_April.jpg/960px-A_Late_evening_view_to_Austnesfjorden_at_Sildpollnes_Church%2C_Austv%C3%A5g%C3%B8ya%2C_Lofoten%2C_Norway%2C_2015_April.jpg",
        alt: "Iglesia junto al fiordo de Austnesfjorden, rodeada de montañas en Lofoten",
        title: "Friluftsliv",
        text: "La palabra describe el valor cultural de pasar tiempo al aire libre. Caminar por senderos y costas no es solo recreación: es una forma cotidiana de relacionarse con la naturaleza.",
        attribution: {
          artist: "Ximonic (Simo Räsänen)",
          source:
            "https://commons.wikimedia.org/wiki/File:A_Late_evening_view_to_Austnesfjorden_at_Sildpollnes_Church,_Austv%C3%A5g%C3%B8ya,_Lofoten,_Norway,_2015_April.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        }
      }
    ],
    landscapes: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/A_Late_evening_view_to_Austnesfjorden_at_Sildpollnes_Church%2C_Austv%C3%A5g%C3%B8ya%2C_Lofoten%2C_Norway%2C_2015_April.jpg/1920px-A_Late_evening_view_to_Austnesfjorden_at_Sildpollnes_Church%2C_Austv%C3%A5g%C3%B8ya%2C_Lofoten%2C_Norway%2C_2015_April.jpg",
        alt: "Fiordo, iglesia y montañas nevadas en Austnesfjorden, Lofoten",
        caption: "Fiordos de Lofoten",
        attribution: {
          artist: "Ximonic (Simo Räsänen)",
          source:
            "https://commons.wikimedia.org/wiki/File:A_Late_evening_view_to_Austnesfjorden_at_Sildpollnes_Church,_Austv%C3%A5g%C3%B8ya,_Lofoten,_Norway,_2015_April.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Winter_landscape_on_Lofoten%2C_Norway.jpg/1920px-Winter_landscape_on_Lofoten%2C_Norway.jpg",
        alt: "Montañas nevadas y mar en el paisaje invernal de Lofoten, Noruega",
        caption: "Invierno en Lofoten",
        attribution: {
          artist: "Christoph Strässler",
          source:
            "https://commons.wikimedia.org/wiki/File:Winter_landscape_on_Lofoten,_Norway.jpg",
          license: "CC BY-SA 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/View_to_Austnesfjorden_from_St%C3%B8velhaugen_in_a_cloudy_morning%2C_Austv%C3%A5g%C3%B8ya%2C_Lofoten%2C_Norway%2C_2015_April.jpg/1920px-View_to_Austnesfjorden_from_St%C3%B8velhaugen_in_a_cloudy_morning%2C_Austv%C3%A5g%C3%B8ya%2C_Lofoten%2C_Norway%2C_2015_April.jpg",
        alt: "Vista de Austnesfjorden entre nubes, en las islas Lofoten de Noruega",
        caption: "Austnesfjorden entre nubes",
        attribution: {
          artist: "Ximonic (Simo Räsänen)",
          source:
            "https://commons.wikimedia.org/wiki/File:View_to_Austnesfjorden_from_St%C3%B8velhaugen_in_a_cloudy_morning,_Austv%C3%A5g%C3%B8ya,_Lofoten,_Norway,_2015_April.jpg",
          license: "CC BY-SA 3.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
        }
      }
    ]
  },
  {
    id: "colombia",
    name: "Colombia",
    description:
      "Palmas de cera que se elevan entre laderas verdes y nubes andinas. En el Valle de Cocora, Colombia se revela poco a poco y siempre con una nueva perspectiva.",
    cultureTitle: "Historias del paisaje cafetero",
    cultureCopy:
      "En el Eje Cafetero, las montañas y las fincas son también espacios de trabajo, memoria y encuentro. La cultura regional se expresa en el cultivo del café, la arquitectura rural y las tradiciones que las comunidades mantienen vivas.",
    cultureCards: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Coffee_farm_in_Colombia_%284604545436%29.jpg/960px-Coffee_farm_in_Colombia_%284604545436%29.jpg",
        alt: "Finca cafetera en las montañas de Colombia",
        title: "La finca cafetera",
        text: "El cultivo del café organiza buena parte de la vida rural en estas montañas. Las fincas familiares reúnen conocimiento agrícola, trabajo comunitario y generaciones de saber sobre la tierra.",
        attribution: {
          artist: "U.S. Fish and Wildlife Service - Northeast Region",
          source: "https://commons.wikimedia.org/wiki/File:Coffee_farm_in_Colombia_(4604545436).jpg",
          license: "Dominio público",
          licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Licensing"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Reserve_coffee_farm_in_Colombia_%284603938967%29.jpg/960px-Reserve_coffee_farm_in_Colombia_%284603938967%29.jpg",
        alt: "Cultivos de café y paisaje montañoso en una reserva colombiana",
        title: "Cultivo y biodiversidad",
        text: "Los cafetales conviven con bosques y corredores naturales. El manejo responsable de estos paisajes ayuda a proteger especies y fuentes de agua mientras sostiene la economía local.",
        attribution: {
          artist: "U.S. Fish and Wildlife Service - Northeast Region",
          source: "https://commons.wikimedia.org/wiki/File:Reserve_coffee_farm_in_Colombia_(4603938967).jpg",
          license: "Dominio público",
          licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Licensing"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Valle_de_Cocora%2C_Colombia_01.jpg/960px-Valle_de_Cocora%2C_Colombia_01.jpg",
        alt: "Palmas de cera altas entre las montañas del Valle de Cocora",
        title: "La palma de cera",
        text: "Árbol nacional de Colombia y emblema de los Andes, la palma de cera crece en el bosque de niebla. Su hábitat recuerda la importancia de conservar los ecosistemas de altura.",
        attribution: {
          artist: "Bernard Gagnon",
          source: "https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_01.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        }
      }
    ],
    landscapes: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Valle_de_Cocora%2C_Colombia_01.jpg/1920px-Valle_de_Cocora%2C_Colombia_01.jpg",
        alt: "Palmas de cera y montañas del Valle de Cocora, Colombia",
        caption: "Palmas de cera del Cocora",
        attribution: {
          artist: "Bernard Gagnon",
          source:
            "https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_01.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Valle_de_Cocora%2C_Colombia_02.jpg/1920px-Valle_de_Cocora%2C_Colombia_02.jpg",
        alt: "Montañas verdes y vegetación del Valle de Cocora, Colombia",
        caption: "Laderas del Valle de Cocora",
        attribution: {
          artist: "Bernard Gagnon",
          source:
            "https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_02.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        }
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Valle_de_Cocora%2C_Colombia_04.jpg/1920px-Valle_de_Cocora%2C_Colombia_04.jpg",
        alt: "Vista panorámica de las montañas y el Valle de Cocora, Colombia",
        caption: "Un horizonte entre montañas",
        attribution: {
          artist: "Bernard Gagnon",
          source:
            "https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_04.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        }
      }
    ]
  }
];

// Shared index helpers keep slide counters and circular navigation consistent.
const getLoopedIndex = (index, itemCount) =>
  ((index % itemCount) + itemCount) % itemCount;

// Landing-page carousel: arrows and destination cards update the featured
// country while preserving direct links to each country's detail page.
function initializeHomeCarousel() {
  const homeHero = document.querySelector(".hero-stage");
  if (!homeHero) return;

  const heroImages = [
    document.querySelector("#home-hero-image-a"),
    document.querySelector("#home-hero-image-b")
  ];
  const heroLink = document.querySelector("#home-hero-link");
  const heroCards = document.querySelectorAll("[data-home-destination]");
  const heroTrack = document.querySelector(".hero-destination-track");
  const heroCopy = document.querySelector(".hero-copy");
  const previousButton = document.querySelector("[data-home-prev]");
  const nextButton = document.querySelector("[data-home-next]");
  const slideButtons = document.querySelectorAll("[data-home-slide]");
  const heroTitle = document.querySelector("#hero-title");
  const heroDescription = document.querySelector("#home-hero-description");
  const heroActionLabel = document.querySelector("#home-hero-action-label");
  let activeHeroImage = 0;
  let activeCountryIndex = 0;
  let transitionToken = 0;
  let copyTransitionTimer;
  let arrivalTimer;

  heroCards.forEach((card) => {
    const country = countries.find(
      (item) => item.id === card.dataset.homeDestination
    );
    if (!country) return;

    const cardImage = card.querySelector(".hero-destination-image");
    const featuredLandscape = country.landscapes[0];
    cardImage.src = featuredLandscape.src;
    cardImage.alt = featuredLandscape.alt;
  });

  // Crossfade the landscape and move the destination cards into their new order.
  const updateHomeHero = (index, animate = true) => {
    const previousIndex = activeCountryIndex;
    activeCountryIndex = getLoopedIndex(index, countries.length);
    const country = countries[activeCountryIndex];
    activeHeroImage = 1 - activeHeroImage;
    const nextImage = heroImages[activeHeroImage];
    const landscape = country.landscapes[0];
    const requestToken = ++transitionToken;
    [...heroCards].forEach((card) => {
      card.getAnimations().forEach((animation) => animation.cancel());
    });
    const cardPositions = new Map(
      [...heroCards].map((card) => [card, card.getBoundingClientRect()])
    );

    if (animate) {
      window.clearTimeout(copyTransitionTimer);
      window.clearTimeout(arrivalTimer);
      heroCopy.classList.remove("is-arriving");
      heroCopy.classList.add("is-changing");
      copyTransitionTimer = window.setTimeout(() => {
        if (requestToken !== transitionToken) return;
        heroTitle.textContent = country.name;
        heroDescription.textContent = country.description;
        heroLink.href = `destino.html?pais=${country.id}`;
        heroLink.setAttribute("aria-label", `Explora ${country.name}`);
        heroActionLabel.textContent = `Explora ${country.name}`;
        heroCopy.classList.remove("is-changing");
        heroCopy.classList.add("is-arriving");
        arrivalTimer = window.setTimeout(() => {
          heroCopy.classList.remove("is-arriving");
        }, 1100);
      }, 260);
    } else {
      heroTitle.textContent = country.name;
      heroDescription.textContent = country.description;
      heroLink.href = `destino.html?pais=${country.id}`;
      heroLink.setAttribute("aria-label", `Explora ${country.name}`);
      heroActionLabel.textContent = `Explora ${country.name}`;
    }

    homeHero.style.setProperty(
      "--hero-pan-direction",
      String(index >= previousIndex ? 1 : -1)
    );
    nextImage.onload = () => {
      if (requestToken !== transitionToken) return;
      heroImages.forEach((image, imageIndex) => {
        image.classList.toggle("is-active", imageIndex === activeHeroImage);
      });
    };
    nextImage.onerror = () => {
      if (requestToken === transitionToken) {
        console.error(`No se pudo cargar el paisaje de ${country.name}.`);
      }
    };
    nextImage.src = landscape.src;
    nextImage.alt = landscape.alt;

    // Put the active destination first, followed by the remaining cards in a loop.
    heroCards.forEach((card, cardIndex) => {
      card.style.order = String(
        (cardIndex - activeCountryIndex + countries.length) %
          countries.length
      );
      card.classList.toggle("is-current", cardIndex === activeCountryIndex);
      if (cardIndex === activeCountryIndex) {
        card.setAttribute("aria-current", "true");
      } else {
        card.removeAttribute("aria-current");
      }
    });

    if (animate && !reducedMotion) {
      requestAnimationFrame(() => {
        heroCards.forEach((card) => {
          const start = cardPositions.get(card);
          const end = card.getBoundingClientRect();
          const offsetX = start.left - end.left;
          const offsetY = start.top - end.top;
          if (!offsetX && !offsetY) return;

          card.animate(
            [
              {
                translate: `${offsetX}px ${offsetY}px`,
                opacity: 0.68,
                filter: "blur(3px)"
              },
              { translate: "0 0", opacity: 1, filter: "blur(0)" }
            ],
            {
              duration: 1050,
              delay: Math.min(Math.abs(offsetX) / 7, 90),
              easing: "cubic-bezier(0.16, 1, 0.3, 1)"
            }
          );
        });
      });
    }

    slideButtons.forEach((button, buttonIndex) => {
      button.setAttribute(
        "aria-pressed",
        String(buttonIndex === activeCountryIndex)
      );
    });

    heroTrack.dataset.activeDestination = country.id;
  };

  previousButton.addEventListener("click", () => {
    updateHomeHero(activeCountryIndex - 1);
  });
  nextButton.addEventListener("click", () => {
    updateHomeHero(activeCountryIndex + 1);
  });
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      updateHomeHero(Number(button.dataset.homeSlide));
    });
  });

  updateHomeHero(0, false);
}

initializeHomeCarousel();

// Country detail page: populate the selected country, its gallery, credits,
// navigation links, and auto-advancing landscape carousel.
const destinationPage = document.querySelector("#country-page");

if (destinationPage) {
  const countryId = new URLSearchParams(window.location.search).get("pais");
  const countryIndex = countries.findIndex((country) => country.id === countryId);

  if (countryIndex === -1) {
    window.location.replace("index.html");
  } else {
    const country = countries[countryIndex];
    const hero = document.querySelector("#country-hero-media");
    const heroImages = [
      document.querySelector("#country-hero-image-a"),
      document.querySelector("#country-hero-image-b")
    ];
    let activeHeroImage = 0;
    let activeSlide = 0;
    let slideTransitionToken = 0;
    let carouselTimer;

    document.body.dataset.country = country.id;
    document.querySelector("#country-name").textContent = country.name;
    document.querySelector("#country-description").textContent =
      country.description;
    document.querySelector("#culture-title").textContent = country.cultureTitle;
    document.querySelector("#culture-copy").textContent = country.cultureCopy;
    const cultureCollage = document.querySelector("#culture-collage");
    country.cultureCards.forEach((card, index) => {
      const figure = document.createElement("figure");
      figure.className = `culture-card culture-card--${index + 1}`;

      const image = document.createElement("img");
      image.src = card.src;
      image.alt = card.alt;
      image.loading = "lazy";
      image.decoding = "async";

      const caption = document.createElement("figcaption");
      const title = document.createElement("h3");
      title.textContent = card.title;
      const text = document.createElement("p");
      text.textContent = card.text;

      caption.append(title, text);
      figure.append(image, caption);
      cultureCollage.append(figure);
    });

    const heroPhotoCredit = document.querySelector("#hero-photo-credit");
    const imageCredits = document.querySelector("#country-image-credits");

    const updateHeroCredit = (image) => {
      if (!image.attribution) {
        heroPhotoCredit.hidden = true;
        return;
      }

      heroPhotoCredit.hidden = false;
      heroPhotoCredit.href = image.attribution.source;
      heroPhotoCredit.textContent = `Foto: ${image.attribution.artist}`;
    };

    const renderImageCredits = () => {
      const creditedImages = [
        ...country.cultureCards,
        ...country.landscapes
      ].filter(
        (image, index, images) =>
          image.attribution &&
          images.findIndex(
            (candidate) => candidate.attribution?.source === image.attribution.source
          ) === index
      );
      imageCredits.hidden = creditedImages.length === 0;
      imageCredits.replaceChildren();

      if (creditedImages.length === 0) return;
      imageCredits.append(document.createTextNode("Fotografías: "));

      creditedImages.forEach((image, index) => {
        if (index > 0) imageCredits.append(document.createTextNode(" · "));

        const sourceLink = document.createElement("a");
        sourceLink.href = image.attribution.source;
        sourceLink.target = "_blank";
        sourceLink.rel = "noreferrer";
        sourceLink.textContent = `${image.caption || image.title} — ${image.attribution.artist}`;

        const licenseLink = document.createElement("a");
        licenseLink.href = image.attribution.licenseUrl;
        licenseLink.target = "_blank";
        licenseLink.rel = "noreferrer";
        licenseLink.textContent = image.attribution.license;

        imageCredits.append(
          sourceLink,
          document.createTextNode(" / "),
          licenseLink
        );
      });
    };

    // Keep the two gallery previews one and two places ahead of the hero image.
    const updateGalleryPreviews = (slideIndex) => {
      const firstPreview = country.landscapes[
        getLoopedIndex(slideIndex + 1, country.landscapes.length)
      ];
      const secondPreview = country.landscapes[
        getLoopedIndex(slideIndex + 2, country.landscapes.length)
      ];
      const photoOne = document.querySelector("#country-photo-one");
      const photoTwo = document.querySelector("#country-photo-two");

      photoOne.src = firstPreview.src;
      photoOne.alt = firstPreview.alt;
      document.querySelector("#country-photo-caption-one").textContent =
        firstPreview.caption;
      photoTwo.src = secondPreview.src;
      photoTwo.alt = secondPreview.alt;
      document.querySelector("#country-photo-caption-two").textContent =
        secondPreview.caption;
    };

    const updateSlide = (index) => {
      activeSlide = getLoopedIndex(index, country.landscapes.length);
      activeHeroImage = 1 - activeHeroImage;
      const nextImage = heroImages[activeHeroImage];
      const image = country.landscapes[activeSlide];
      const requestToken = ++slideTransitionToken;

      nextImage.onload = () => {
        if (requestToken !== slideTransitionToken) return;
        heroImages.forEach((heroImage, heroIndex) => {
          heroImage.classList.toggle("is-active", heroIndex === activeHeroImage);
        });
      };
      nextImage.onerror = () => {
        if (requestToken === slideTransitionToken) {
          console.error(`No se pudo cargar el paisaje de ${country.name}.`);
        }
      };
      nextImage.src = image.src;
      nextImage.alt = image.alt;
      updateHeroCredit(image);
      updateGalleryPreviews(activeSlide);
    };

    // Reset the progress animation and timer whenever the carousel resumes.
    const startCarousel = () => {
      if (reducedMotion) return;
      window.clearInterval(carouselTimer);
      const progressBar = document.querySelector("#hero-progress-bar");
      progressBar.classList.remove("is-running");
      void progressBar.offsetWidth;
      progressBar.classList.add("is-running");
      carouselTimer = window.setInterval(() => {
        updateSlide(activeSlide + 1);
        startCarousel();
      }, 7000);
    };

    const pauseCarousel = () => {
      window.clearInterval(carouselTimer);
      document.querySelector("#hero-progress-bar").classList.remove("is-running");
    };

    // Render the initial slide and its two neighboring landscape previews.
    heroImages[0].src = country.landscapes[0].src;
    heroImages[0].alt = country.landscapes[0].alt;
    updateHeroCredit(country.landscapes[0]);
    renderImageCredits();
    updateGalleryPreviews(0);
    document.title = `${country.name} — Planify`;
    document.querySelector('meta[name="description"]').content =
      `Descubre paisajes de ${country.name} con Planify.`;
    document.querySelector("#slide-previous").addEventListener("click", () => {
      updateSlide(activeSlide - 1);
      startCarousel();
    });
    document.querySelector("#slide-next").addEventListener("click", () => {
      updateSlide(activeSlide + 1);
      startCarousel();
    });
    hero.addEventListener("mouseenter", pauseCarousel);
    hero.addEventListener("mouseleave", startCarousel);
    hero.addEventListener("focusin", pauseCarousel);
    hero.addEventListener("focusout", startCarousel);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) pauseCarousel();
      else startCarousel();
    });

    startCarousel();
  }
}

// Subtle scroll parallax for image elements; schedule work once per animation
// frame and skip it entirely for users who request reduced motion.
if (!reducedMotion) {
  const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
  let framePending = false;

  const updateParallax = () => {
    parallaxItems.forEach((item) => {
      const bounds = item.getBoundingClientRect();
      const speed = Number(item.dataset.parallax) || 0.04;
      const offset = Math.max(
        -32,
        Math.min(32, (bounds.top + bounds.height / 2 - window.innerHeight / 2) * -speed)
      );
      item.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
    framePending = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (framePending) return;
      framePending = true;
      window.requestAnimationFrame(updateParallax);
    },
    { passive: true }
  );
  window.addEventListener("resize", updateParallax);
  updateParallax();
}
