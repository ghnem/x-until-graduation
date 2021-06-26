<script lang="ts">
	import Footer from '../components/Footer.svelte';
    import Days from '../components/Days.svelte';
    import Weeks from '../components/Weeks.svelte'
</script>

<main>
	<h1>X Until Graduation</h1>
    <Days />
    <Weeks />
</main>
<Footer />

<style>
    main {
        max-width: 800px;
        margin: auto;
        min-height: 100vh;
    }
    h1 {
        color: #4facfe;
    }
</style>
