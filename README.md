# Beneath the Surface · Launch Room

[Complete repository directory tree](docs/DIRECTORY.md)

**Public navigation component edition.** Give projects a shared doorway into POTIFY's public work.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Choose a project from the launch directory. Open http://127.0.0.1:8000/ in a browser. 

### Developer entry points

The recovered navigation component contains the actual project tabs. The portable sample renders those tabs and documents how the original routes fit together. Explore `public/`, `src/`, `tests/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

### Release scope

The export excludes operational material and participant-level allocation rows from the original homepage. potify-launch-room at `6aabc005854f87b5c3bc9065cbc62383e1b58f83`. Original reusable navigation and a generated standalone directory. The production home includes participant-level records and is outside the public developer export.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
