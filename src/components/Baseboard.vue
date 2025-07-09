<template>
  <footer class="baseboard paragraph">
    Desenvolvido por Thiago | 2023 - Projeto fictício sem fins comerciais.
  </footer>
</template>

<style scoped>
.baseboard {
  background: var(--verde-escuro, #263A29);
  color: var(--white);
  padding: 1.5rem 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1300px) {
  .baseboard {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .baseboard {
    padding: 1.5rem;
  }
}
</style>