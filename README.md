# Beneath the Surface · Launch Room

[Complete repository directory tree](docs/DIRECTORY.md)

## A doorway is only as good as where it leaves you

A newcomer taps ‘Plant Doctor’ because they have a plant question. If the next page quietly drops them on a general homepage, the link may technically work while the visit fails. That last step is why the Launch Room deserves its own project.

Compare the [navigation component](src/EcosystemTabs.tsx) with the [destination records](src/directory.json). The component tells you what the button promises; the destination tells you where the reader is sent. Neither on its own proves that the promised task can be finished.

Choose a public destination and write down its label, final page and the first action a newcomer can complete. Report a misleading label with a clearer alternative. Leave account-specific routes and internal allocations out of the report.

**Public navigation component edition.** Give projects a shared doorway into POTIFY's public work.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Choose a project from the launch directory. Open http://127.0.0.1:8000/ in a browser. 

### Developer entry points

The recovered navigation component contains the actual project tabs. The portable sample renders those tabs and documents how the original routes fit together. Explore `historical/`, `public/`, `src/`, `tests/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

### Release scope

The export excludes operational material and participant-level allocation rows from the original homepage. potify-launch-room at `6aabc005854f87b5c3bc9065cbc62383e1b58f83`. Original reusable navigation and a generated standalone directory. The production home includes participant-level records and is outside the public developer export. Historical Rootmap portal data from commit aaad562cb8117a13fc49d25cbd6af41aaaf3634c (POTIFY_Replit_Integration.zip) preserves the former Proof Trail and connected routes. Its historical status fields are not current launch evidence.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
