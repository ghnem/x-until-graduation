<script lang="ts">
  import Days from "../components/Days.svelte";
  import Footer from "../components/Footer.svelte";
  import PorgressBar from "../components/Progress.svelte";
  import Weeks from "../components/Weeks.svelte";

  export const title = "X Until Graduation";
  export const description =
    "The number of days, and weeks until the 2022 class of CSE Minya University graduate.";
  export const altDescription = "Graduation hat on top of books";
  export const url = "https://demos.abdulrhmnghanem.tech/x-until-graduation/";
  export const img = "/x-until-graduation/education.png";
</script>

<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <!-- OG -->
  <meta property="og:title" content={title} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={img} />
  <meta property="og:image:alt" content={altDescription} />

  <!-- Twitter -->
  <meta property="twitter:card" content={altDescription} />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={img} />
  <meta
    property="twitter:image:alt"
    content="Image description for accessibility"
  />
</head>
<main>
  <h1>X Until Graduation</h1>
  <p>{description} 🏃‍♂️</p>
  <PorgressBar />
  <Days />
  <Weeks />
</main>
<Footer />

<style>
  @media (min-width: 800px) {
    h1,
    p {
      padding-left: 2rem;
    }
  }
  main {
    margin: auto;
    width: 1000px;
    max-width: 800px;
  }

  p {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    main {
      width: 300px;
    }
  }
  h1 {
    color: #4facfe;
  }
</style>
