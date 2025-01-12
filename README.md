# job-nimbus

## Install Bun
```bash
curl -fsSL https://bun.sh/install | bash
```

## Run the tests

```bash
bun test
```

## Run the CLI
```bash
bun check '<your-string-here>'
```

## Build the CLI
```bash
bun build index.ts --compile --outfile dist/cli
dist/cli '<your-string-here>'
```
