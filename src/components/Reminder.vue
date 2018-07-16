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
        <p class="text" v-html="remind.description"></p>
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
          description: "Des formations opérationnelles pour <span class='bold'>gagner en autonomie</span>, maîtriser l'anglais de votre secteur professionnel ou artistique, communiquer par email et téléphone, participer activement à une réunion, mener vos négociations. <span class='bold'>L’objectif - se reconnaître et se sentir plus à l’aise en anglais.</span>"
        },
        {
          img: Insect1,
          title: 'Expression orale',
          description: "L'approche pédagogique met <span class='bold'>l'accent sur l'oral</span> au travers de discussions, de jeux de rôles et de mises en situation."
        },
        {
          img: Insect2,
          title: 'Efficacité',
          description: "Je propose des <span class='bold'>modules sur mesure</span>, adaptés à vos enjeux et à votre environnement professionnel et personnel. Je m'adapte à vous et à vos besoins spécifiques. Un regard individuel mène au <span class='bold'>progrès</span> et à la <span class='bold'>confiance</span>. C'est essentiel et primordial pour moi."
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
