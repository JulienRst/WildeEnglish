<template lang="html">
  <section class="reminder frow">
    <div class="remind frow" v-for="(remind, id) in reminds" v-bind:key="id">
      <div class="ctn-img insect">
        <img :src="remind.img" alt="">
      </div>
      <div class="text">
        <div class="title frow">
          <span class="underscore"></span>
          <h3>{{ remind.title }}</h3>
        </div>
        <p class="text">{{ remind.description}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import Insect1 from '../assets/img/Insecte-1.png'
import Insect2 from '../assets/img/Insecte-2.png'
import Insect3 from '../assets/img/Insecte-3.png'
import Insect4 from '../assets/img/Insecte-4.png'

export default {
  name: 'Reminder',
  data() {
    return {
      reminds: [
        {
          img: Insect4,
          title: 'Performance',
          description: "L'impression que vous stagnez ? Votre connaissance de l'anglais évoluera avec vous et vous allez apprendre tous les jours - dans le plaisir !"
        },
        {
          img: Insect1,
          title: 'Expression orale',
          description: "L'approche pédagogique met l'accent sur l'oral au travers de discussions, de jeux de rôles et de mises en situation."
        },
        {
          img: Insect2,
          title: 'Efficacité',
          description: "Je propose des modules sur mesure, adaptés à vos enjeux et à votre environnement professionnel et personnel. Je m'adapte à vous et à vos besoins spécifiques. Un regard individuel mène au progrès et à la confiance. C'est essentiel et primordial pour moi."
        },
        {
          img: Insect3,
          title: 'Outils',
          description: 'Texte, vidéos, audio, images pour le développement lexical, grammatical et la compréhension orale. Utilisation des supports numériques et classiques - TED Conferences, le site de la BBC, articles et éditoriaux de la presse internationale, vos propres documents, livres référencées...'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
