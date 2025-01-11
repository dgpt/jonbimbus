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
# for x64 processors
dist/linux '<your-string-here>'
dist/macos '<your-string-here>'
dist/win.exe '<your-string-here>'

# for ARM processors
dist/linux-arm '<your-string-here>'
dist/macos-arm '<your-string-here>'
```

## Build the CLI
```bash
bun build index.ts --compile --outfile dist/cli
dist/cli '<your-string-here>'
```
