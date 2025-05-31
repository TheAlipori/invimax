import HeroFloral from "../components/quinceanera/floral/Hero.astro";
import WelcomeFloral from "../components/quinceanera/floral/Welcome.astro";
import DateFloral from "../components/quinceanera/floral/Date.astro";
import Image1Floral from "../components/quinceanera/floral/image1.astro";
import ItinerarioFloral from "../components/quinceanera/floral/Itinerario.astro";
import DetallesFloral from "../components/quinceanera/floral/Detalles.astro";
import WishlistFloral from "../components/quinceanera/floral/Wishlist.astro";
import AsistenciaFloral from "../components/quinceanera/floral/Asistencia.astro";

import HeroMarmol from "../components/quinceanera/marmol/Hero.astro";
import WelcomeMarmol from "../components/quinceanera/marmol/Welcome.astro";
import DateMarmol from "../components/quinceanera/marmol/Date.astro";
import Image1Marmol from "../components/quinceanera/marmol/image1.astro";
import ItinerarioMarmol from "../components/quinceanera/marmol/Itinerario.astro";
import DetallesMarmol from "../components/quinceanera/marmol/Detalles.astro";
import WishlistMarmol from "../components/quinceanera/marmol/Wishlist.astro";
import AsistenciaMarmol from "../components/quinceanera/marmol/Asistencia.astro";

export function getPlantillaComponents(template: string) {
  const components = {
    floral: {
      Hero: HeroFloral,
      Welcome: WelcomeFloral,
      Date: DateFloral,
      Image1: Image1Floral,
      Itinerario: ItinerarioFloral,
      Detalles: DetallesFloral,
      Wishlist: WishlistFloral,
      Asistencia: AsistenciaFloral,
    },
    marmol: {
      Hero: HeroMarmol,
      Welcome: WelcomeMarmol,
      Date: DateMarmol,
      Image1: Image1Marmol,
      Itinerario: ItinerarioMarmol,
      Detalles: DetallesMarmol,
      Wishlist: WishlistMarmol,
      Asistencia: AsistenciaMarmol,
    },
  };

  return components[template] ?? components["floral"];
}