// commitlint.config.cjs
// feat : Nouvelles fonctionnalités
// fix : Corrections de bugs
// docs : Documentation uniquement
// style : Mise en forme, point-virgule manquant, etc. (pas de changement de code)
// refactor : Modification du code qui ne corrige pas un bug ni n'ajoute de fonctionnalité
// perf : Modification du code qui améliore les performances
// test : Ajout ou correction de tests
// build : Modification des fichiers de build (webpack, npm, etc.)
// ci : Configuration CI/CD (GitHub Actions, GitLab CI, etc.)
// chore : Autres modifications qui ne modifient pas le code source
// revert : Annulation d'un commit précédent

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 150],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-full-stop': [0],
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'hotfix', 'deps'],
    ],
  },
};
