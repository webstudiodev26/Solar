# Suncokret Solar

Statični sajt za firmu koja postavlja solarne panele. Čist HTML, CSS i JavaScript, bez biblioteka i bez build procesa.

## Struktura

```
index.html      glavna (i jedina) stranica
style.css       stilovi, organizovani po sekcijama
script.js       meni, kalkulator uštede, FAQ, kontakt forma
images/         hero.jpg, tim.jpg
.nojekyll       potreban za GitHub Pages
```

## Pokretanje lokalno

Dupli klik na `index.html`. Nema instalacije.

## Hostovanje na GitHub Pages

1. Napravi novi repozitorijum na GitHubu.
2. Otpremi **sadržaj** ove fascikle, ne samu fasciklu. `index.html` mora biti u korenu repozitorijuma, a pored njega folder `images/`.
3. U repozitorijumu idi na **Settings → Pages**.
4. Pod *Source* izaberi **Deploy from a branch**, granu `main` i folder `/ (root)`. Sačuvaj.
5. Sačekaj minut-dva; adresa sajta biće `https://korisnickoime.github.io/ime-repozitorijuma/`.

### Ako se slike ne vide

- Proveri da folder `images/` zaista postoji u repozitorijumu i da sadrži `hero.jpg` i `tim.jpg`.
- Imena fajlova moraju biti malim slovima. GitHub Pages razlikuje `Hero.jpg` od `hero.jpg`.
- `index.html` mora biti u korenu, a ne u podfascikli.

## Izmena sadržaja

Sve tekstove, brojeve telefona i cene menjaš direktno u `index.html`. Sekcije su označene komentarima (`<!-- HERO -->`, `<!-- USLUGE -->` i tako dalje), a iste oznake postoje i u `style.css`.

Boje se menjaju na jednom mestu, u `:root` bloku na vrhu `style.css`.

## Napomena

Kontakt forma trenutno samo prikazuje poruku o uspehu i ne šalje podatke nigde. Mesto za povezivanje sa serverom ili email servisom označeno je komentarom u `script.js`.

Telefon, email i adresa su izmišljeni podaci za potrebe portfolija.
