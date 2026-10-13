# Sito personale di Giuseppina Andresini

Sito statico in HTML, CSS e JavaScript, senza dipendenze né build, in inglese e pronto per GitHub Pages.

## File

| File | Contenuto |
|---|---|
| `index.html` | Tutti i testi del sito (ricerca, carriera, pubblicazioni, didattica, servizio, talk, contatti) |
| `style.css` | Colori, caratteri, impaginazione, tema scuro e versione per la stampa |
| `script.js` | Figura iniziale con i byte colorati e filtro delle pubblicazioni per tema |
| `cv.pdf` | **Da aggiungere**: il CV completo, linkato dal menu, dall'intestazione e dai contatti |

Per il `cv.pdf` pubblico conviene usare una versione senza data e luogo di nascita, firma e dichiarazione sul trattamento dei dati.

## Modificare i contenuti

- **Nuova pubblicazione**: in `index.html` copia un blocco `<li class="pub">` nel gruppo giusto (riviste, capitoli, conferenze). L'attributo `data-topic` decide in quale filtro compare: `cyber`, `earth` oppure `other`. I contatori dei filtri e dei gruppi nella pagina vanno aggiornati a mano.
- **Nuova voce datata** (incarichi, corsi, talk): copia un blocco `<li>` dentro una lista `class="dated"`.
- **Profili mancanti** (ORCID, DBLP, GitHub, LinkedIn): nella sezione Contact c'è un commento pronto da scommentare.
- **Metriche citazionali**: in cima alla sezione Publications, con la data di rilevazione.

## Pubblicare su GitHub Pages

1. Crea un repository chiamato esattamente `<tuo-username>.github.io` (pubblico).
2. Carica i file nella radice del repository (anche dalla pagina web: "Add file" → "Upload files").
3. Vai su **Settings → Pages**, scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`.
4. Dopo un minuto o due il sito è online su `https://<tuo-username>.github.io`.

Con un repository dal nome diverso, il sito sarà su `https://<tuo-username>.github.io/<nome-repository>/`.

**Dominio personalizzato** (facoltativo): in Settings → Pages inserisci il dominio e configura presso il registrar un record CNAME che punti a `<tuo-username>.github.io`.

## Anteprima in locale

```bash
cd sito-cv
python3 -m http.server 8000
```
Poi apri `http://localhost:8000`.
