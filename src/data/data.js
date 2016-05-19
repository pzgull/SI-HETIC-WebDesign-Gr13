var path = "./assets/img/";

module.exports = {
  site: {
    title: 'Yakarouler.com'
  },
  topnav: [
    { title: "Pneus et jantes", icon: path + "pneus.png", href: "#", subcat: [] },
    { title: "Batteries", icon: path + "batterie-nav.png", href: "#", subcat: [] },
    { title: "Accessoires et entretien", icon: path + "accessoire.png", href: "#", subcat: [] },
    { title: "Son tel et alarmes", icon: path + "phone.png", href: "#", subcat: [] },
    { title: "Carrosserie", icon: path + "carrosserie-nav.png", href: "#", subcat: [] },
    { title: "Outillage", icon: path + "outils.png", href: "#", subcat: [] },
    { title: "Moto", icon: path + "moto.png", href: "#", subcat: [] },
    { title: "Magasins", icon: path + "magasins.png", href: "#", subcat: [] }
  ],
  tiles: [
    { title: "Freinage", src: path + "freinage.png", color: "orange", href: "#" },
    { title: "Filtre", src: path + "filtre.png", color: "lightergray", href: "#" },
    { title: "Direction", src: path + "direction.png", color: "darkgray", href: "#" },
    { title: "Moteur", src: path + "moteur.png", color: "orange", href: "#" },
    { title: "Echappement", src: path + "echappement.png", color: "darkgray", href: "#" },
    { title: "Carroserie", src: path + "carrosserie.png", color: "orange", href: "#" },
    { title: "Embrayage", src: path + "embrayage.png", color: "lightergray", href: "#" },
    { title: "Chauffage", src: path + "chauffage.png", color: "darkgray", href: "#" },
    { title: "Visibilité", src: path + "visibilite.png", color: "orange", href: "#" },
    { title: "Batterie", src: path + "batterie.png", color: "lightergray", href: "#" },
    { title: "Roue", src: path + "roue.png", color: "darkgray", href: "#" },
    { title: "Habitacle", src: path + "habitacle.png", color: "lightergray", href: "#" }
  ]
};
