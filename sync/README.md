## Basic sync functionality for nightTab

### Setup

Requires environment variable `PASSWORD` be set.

```
cd sync
npm install
cd ..
npm run sync
```

### Enable sync

With sync server running, in nightTab navigate to Settings > Data > Sync and set URL to `http://[ip]:3000` and use the password from your environment variable.

Syncing will take place automatically in the background


### Restoring data on second device

From a blank/default nightTab installation, simply enter the sync information as above and the page will automatically refresh with your restored data.

### Todo
- Sometimes on restoring data it will need a manual refresh to display correctly
- Proper testing, consider this alpha code (it works for me)

### Ideas to consider
- Toggle show/hide password field
- Feedback of sync status
- Debounce state updates/HTTP requests
