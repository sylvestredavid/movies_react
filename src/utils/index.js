//fonction qui va trier un array par ordre alphabethique suivant le titre
export default function sortArray(a, b) {
    if (a.titre < b.titre)
        return -1;
    if (a.titre > b.titre)
        return 1;
    return 0;
}
